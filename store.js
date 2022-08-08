import { configureStore } from "@reduxjs/toolkit";
import coindataReducer from "./features/coindataSlice";
import currencyReducer from "./features/currencySlice";

export default configureStore({
	reducer: {
		coindata: coindataReducer,
		currency: currencyReducer,
	},
});
