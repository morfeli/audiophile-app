import { useState } from "react";
import styles from "./styles/DetailCard.module.scss";
import InTheBox from "./InTheBox";
import MinusIcon from "./MinusSVG";

const DetailCard = (props) => {
  const { includes } = props;
  const [quantity, setQuantity] = useState(1);

  return (
    <li className={styles.liContainer}>
      <div className={styles.productBox}>
        {props.new ? <p className={styles.newProduct}>New Product</p> : null}
        <h1>{props.name}</h1>
        <p className={styles.description}>{props.description}</p>
        <p className={styles.price}>$ {props.price}</p>
        <div className={styles.buttonBox}>
          <button className={styles.quantityBtn}>
            <MinusIcon />
            {quantity}
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
    </li>
  );
};

export default DetailCard;
