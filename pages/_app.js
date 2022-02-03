import "../styles/globals.scss";

import CartProvider from "../store/CartProvider";
import { parseCookies } from "../components/helper/ParseReq";

function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  );
}

export default MyApp;
