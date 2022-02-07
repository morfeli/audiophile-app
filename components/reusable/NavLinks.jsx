import Link from "next/link";
import styles from "./styles/NavLinks.module.scss";

const NavLinks = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <Link href="/">
          <li>Home</li>
        </Link>
        <Link href="/headphones">
          <li>Headphones</li>
        </Link>
        <Link href="/speakers">
          <li>Speakers</li>
        </Link>
        <Link href="/earphones">
          <li>Earphones</li>
        </Link>
      </ul>
    </nav>
  );
};

export default NavLinks;
