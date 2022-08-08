import wrapperStyle from "../../styles/layout/wrapper.module.scss";

export default function Wrapper({ children }) {
	return <div className={wrapperStyle.wrapper}>{children}</div>;
}
