import { useSelector } from "react-redux";
import converterStyle from "../styles/components/Converter.module.scss";
import inputStyle from "../styles/components/elements/Input.module.scss";

export default function Converter() {
	const selectedCurrency = useSelector(
		(state) => state.currency.selectedCurrency
	);

	return (
		<form className={converterStyle.converter}>
			<div className={converterStyle.box}>
				<input
					className={inputStyle.input}
					placeholder="Enter token amount"
					type="text"
					name="from"
				/>
				<p className={converterStyle.label}>BTC</p>
			</div>
			<div className={converterStyle.box}>
				<input
					className={inputStyle.input}
					placeholder="Enter currency amount"
					type="text"
					name="to"
				/>
				<p className={converterStyle.label}>{selectedCurrency}</p>
			</div>
		</form>
	);
}
