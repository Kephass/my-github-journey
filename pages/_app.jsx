import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en.json';
import { ChakraProvider } from '@chakra-ui/react';
import { RecoilRoot } from 'recoil';
import Header from '../components/Header';
import Footer from '../components/Footer';

TimeAgo.addDefaultLocale(en);

function MyApp({ Component, pageProps }) {
	return (
		<RecoilRoot>
			<ChakraProvider>
				<Header />
				<Component {...pageProps} />
				<Footer />
			</ChakraProvider>
		</RecoilRoot>
	);
}

export default MyApp;
