import '../styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react';
import { RecoilRoot } from 'recoil';
import Header from '../components/Header';
import Footer from '../components/Footer';

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
