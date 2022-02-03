import { useState, useContext } from "react";
import CartContext from "../../store/cart-context";
import { useRouter } from "next/router";

import styles from "./styles/DetailCard.module.scss";

import MayLike from "./MayLike";
import InTheBox from "./InTheBox";
import MinusIcon from "./MinusSVG";
import PlusSVG from "./PlusSVG";

const DetailCard = (props) => {
  const cart = useContext(CartContext);
  const router = useRouter();
  const [amount, setAmount] = useState(1);
  const { includes, others } = props;

  const incrementQuantityHandler = () => {
    setAmount((current) => current + 1);
  };

  const decrementQuantityHandler = () => {
    setAmount((current) => (current === 1 ? 1 : current - 1));
  };

  const addToCartHandler = () => {
    cart.add({
      id: props.slug,
      slug: props.slug,
      name: props.name,
      price: props.price,
      amount: amount,
    });
  };

  return (
    <li className={styles.liContainer}>
      <button className={styles.goBackBtn} onClick={() => router.back()}>
        Go Back
      </button>
      <div className={styles.desktopBox}>
        <div id={props.slug} />
        <div className={styles.productBox}>
          {props.new ? <p className={styles.newProduct}>New Product</p> : null}
          <h1>{props.name}</h1>
          <p className={styles.description}>{props.description}</p>
          <p className={styles.price}>$ {props.price}</p>
          <div className={styles.btnBox}>
            <button className={styles.quantityBtn}>
              <MinusIcon onClick={decrementQuantityHandler} />
              <span>{amount}</span>
              <PlusSVG onClick={incrementQuantityHandler} />
            </button>
            <button className={styles.addToCart} onClick={addToCartHandler}>
              Add to cart
            </button>
            <button
              onClick={() => {
                localStorage.clear();
              }}
            >
              clear
            </button>
          </div>
        </div>
      </div>

      <div className={styles.desktopBoxTwo}>
        <div className={styles.featuresBox}>
          <h2>Features</h2>
          <p>{props.features}</p>
        </div>
        <div className={styles.inTheBox}>
          <h2>In The Box</h2>
          <ul>
            {includes.map((item, i) => (
              <InTheBox key={i} quantity={item.quantity} item={item.item} />
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.imgBox}>
        <div className={styles.imgBoxTablet}>
          <div id={props.slug} className="firstImg" />
          <div id={props.slug} className="secondImg" />
        </div>
        <div id={props.slug} className="thirdImg" />
      </div>
      <div className={styles.mayLikeBox}>
        <h1>You May Also Like</h1>
        <ul>
          {others.map((item, i) => (
            <MayLike
              key={i}
              slug={item.slug}
              name={item.name}
              id={i}
              category={item.category}
            />
          ))}
        </ul>
      </div>
    </li>
  );
};

export default DetailCard;
