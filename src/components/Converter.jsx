import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import converterStyle from "../styles/components/Converter.module.scss";
import inputStyle from "../styles/components/elements/Input.module.scss";

export default function Converter() {
	const firstInput = useRef();
	const secondInput = useRef();

	const selectedCurrency = useSelector(
		(state) => state.currency.selectedCurrency
	);

	useEffect(() => {
		firstInput.current.value = "";
		secondInput.current.value = "";
	}, [selectedCurrency]);

	const selectedRate = useSelector((state) => state.currency.rate);

	const calculateValue = () => {
		const value = firstInput.current.value;
		const calculate = value * selectedRate.rate_float;
		const roundValue = Math.round(calculate * 100) / 100;
		secondInput.current.value = roundValue;
	};

	const calculateReverse = () => {
		const value = secondInput.current.value;
		const calculate = value / selectedRate.rate_float;
		const roundValue = Math.round(calculate * 100) / 100;
		firstInput.current.value = roundValue;
	};

	return (
		<form className={converterStyle.converter}>
			<div className={converterStyle.box}>
				<input
					ref={firstInput}
					autoComplete="off"
					className={inputStyle.input}
					placeholder="Enter token amount"
					type="text"
					name="from"
					onChange={calculateValue}
				/>
				<p className={converterStyle.label}>BTC</p>
			</div>
			<div className={converterStyle.box}>
				<input
					ref={secondInput}
					autoComplete="off"
					className={inputStyle.input}
					placeholder="Enter currency amount"
					type="text"
					name="to"
					onChange={calculateReverse}
				/>
				<p className={converterStyle.label}>{selectedCurrency}</p>
			</div>
		</form>
	);
}
