import styles from "./styles/Header.module.scss";

import MobileMenuBtn from "./MobileMenu";
import NavLinks from "../reusable/NavLinks";
import Logo from "./Logo";
import CartIcon from "./CartIcon";

const Header = () => {
  return (
    <header className={styles.header}>
      <MobileMenuBtn />

      <NavLinks />

      <Logo />

      <CartIcon />
    </header>
  );
};

export default Header;
