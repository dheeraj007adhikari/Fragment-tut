import styles from "./Item.module.css";

const Item = ({ item, handleBuyButtonClicked }) => {
  return (
    <li key={item} class={`${styles["kg-item"]} list-group-item`}>
      <span className={`${styles["kg-spans"]}`}>{item}</span>
      <button
        className={`${styles.button} btn btn-info`}
        onClick={handleBuyButtonClicked}
      >
        Buy
      </button>
    </li>
  );
};

export default Item;
