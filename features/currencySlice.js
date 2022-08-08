import { createSlice } from "@reduxjs/toolkit";

export const currencySlice = createSlice({
	name: "currency",
	initialState: {
		selectedCurrency: "USD",
		rate: {},
	},
	reducers: {
		setCurrency: (state, action) => {
			state.selectedCurrency = action.payload;
		},
		setRate: (state, action) => {
			state.rate = action.payload;
		},
	},
});

export const { setCurrency, setRate } = currencySlice.actions;
export default currencySlice.reducer;
