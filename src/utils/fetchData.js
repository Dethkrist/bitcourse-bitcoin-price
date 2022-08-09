import { setIsLoading, setError, setData } from "../features/coindataSlice";
import { API_URL } from "./url";

export const fetchData = async (dispatch) => {
	const result = await fetch(API_URL);
	const data = await result.json();
	dispatch(setData(data));
	dispatch(setIsLoading(false));
	if (!data) dispatch(setError(true));
};
