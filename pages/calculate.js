import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchData } from "../utils/fetchData";
import { useRouter } from "next/router";
import { checkLoadingError } from "../utils/checkLoadingError";
import { useSelector } from "react-redux";
import Wrapper from "../components/Layout/Wrapper";
import MainLayout from "../components/Layout/MainLayout";
import Container from "../components/Layout/Container";
import Title from "../components/Title";
import CalculatePage from "../components/CalculatePage";
import Button from "../components/elements/Button";

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
