import Error from "../components/elements/Error";
import Loader from "../components/elements/Loader";

export const checkLoadingError = (isLoading, isError, Component) => {
	if (isLoading) {
		return <Loader />;
	}
	if (isError) {
		return <Error />;
	} else {
		return Component;
	}
};
