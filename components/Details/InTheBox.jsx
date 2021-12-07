import styles from "./styles/InTheBox.module.scss";

const InTheBox = (props) => {
  return (
    <li className={styles.liBox}>
      <span>{props.quantity}x</span>
      <p>{props.item}</p>
    </li>
  );
};

export default InTheBox;
