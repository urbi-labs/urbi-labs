import { ThemeProvider } from "styled-components";
import Layout from '../components/Layout'
import theme from "../styles/theme";
import '../styles/globals.scss'
import { AppProvider } from "../services/AsideContext";

function MyApp({ Component, pageProps }) {

	return (
		<AppProvider>
			<ThemeProvider theme={theme}>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</ThemeProvider>
		</AppProvider>
	)
}

export default MyApp
