import React from "react";
import { SignIn } from "./components/SignIn";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import { Line } from "./components/Line";

/**
 * アプリケーションを構成するコンポーネント
 *
 * @returns
 */
export const App = () => {
	// ログインユーザーの情報を取得
	const user = useAuthState(auth);
	// ユーザーが認証済みの場合、Lineコンポーネントを描画、認証済みでない場合は、SignInコンポーネントを描画
	return <div>{user ? <Line /> : <SignIn />}</div>;
};
