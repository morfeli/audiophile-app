import Link from "next/link";
import styles from "./styles/DataCards.module.scss";

const EarphoneCards = (props) => {
  return (
    <li id={props.id} className={styles.liContainer}>
      <div id={props.slug} />
      <div className={styles.textBox}>
        {props.new ? <span>New Product</span> : null}
        <h1>{props.name}</h1>
        <p>{props.description}</p>
        <Link href={`/${props.category}/${props.slug}`}>
          <button>See Product</button>
        </Link>
      </div>
    </li>
  );
};

export default EarphoneCards;
