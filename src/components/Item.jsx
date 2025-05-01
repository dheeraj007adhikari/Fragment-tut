import styles from "./Item.module.css";

const Item = ({ item, bought, handleBuyButton }) => {
  return (
    <li
      key={item}
      class={`${styles["kg-item"]} list-group-item ${bought && "active"}`}
    >
      <span className={`${styles["kg-spans"]}`}>{item}</span>
      <button
        className={`${styles.button} btn btn-info`}
        onClick={handleBuyButton}
      >
        Buy
      </button>
    </li>
  );
};

export default Item;
