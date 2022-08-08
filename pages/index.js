import { useEffect } from "react";
import { fetchData } from "../utils/fetchData";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { checkLoadingError } from "../utils/checkLoadingError";
import Title from "../components/Title";
import MainLayout from "../components/Layout/MainLayout";
import Wrapper from "../components/Layout/Wrapper";
import Container from "../components/Layout/Container";
import DatePrice from "../components/DatePrice";
import Button from "../components/elements/Button";

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
