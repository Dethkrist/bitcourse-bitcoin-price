import { useSelector } from "react-redux";
import Updated from "./Updated";
import datePriceStyle from "../styles/components/DatePrice.module.scss";
import Price from "./Price";
import Loader from "./elements/Loader";

export default function DatePrice() {
	const isLoading = useSelector((state) => state.coindata.isLoading);
	const isError = useSelector((state) => state.coindata.isError);

	if (isLoading) return <Loader />;
	if (isError) return <h1>Error</h1>;
	return (
		<div className={datePriceStyle.datePrice}>
			<Updated />
			<Price />
		</div>
	);
}
