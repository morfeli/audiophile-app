import Image from "next/image";
import Link from "next/link";
import ArrowSVG from "./ArrowSVG";
import styles from "./styles/LinkCard.module.scss";

const LinkCard = (props) => {
  return (
    <Link href={props.id}>
      <li id={props.id} className={styles.linkContainer}>
        <Image
          src={props.src}
          width={200}
          height={200}
          objectFit="cover"
          className={styles.img}
        />
        <h2>{props.title}</h2>
        <div>
          <p>Shop</p>
          <ArrowSVG />
        </div>
      </li>
    </Link>
  );
};

export default LinkCard;
