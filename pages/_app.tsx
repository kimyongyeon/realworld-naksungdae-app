import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Nav from './common/component/nav/Nav';
import { RecoilRoot } from 'recoil';

const MyApp = ({ Component, pageProps }: AppProps) => {
	return (
		<>
			<RecoilRoot>
				<Nav />
				<Component {...pageProps} />
			</RecoilRoot>
		</>
	);
};

export default MyApp;
