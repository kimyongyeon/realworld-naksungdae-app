import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import Nav from './common/component/nav/Nav';

const MyApp = ({ Component, pageProps }: AppProps) => {
	return (
		<RecoilRoot>
			<Nav />
			<Component {...pageProps} />
		</RecoilRoot>
	);
};

export default MyApp;
