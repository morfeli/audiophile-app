import styles from "./styles/Footer.module.scss";
import Link from "next/link";
import Logo from "../Header/Logo";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Logo />
      <ul>
        <Link href="/">
          <li>Home</li>
        </Link>
        <Link href="/headphones">
          <li>Headphones</li>
        </Link>
        <Link href="/speaker">
          <li>Speakers</li>
        </Link>
        <Link href="/earphones">
          <li>Earphones</li>
        </Link>
      </ul>
      <p>
        Audiophile is an all in one stop to fulfill your audio needs. We're a
        small team of music lovers and sound specialists who are devoted to
        helping you get the most out of personal audio. Come and visit our demo
        facility - we’re open 7 days a week.
      </p>
      <p>Copyright 2021. All Rights Reserved</p>
      <div></div>
    </footer>
  );
};

export default Footer;
