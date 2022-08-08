import containerStyle from "../../styles/layout/container.module.scss";

export default function RowContainer({ children }) {
	return <div className={containerStyle.rowContainer}>{children}</div>;
}
