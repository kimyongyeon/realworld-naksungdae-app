import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Nav from './common/component/nav/Nav';
import { Provider } from 'react-redux';
import store from '../store/store';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <Nav />
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default MyApp;
