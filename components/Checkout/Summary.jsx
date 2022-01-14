import { useContext } from "react";
import CartContext from "../../store/cart-context";

import styles from "./styles/Summary.module.scss";
import SummaryList from "../../components/Checkout/SummaryList";

const Summary = () => {
  const storeCtx = useContext(CartContext);

  let totalAmount = `${storeCtx.totalAmount}`;

  let vatAmount = +totalAmount * 0.2;
  let updatedVAT = vatAmount.toFixed(2);

  let shippingCost = 50;

  let grandTotal = +totalAmount + shippingCost + vatAmount;
  let updatedGrandTotal = grandTotal.toFixed(2);

  const cartItems = (
    <ul className={styles.ul}>
      {storeCtx.items.map((item) => (
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
          <span>${totalAmount}</span>
        </div>
        <div className={styles.innerDiv}>
          <h2>Shipping</h2>
          <span>${shippingCost}</span>
        </div>
        <div className={styles.innerDiv}>
          <h2>VAT 20% (Included)</h2>
          <span>${updatedVAT}</span>
        </div>
        <div className={styles.totalDiv}>
          <h2>Grand Total</h2>
          <span>${updatedGrandTotal}</span>
        </div>
      </div>
    </section>
  );
};

export default Summary;
