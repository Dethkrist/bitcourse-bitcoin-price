import Head from "next/head";
import mainStyle from "../../styles/layout/wrapper.module.scss";
import backgroundStyle from "../../styles/layout/background.module.scss";

export default function MainLayout({ children, title }) {
	return (
		<>
			<Head>
				<title>{title} | BitCourse</title>
				<meta name="keywords" content="next,javascript,nextjs,react" />
				<meta name="description" content="this is next tutorial" />
				<meta charSet="utf-8" />
			</Head>
			<div className={backgroundStyle.area}>
				<ul className={backgroundStyle.bitcoins}>
					<li className={backgroundStyle.logo}></li>
					<li className={backgroundStyle.logo}></li>
					<li className={backgroundStyle.logo}></li>
					<li className={backgroundStyle.logo}></li>
					<li className={backgroundStyle.logo}></li>
					<li className={backgroundStyle.logo}></li>
					<li className={backgroundStyle.logo}></li>
					<li className={backgroundStyle.logo}></li>
					<li className={backgroundStyle.logo}></li>
				</ul>
			</div>
			<main className={mainStyle.main}>{children}</main>
			<footer className={mainStyle.footer}>
				<p>Created by Alex Lukianoff</p>
			</footer>
		</>
	);
}
