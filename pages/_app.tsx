import "styles/index.scss";
import "helpers/icons";
import type { AppProps } from "next/app";

/*
	Entry point
*/

const App = ({ Component, pageProps }: AppProps) => (
	<Component {...pageProps} />
);

export default App;
