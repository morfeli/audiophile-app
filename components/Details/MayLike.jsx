import Link from "next/link";
import styles from "./styles/MayLike.module.scss";

const MayLike = (props) => {
  console.log(props.id);

  let classes = "";

  if (props.id === 0) {
    classes = "firstOption";
  }
  if (props.id === 1) {
    classes = "secondOption";
  }
  if (props.id === 2) {
    classes = "thirdOption";
  }

  return (
    <li className={styles.liContainer}>
      <div id={props.slug} className={classes} />
      <h2>{props.name}</h2>

      <Link href={`${props.category}/${props.slug}`}>
        <button>SEE PRODUCT</button>
      </Link>
    </li>
  );
};

export default MayLike;
