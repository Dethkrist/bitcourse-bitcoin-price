import containerStyle from "../../styles/layout/container.module.scss";

export default function Container({ children }) {
	return <div className={containerStyle.container}>{children}</div>;
}
