import selectStyles from "../../styles/components/elements/Select.module.scss";

export default function Select(props) {
	return (
		<button className={selectStyles.button} {...props}>
			{props.children}
		</button>
	);
}
