import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchData } from "../src/utils/fetchData";
import { useRouter } from "next/router";
import { checkLoadingError } from "../src/utils/checkLoadingError";
import { useSelector } from "react-redux";
import Wrapper from "../src/components/layout/Wrapper";
import MainLayout from "../src/components/layout/MainLayout";
import Container from "../src/components/layout/Container";
import Title from "../src/components/Title";
import CalculatePage from "../src/components/CalculatePage";
import Button from "../src/components/elements/Button";

export default function Calculate() {
	const dispatch = useDispatch();
	const router = useRouter();

	const isLoading = useSelector((state) => state.coindata.isLoading);
	const isError = useSelector((state) => state.coindata.isError);

	useEffect(() => {
		fetchData(dispatch);
		refreshData();
	}, []);

	const refreshData = () => {
		setInterval(() => {
			fetchData(dispatch);
		}, 30000);
	};

	const goToPage = () => {
		router.push("/");
	};

	return (
		<Wrapper>
			<MainLayout title="Calculate">
				<Container>
					<Title />
					{checkLoadingError(isLoading, isError, <CalculatePage />)}
					<Button onClick={goToPage}>Main Page</Button>
				</Container>
			</MainLayout>
		</Wrapper>
	);
}
