import Image from "next/image";
import bestImg from "../../assets/shared/mobile/image-best-gear.jpg";
import styles from "./styles/BestHero.module.scss";

const BestHero = () => {
  return (
    <section className={styles.section}>
      <div className={styles.imgBox}>
        <Image src={bestImg} />
      </div>
      <div className={styles.textBox}>
        <h1>
          Bringing You The <span>Best</span> Audio Gear
        </h1>
        <p>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </section>
  );
};

export default BestHero;
