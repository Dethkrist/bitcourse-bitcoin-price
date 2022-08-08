import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setCurrency } from "../features/currencySlice";
import Select from "./elements/select";
import priceStyle from "../styles/components/Price.module.scss";
import menuStyle from "../styles/components/elements/CurrencyMenu.module.scss";

export default function Price() {
	const ref = useRef();

	const [menu, setMenu] = useState(false);
	const [price, setPrice] = useState({});

	const priceUSD = useSelector((state) => state.coindata.data.bpi.USD);
	const priceEUR = useSelector((state) => state.coindata.data.bpi.EUR);
	const priceGBP = useSelector((state) => state.coindata.data.bpi.GBP);

	const dispatch = useDispatch();

	const selectedCurrency = useSelector(
		(state) => state.currency.selectedCurrency
	);

	useEffect(() => {
		const checkIfClickedOutside = (e) => {
			if (menu && ref.current && !ref.current.contains(e.target)) {
				setMenu(false);
			}
		};
		document.addEventListener("mousedown", checkIfClickedOutside);
		return () => {
			document.removeEventListener("mousedown", checkIfClickedOutside);
		};
	}, [menu]);

	useEffect(() => {
		if (selectedCurrency === "USD") {
			setPrice(priceUSD);
		}
		if (selectedCurrency === "EUR") {
			setPrice(priceEUR);
		}
		if (selectedCurrency === "GBP") {
			setPrice(priceGBP);
		}
	}, [selectedCurrency]);

	const showMenu = () => {
		if (!menu) {
			setMenu(true);
		} else {
			setMenu(false);
		}
	};

	const selectCurrency = (e) => {
		dispatch(setCurrency(e.target.value));
		setMenu(false);
	};

	const roundRate = () => {
		const roundedValue = Math.round(price.rate_float * 100) / 100;
		return roundedValue.toLocaleString("en-US");
	};

	return (
		<div className={priceStyle.price}>
			<h3 className={priceStyle.number}>{roundRate()}</h3>
			<Select onClick={showMenu}>{selectedCurrency}</Select>
			{menu ? (
				<div ref={ref} className={menuStyle.menu}>
					<ul onClick={(e) => selectCurrency(e)}>
						<li>
							<button value="USD">USD</button>
						</li>
						<li>
							<button value="EUR">EUR</button>
						</li>
						<li>
							<button value="GBP">GBP</button>
						</li>
					</ul>
				</div>
			) : null}
		</div>
	);
}
