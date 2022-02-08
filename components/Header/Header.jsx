import { useState } from "react";

import styles from "./styles/Header.module.scss";
import MobileMenuBtn from "./MobileMenu";
import NavLinks from "../reusable/NavLinks";
import Logo from "./Logo";
import CartIcon from "./CartIcon";

const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const toggleMenuHandler = () => {
    setMenuIsOpen((current) => !current);
  };

  return (
    <header className={styles.header}>
      <MobileMenuBtn active={menuIsOpen} toggle={toggleMenuHandler} />

      <NavLinks open={menuIsOpen} />

      <Logo />

      <CartIcon />
    </header>
  );
};

export default Header;
