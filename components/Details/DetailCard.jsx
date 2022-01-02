import { useState } from "react";
import { useRouter } from "next/router";
import {useContext} from "react";

import styles from "./styles/DetailCard.module.scss";
import InTheBox from "./InTheBox";
import MinusIcon from "./MinusSVG";
import PlusSVG from "./PlusSVG";

import MayLike from "./MayLike";

const DetailCard = (props) => {
  const router = useRouter();
  const { includes, others } = props;

  const [quantity, setQuantity] = useState(1);

  const incrementQuantityHandler = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantityHandler = () => {
    setQuantity(quantity === 1 ? 1 : quantity - 1);
  };

  return (
    <li className={styles.liContainer}>
      <button className={styles.goBackBtn} onClick={() => router.back()}>
        Go Back
      </button>
      <div id={props.slug} />
      <div className={styles.productBox}>
        {props.new ? <p className={styles.newProduct}>New Product</p> : null}
        <h1>{props.name}</h1>
        <p className={styles.description}>{props.description}</p>
        <p className={styles.price}>$ {props.price}</p>
        <div className={styles.btnBox}>
          <button className={styles.quantityBtn}>
            <MinusIcon onClick={decrementQuantityHandler} />

            <span>{quantity}</span>
            <PlusSVG onClick={incrementQuantityHandler} />
          </button>
          <button className={styles.addToCart}>Add to cart</button>
        </div>
      </div>
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
      <div className={styles.imgBox}>
        <div id={props.slug} className="firstImg" />
        <div id={props.slug} className="secondImg" />
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
