import { useContext, useState, useEffect } from "react";
import CartContext from "../../store/cart-context";
import Link from "next/link";
import ReactDOM from "react-dom";

import ThankYouItems from "./ThankYouItems";
import styles from "./styles/ThankYou.module.scss";

const ThankYou = ({ show }) => {
  const [sendPortal, setSendPortal] = useState(false);

  const cart = useContext(CartContext);

  let shippingCost = 50;

  let vat = cart.totalPrice * 0.2;

  let grandTotal = cart.totalPrice + shippingCost;

  useEffect(() => {
    setSendPortal(true);
  }, []);

  let firstItem = cart.items[0];
  let newArr = [];
  newArr.push(firstItem);

  let itemAmount = cart.items.length;

  let updatedItemAmount = itemAmount - 1;

  let cartItems = firstItem ? (
    <ul style={{ marginBottom: "1rem" }}>
      {newArr.map((item) => (
        <ThankYouItems
          key={item.slug}
          id={item.slug}
          name={item.name}
          price={item.price}
          amount={item.amount}
        />
      ))}
    </ul>
  ) : null;

  let thankYouModal = show ? (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div>
          <h1>Thank You For Your Order</h1>
          <p style={{ textAlign: "center" }}>
            You will recieve an email confirmation shortly.
          </p>
        </div>
        <div className={styles.box}>
          <div className={styles.cartItem}>
            {cartItems}
            <hr />
            {updatedItemAmount > 0 ? (
              <p style={{ textAlign: "center", marginTop: "1rem" }}>
                and <span>{updatedItemAmount}</span> other item(s)
              </p>
            ) : (
              <p style={{ textAlign: "center", marginTop: "0.5rem" }}>
                New gear coming your way!
              </p>
            )}
          </div>
          <div className={styles.grandTotal}>
            <h2>Grand Total</h2>
            <p>${(grandTotal + vat).toFixed(2)}</p>
          </div>
        </div>
        <Link href="/">
          <button className={styles.homeBtn}>Back to Home</button>
        </Link>
      </div>
    </div>
  ) : null;

  if (sendPortal) {
    return ReactDOM.createPortal(
      thankYouModal,
      document.getElementById("thankYouModal-root")
    );
  } else {
    return null;
  }
};

export default ThankYou;
