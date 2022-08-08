import titleStyle from "../styles/components/Title.module.scss";

export default function Title() {
	return (
		<h1 className={titleStyle.title}>
			<span className={titleStyle.b}>B</span>it
			<span className={titleStyle.course}>Course</span>
		</h1>
	);
}
