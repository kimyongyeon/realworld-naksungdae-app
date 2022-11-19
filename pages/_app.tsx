import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Nav from './common/component/nav/Nav';
import { Provider, useDispatch } from 'react-redux';
import store, { wrapper } from '../store/store';
import { setIsLoaded, getUser, setUser } from '@src/store/authSlice';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Nav />
      <Component {...pageProps} />
    </>
  );
}

export default wrapper.withRedux(MyApp);

export const getInitialProps = wrapper.getInitialPageProps(() => async ({ res, req }) => {
  const token = '';
  if (token === null) {
    store.dispatch(setIsLoaded());
    return { props: {} };
  }
  const user = await getUser(token);
  store.dispatch(setUser(user));
  return { props: {} };
});
