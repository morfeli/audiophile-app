import Header from "../../components/Header/Header";
import Checkout from "../../components/Checkout/Checkout.tsx";
import Footer from "../../components/Footer/Footer";

import { useEffect, useContext } from "react";
import { useRouter } from "next/router";
import CartContext from "../../store/cart-context";

const CheckoutPage = () => {
  const storeCtx = useContext(CartContext);
  const router = useRouter();

  useEffect(() => {
    if (storeCtx.items.length < 0) {
      console.log("yes");
    } else {
      return null;
    }
  }, []);

  return (
    <>
      <Header />
      <Checkout />
      <Footer />
    </>
  );
};

export default CheckoutPage;
