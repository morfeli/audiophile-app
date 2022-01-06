import { useState, useRef } from "react";
import styles from "./styles/AmountBox.module.scss";

import MinusIcon from "./MinusSVG";
import PlusSVG from "./PlusSVG";

const AmountButton = (props) => {
  const [amount, setAmount] = useState(1);

  const incrementQuantityHandler = () => {
    setAmount((amount) => amount + 1);
  };

  const decrementQuantityHandler = () => {
    setAmount((amount) => (amount === 1 ? 1 : amount - 1));
  };

  console.log(amount);

  return (
    <button className={styles.quantityBtn}>
      <MinusIcon onClick={decrementQuantityHandler} />
      <span>{amount}</span>
      <PlusSVG onClick={incrementQuantityHandler} />
    </button>
  );
};

export default AmountButton;
