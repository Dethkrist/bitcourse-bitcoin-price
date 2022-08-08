import { useEffect } from "react";
import { fetchData } from "./api/fetchData";
import { useDispatch } from "react-redux";
import Title from "../components/Title";
import MainLayout from "../components/Layout/MainLayout";
import Wrapper from "../components/Layout/Wrapper";
import Container from "../components/Layout/Container";
import DatePrice from "../components/DatePrice";

export default function Index() {
	const dispatch = useDispatch();

	useEffect(() => {
		fetchData(dispatch);
		refreshData();
	}, []);

	const refreshData = () => {
		setInterval(() => {
			fetchData(dispatch);
		}, 30000);
	};

	return (
		<Wrapper>
			<MainLayout title="Current price">
				<Container>
					<Title />
					<DatePrice />
					{/* <h3>
						{data.bpi.USD.rate} {data.bpi.USD.code}
					</h3> */}
				</Container>
			</MainLayout>
		</Wrapper>
	);
}
