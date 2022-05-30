import { Button } from "@mui/material";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase";
import React, { FC } from "react";

/**
 * サインインボタンのコンポーネント
 *
 * @returns
 */
export const SignIn: FC = () => {
	/**
	 * google認証ログインを行う関数
	 *
	 */
	const signInWithGoogle = () => {
		// Googleプロバイダオブジェクトのインスタンス作成
		const provider = new GoogleAuthProvider();
		// Google認証を実行する
		signInWithPopup(auth, provider);
	};

	return (
		<div>
			<Button onClick={signInWithGoogle}>グーグルでログインする</Button>
		</div>
	);
};
