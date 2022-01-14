import { useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import ReactDOM from "react-dom";

import CartContext from "../../store/cart-context";
import styles from "./styles/ThankYou.module.scss";
import ThankYouItems from "./ThankYouItems";

const ThankYou = ({ show }) => {
  const [sendPortal, setSendPortal] = useState(false);
  const storeCtx = useContext(CartContext);

  let totalAmount = `${storeCtx.totalAmount}`;
  let vatAmount = +totalAmount * 0.2;
  let shippingCost = 50;

  let grandTotal = +totalAmount + shippingCost + vatAmount;
  let updatedGrandTotal = grandTotal.toFixed(2);

  let storeItemsArray = storeCtx.items;
  let firstItem = storeItemsArray[0];
  let newArr = [];
  newArr.push(firstItem);

  let itemAmount = storeCtx.items.length;

  let updatedItemAmount = itemAmount - 1;

  let cartItems = (
    <ul>
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
  );

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
            ) : null}
          </div>
          <div className={styles.grandTotal}>
            <h2>Grand Total</h2>
            <p>${updatedGrandTotal}</p>
          </div>
        </div>
        <button className={styles.homeBtn}>Back to Home</button>
      </div>
    </div>
  ) : null;

  useEffect(() => {
    setSendPortal(true);
  }, []);

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
