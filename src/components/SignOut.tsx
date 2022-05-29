import { Button } from "@mui/material";
import { FC } from "react";
import { auth } from "../firebase";

/**
 * サインアウトに関するコンポーネント
 *
 * @returns
 */
export const SignOut: FC = () => {
	return (
		<div>
			{/* ボタン押下時サインアウトする */}
			<Button onClick={() => auth.signOut()}>サインアウト</Button>
		</div>
	);
};
