import { SignOut } from "./SignOut";
import { auth, db } from "../firebase";
import {
	collection,
	DocumentData,
	limit,
	onSnapshot,
	orderBy,
	query,
} from "firebase/firestore";
import React, { FC, useEffect, useState } from "react";
import { SendMessage } from "./SendMessage";

/**
 * チャットルームのコンポーネント
 *
 * @returns
 */
export const Line: FC = () => {
	// firebaseDBのmessagesを管理するState
	const [messages, setMessages] = useState<DocumentData[]>([]);

	// マウント時のみデータを取得する
	useEffect(() => {
		// dbからmessagesのデータを取得
		const messageData = collection(db, "messages");
		// dbから取得したデータをtimestamp(降順)で並び替える
		const latestMessageData = query(
			messageData,
			orderBy("createdAt"),
			// 最大50件取得
			limit(50)
		);
		/// リアルタイムでデータを取得する
		onSnapshot(latestMessageData, (querySnapshot) => {
			setMessages(querySnapshot.docs.map((doc) => doc.data()));
		});
	}, []);

	return (
		<div>
			<SignOut />
			<div className="msgs">
				{messages.map(({ id = uuid(), text, photoURL, uid }) => (
					<div>
						<div
							key={id}
							// ログインユーザーかそうでないかでクラスを変える
							className={`msg ${
								uid === auth.currentUser?.uid ? "sent" : "received"
							}`}
						>
							<img src={photoURL} alt="" />
							<p>{text}</p>
						</div>
					</div>
				))}
			</div>
			<SendMessage />
		</div>
	);
};
