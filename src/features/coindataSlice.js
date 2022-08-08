import { createSlice } from "@reduxjs/toolkit";

export const coindataSlice = createSlice({
	name: "coindata",
	initialState: {
		data: {},
		isLoading: true,
		isError: false,
	},
	reducers: {
		setData: (state, action) => {
			state.data = action.payload;
		},
		setIsLoading: (state, action) => {
			state.isLoading = action.payload;
		},
		setError: (state) => {
			state.error = true;
		},
	},
});

export const { setData, setIsLoading, setError } = coindataSlice.actions;
export default coindataSlice.reducer;
