import { useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import ReactDOM from "react-dom";

import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

import styles from "./styles/CartModal.module.scss";

const Cart = ({ show, onCloseModal }) => {
  const [sendPortal, setSendPortal] = useState(false);
  const router = useRouter();

  const storeCtx = useContext(CartContext);

  let totalAmount = `$${storeCtx.totalAmount.toFixed(2)}`;

  let itemsLength = storeCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const cartItemRemoveHandler = (id) => {
    storeCtx.removeItemFromCart(id);
  };

  const cartItemAddHandler = (item) => {
    storeCtx.addItemToCart({ ...item, amount: 1 });
  };

  const clearCartHandler = () => {
    storeCtx.clearCart();
  };

  const routeToCheckOutHandler = () => {
    router.replace("/checkout");
  };

  useEffect(() => {
    setSendPortal(true);
  }, []);

  const cartItems = (
    <ul>
      {storeCtx.items.map((item) => (
        <CartItem
          key={item.slug}
          name={item.name}
          price={item.price}
          amount={item.amount}
          slug={item.slug}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  const checkoutBtn =
    storeCtx.items.length > 0 ? (
      <button onClick={routeToCheckOutHandler} className={styles.checkoutBtn}>
        CHECKOUT
      </button>
    ) : null;

  let modalContent = show ? (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.div1}>
          <h1>
            CART <span>({itemsLength})</span>
          </h1>
          <button onClick={clearCartHandler}>Remove All</button>
        </div>
        <div>{cartItems}</div>
        <div className={styles.div3}>
          <h4>TOTAL</h4>
          <span>{totalAmount}</span>
        </div>
        <div className={styles.btnBox}>
          {checkoutBtn}
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
