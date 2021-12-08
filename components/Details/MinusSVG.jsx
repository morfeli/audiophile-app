import styles from "./styles/SVG.module.scss";

function MinusIcon(props) {
  return (
    <svg
      onClick={props.onClick}
      className={styles.svg}
      xmlns="http://www.w3.org/2000/svg"
      data-name="Livello 1"
      viewBox="0 0 128 128"
    >
      <path d="M64 0a64 64 0 1064 64A64.07 64.07 0 0064 0zm0 122a58 58 0 1158-58 58.07 58.07 0 01-58 58z"></path>
      <path d="M90 61H38a3 3 0 000 6h52a3 3 0 000-6z"></path>
    </svg>
  );
}

export default MinusIcon;
