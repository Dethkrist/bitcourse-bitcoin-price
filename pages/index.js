import { useEffect } from "react";
import { fetchData } from "../src/utils/fetchData";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { checkLoadingError } from "../src/utils/checkLoadingError";
import Title from "../src/components/Title";
import MainLayout from "../src/components/Layout/MainLayout";
import Wrapper from "../src/components/Layout/Wrapper";
import Container from "../src/components/Layout/Container";
import DatePrice from "../src/components/DatePrice";
import Button from "../src/components/elements/Button";

export default function Index() {
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
		router.push("/calculate");
	};

	return (
		<Wrapper>
			<MainLayout title="Current price">
				<Container>
					<Title />
					{checkLoadingError(isLoading, isError, <DatePrice />)}
					<Button onClick={goToPage}>Calculate</Button>
				</Container>
			</MainLayout>
		</Wrapper>
	);
}
