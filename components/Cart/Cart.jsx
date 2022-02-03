import { useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import ReactDOM from "react-dom";

import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

import styles from "./styles/CartModal.module.scss";

const Cart = ({ show, onCloseModal }) => {
  const [sendPortal, setSendPortal] = useState(false);

  const router = useRouter();

  const cart = useContext(CartContext);

  const routeToCheckOutHandler = () => {
    router.replace("/checkout");
  };

  useEffect(() => {
    setSendPortal(true);
  }, []);

  let modalContent = show ? (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.div1}>
          <h1>
            CART <span>({cart.totalItems})</span>
          </h1>
          <button onClick={cart.clear}>Remove All</button>
        </div>
        <div>
          {cart.items.length ? (
            <ul>
              {cart.items.map((item) => (
                <CartItem
                  key={item.slug}
                  name={item.name}
                  price={item.price}
                  amount={item.amount}
                  slug={item.slug}
                  onRemove={() => cart.remove(item.id)}
                  onAdd={() => cart.add(item)}
                />
              ))}
            </ul>
          ) : (
            <p>No items in cart.</p>
          )}
        </div>
        <div className={styles.div3}>
          <h4>TOTAL</h4>
          <span>{`$${cart.totalPrice.toFixed(2)}`}</span>
        </div>
        <div className={styles.btnBox}>
          {cart.items.length ? (
            <button
              onClick={routeToCheckOutHandler}
              className={styles.checkoutBtn}
            >
              CHECKOUT
            </button>
          ) : null}
          <button className={styles.closeBtn} onClick={onCloseModal}>
            CLOSE
          </button>
        </div>
      </div>
    </div>
  ) : null;

  if (sendPortal) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById("modal-root")
    );
  } else {
    return null;
  }
};

export default Cart;
