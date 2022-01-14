import { useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import ReactDOM from "react-dom";

import CartContext from "../../store/cart-context";

let thankYouModal = show ? (
  <div>
    <h1>Thank You For Your Order</h1>
    <p>You will recieve an email confirmation shortly.</p>
  </div>
) : null;

const ThankYou = ({ show }) => {
  const [sendPortal, setSendPortal] = useState(false);
  useEffect(() => {
    setSendPortal(true);
  }, []);
};

export default ThankYou;
