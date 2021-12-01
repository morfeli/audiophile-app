import { useEffect } from "react";
import styles from "./styles/MobileMenu.module.scss";

const MobileMenuBtn = (props) => {
  useEffect(() => {
    if (!props.active) {
      const element = document.getElementById("checkbox");
      element.checked = false;
    }
  }, [props]);

  return (
    <label className={styles.label}>
      <input type="checkbox" id="checkbox" />
      <div className={styles.toggleButton} onClick={props.event}>
        <div className={styles.top}></div>
        <div className={styles.middle}></div>
        <div className={styles.bottom}></div>
      </div>
    </label>
  );
};

export default MobileMenuBtn;
