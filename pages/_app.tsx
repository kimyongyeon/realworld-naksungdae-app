import "../styles/globals.css";
import type { AppProps } from "next/app";
import Nav from "./common/component/nav/Nav";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Nav></Nav>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
