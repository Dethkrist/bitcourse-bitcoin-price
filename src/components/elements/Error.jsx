import errorStyle from "../../styles/components/elements/Error.module.scss";

export default function Error() {
	return (
		<p className={errorStyle.error}>
			Oh no, we have a problem, try again later.
		</p>
	);
}
