import { useContext } from "react";
import CartContext from "../../store/cart-context";

import styles from "./styles/Summary.module.scss";
import SummaryList from "../../components/Checkout/SummaryList";

const Summary = () => {
  const cart = useContext(CartContext);

  let shippingCost = 50;

  let vat = cart.totalPrice * 0.2;

  let grandTotal = cart.totalPrice + shippingCost;

  const cartItems = (
    <ul className={styles.ul}>
      {cart.items.map((item) => (
        <SummaryList
          key={item.slug}
          name={item.name}
          price={item.price}
          amount={item.amount}
          slug={item.slug}
        />
      ))}
    </ul>
  );

  return (
    <section className={styles.section}>
      <h1>Summary</h1>
      {cartItems}
      <div className={styles.outerDiv}>
        <div className={styles.innerDiv}>
          <h2>Total</h2>
          <span>${cart.totalPrice.toFixed(2)}</span>
        </div>
        <div className={styles.innerDiv}>
          <h2>Shipping</h2>
          <span>${shippingCost.toFixed(2)}</span>
        </div>
        <div className={styles.innerDiv}>
          <h2>VAT 20% (Included)</h2>
          <span>${vat.toFixed(2)}</span>
        </div>
        <div className={styles.totalDiv}>
          <h2>Grand Total</h2>
          <span>${(grandTotal + vat).toFixed(2)}</span>
        </div>
      </div>
    </section>
  );
};

export default Summary;
