import { Input } from "@mui/material";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import React, { useState } from "react";
import { db, auth } from "../firebase";
import SendIcon from "@mui/icons-material/Send";

/**
 * メッセージ送信フォームのコンポーネント
 *
 * @returns
 */
export const SendMessage = () => {
	// messageのtextを管理するState
	const [message, setMessage] = useState<string>("");

	/**
	 * メッセージ送信時にfirebaseDBにメッセージを登録する関数
	 *
	 * @param e
	 */
	const sendMessage = (e: React.FormEvent<HTMLFormElement>) => {
		// 送信時の画面遷移を無効化
		e.preventDefault();

		// firebaseDBにデータを登録する
		addDoc(collection(db, "messages"), {
			text: message,
			// ログインユーザーのphotoURL
			photoURL: auth.currentUser?.photoURL,
			// ログインユーザーのuid
			uid: auth.currentUser?.uid,
			createdAt: Timestamp.now(),
		});

		setMessage("");
	};
	return (
		<div>
			<form onSubmit={sendMessage}>
				<div className="sendMsg">
					<Input
						style={{
							width: "78%",
							fontSize: "15px",
							fontWeight: "550",
							marginLeft: "5px",
							marginBottom: "-3px",
						}}
						onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
							setMessage(e.target.value)
						}
						value={message}
						type="text"
						placeholder="メッセージを入力してください"
					/>
					<SendIcon style={{ color: "#7AC2FF", marginLeft: "20px" }} />
				</div>
			</form>
		</div>
	);
};
