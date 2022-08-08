import { useSelector } from "react-redux";
import dateStyle from "../styles/components/Updated.module.scss";

export default function Updated() {
	const date = useSelector((state) => state.coindata.data.time.updated);

	return <p className={dateStyle.date}>{date}</p>;
}
