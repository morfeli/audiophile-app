import { useState } from "react";

import styles from "./styles/Header.module.scss";

import MobileMenuBtn from "./MobileMenu";
import Logo from "./Logo";
import CartIcon from "./CartIcon";

const Header = () => {
  const [cartIsShow, setCartIsShow] = useState(false);

  return (
    <header className={styles.header}>
      <MobileMenuBtn />
      <Logo />
      <CartIcon />
    </header>
  );
};

export default Header;
