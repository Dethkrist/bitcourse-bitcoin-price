import Loader from "../components/elements/Loader";

export const checkLoadingError = (isLoading, isError, Component) => {
	if (isLoading) {
		return <Loader />;
	}
	if (isError) {
		return <h1>Error</h1>;
	} else {
		return Component;
	}
};
