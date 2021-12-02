import styles from "./styles/EarphoneHero.module.scss";

const EarphoneHero = () => {
  return (
    <section className={styles.section}>
      <div className={styles.divOne} />

      <div className={styles.divTwo}>
        <h1>YX1 EARPHONES</h1>
        <button>See Product</button>
      </div>
    </section>
  );
};

export default EarphoneHero;
