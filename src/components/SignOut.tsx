import { Button } from "@mui/material";
import { FC } from "react";
import { auth } from "../firebase";
import CallIcon from "@mui/icons-material/Call";

/**
 * サインアウトボタンのコンポーネント
 *
 * @returns
 */
export const SignOut: FC = () => {
	return (
		<div className="header">
			{/* ボタン押下時サインアウトする */}
			<Button
				onClick={() => auth.signOut()}
				style={{ color: "white", fontSize: "15px" }}
			>
				サインアウト
			</Button>
			{/* ログインユーザーのユーザー名を表示 */}
			<h3>{auth.currentUser?.displayName}</h3>
			<CallIcon />
		</div>
	);
};
