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
	const [menuAnimation, setMenuAnimation] = useState(false);
	const [price, setPrice] = useState({});

	const priceUSD = useSelector((state) => state.coindata.data.bpi.USD);
	const priceEUR = useSelector((state) => state.coindata.data.bpi.EUR);
	const priceGBP = useSelector((state) => state.coindata.data.bpi.GBP);

	const dispatch = useDispatch();

	const selectedCurrency = useSelector(
		(state) => state.currency.selectedCurrency
	);

	const checkIfClickedOutside = (e) => {
		if (menu && ref.current && !ref.current.contains(e.target)) {
			closeMenu();
			document.removeEventListener("mousedown", checkIfClickedOutside);
		}
	};

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
			closeMenu();
		}
	};

	const closeMenu = () => {
		setMenuAnimation(true);
		setTimeout(() => {
			setMenu(false);
			setMenuAnimation(false);
		}, 500);
	};

	const setAnimationClass = () => {
		if (menuAnimation) {
			return `${menuStyle.menu} ${menuStyle.menuOff}`;
		} else {
			return menuStyle.menu;
		}
	};

	const renderMenu = () => {
		if (menu) {
			document.addEventListener("mousedown", checkIfClickedOutside);
			return (
				<div className={setAnimationClass()}>
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
			);
		}
	};

	const selectCurrency = (e) => {
		dispatch(setCurrency(e.target.value));
		closeMenu();
	};

	const roundRate = () => {
		const roundedValue = Math.round(price.rate_float * 100) / 100;
		return roundedValue.toLocaleString("en-US");
	};

	return (
		<div className={priceStyle.price}>
			<h3 className={priceStyle.number}>{roundRate()}</h3>
			<div ref={ref}>
				<Select onClick={showMenu}>{selectedCurrency}</Select>
				{renderMenu()}
			</div>
		</div>
	);
}
