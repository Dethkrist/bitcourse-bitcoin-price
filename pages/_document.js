import Document, { Html, Head, Main, NextScript } from "next/document";

export default class ThisDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					<link
						href="https://fonts.googleapis.com/css?family=Roboto:regular"
						rel="stylesheet"
					/>
					<link
						href="https://fonts.googleapis.com/css?family=Roboto+Condensed:regular,700"
						rel="stylesheet"
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
