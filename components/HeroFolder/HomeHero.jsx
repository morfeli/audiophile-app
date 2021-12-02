import styles from "./styles/HomeHero.module.scss";

const HomeHero = () => {
  return (
    <section className={styles.heroHome}>
      <div>
        <h2>New Product</h2>
        <h1>XX99 MARK II HEADPHONES</h1>
        <p>
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <button>See Product</button>
      </div>
    </section>
  );
};

export default HomeHero;
