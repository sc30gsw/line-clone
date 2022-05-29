import { Button } from "@mui/material";
import { auth } from "../firebase";

/**
 * サインアウトに関するコンポーネント
 *
 * @returns
 */
export const SignOut = () => {
	return (
		<div>
			{/* ボタン押下時サインアウトする */}
			<Button onClick={() => auth.signOut()}>サインアウト</Button>
		</div>
	);
};
