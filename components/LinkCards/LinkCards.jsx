import headphoneImg from "../../assets/product-xx99-mark-one-headphones/mobile/image-product.jpg";
import speakerImg from "../../assets/product-zx9-speaker/mobile/image-product.jpg";
import earphoneImg from "../../assets/product-yx1-earphones/mobile/image-product.jpg";

import LinkCard from "./LinkCard";
import styles from "./styles/LinkCards.module.scss";

const cardArr = [
  {
    id: "headphones",
    src: headphoneImg,
    title: "Headphones",
  },
  {
    id: "speakers",
    src: speakerImg,
    title: "Speakers",
  },
  {
    id: "earphones",
    src: earphoneImg,
    title: "Earphones",
  },
];

const LinkCards = () => {
  return (
    <ul className={styles.linkCards}>
      {cardArr.map((item) => (
        <LinkCard
          key={item.id}
          id={item.id}
          src={item.src}
          title={item.title}
        />
      ))}
    </ul>
  );
};

export default LinkCards;
