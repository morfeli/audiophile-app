import MinusIcon from "../Details/MinusSVG";
import PlusSVG from "../Details/PlusSVG";

import styles from "./styles/CartItem.module.scss";

const CartItem = (props) => {
  return (
    <li className={styles.itemBox}>
      <div className={styles.div1}>
        <h3>{props.name}</h3>
        <span>${props.price}</span>
      </div>
      <div className={styles.div2}>
        <button>
          <MinusIcon onClick={props.onRemove} />

          <span>{props.amount}</span>

          <PlusSVG onClick={props.onAdd} />
        </button>
      </div>
    </li>
  );
};

export default CartItem;
