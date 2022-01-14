import styles from "./styles/ThankYouItems.module.scss";

const ThankYouItems = ({ name, price, amount, id }) => {
  return (
    <li className={styles.li}>
      <div>
        <h2>{name}</h2>
        <p>${price}</p>
      </div>
      <p>x{amount}</p>
    </li>
  );
};

export default ThankYouItems;
