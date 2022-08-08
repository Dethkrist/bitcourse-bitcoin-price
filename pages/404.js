import errorPageStyle from "../src/styles/components/ErrorPage.module.scss";
import { useRouter } from "next/router";
import Button from "../src/components/elements/Button";
import Wrapper from "../src/components/Layout/Wrapper";

export default function ErrorPage() {
	const router = useRouter();

	const goToPage = () => {
		router.push("/");
	};
	return (
		<Wrapper>
			<h1 className={errorPageStyle.title}>404</h1>
			<p className={errorPageStyle.text}>
				Oops... this page does not exist. Maybe better go to the safest place?
			</p>
			<Button onClick={goToPage}>Main Page</Button>
		</Wrapper>
	);
}
