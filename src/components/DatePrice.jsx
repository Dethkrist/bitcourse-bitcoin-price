import { useRouter } from "next/router";
import Updated from "./Updated";
import datePriceStyle from "../styles/components/DatePrice.module.scss";
import Price from "./Price";

export default function DatePrice() {
	const router = useRouter();

	const setAnimation = () => {
		if (router.pathname === "/calculate") {
			return `${datePriceStyle.datePrice} ${datePriceStyle.calculatePage}`;
		} else {
			return datePriceStyle.datePrice;
		}
	};

	return (
		<div className={setAnimation()}>
			<Updated />
			<Price />
		</div>
	);
}
