import styles from "./styles/SummaryList.module.scss";

const SummaryList = ({ name, price, amount, slug }) => {
  return (
    <li className={styles.li}>
      <div className={styles.innerBox}>
        <h4>{name}</h4>
        <p>${price}</p>
      </div>
      <p>x{amount}</p>
    </li>
  );
};

export default SummaryList;
