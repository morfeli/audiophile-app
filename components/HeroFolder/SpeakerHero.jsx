import Image from "next/image";
import styles from "./styles/SpeakerHero1.module.scss";
import speakerImg from "../../assets/home/mobile/image-speaker-zx9.png";

const SpeakerHero1 = () => {
  return (
    <section className={styles.section}>
      <div className={styles.imgDiv}>
        <Image src={speakerImg} layout="responsive" />
      </div>
      <div className={styles.textBox}>
        <h1>ZX9 SPEAKER</h1>
        <p>
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </p>
        <button>See Product</button>
      </div>
    </section>
  );
};

export default SpeakerHero1;
