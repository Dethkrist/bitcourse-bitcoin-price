import buttonStyle from "../../styles/components/elements/Button.module.scss";

export default function Button(props) {
	return (
		<button className={buttonStyle.button} {...props}>
			<div></div>
			<p> {props.children}</p>
		</button>
	);
}
