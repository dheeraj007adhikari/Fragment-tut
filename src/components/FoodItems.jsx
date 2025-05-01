import { useState } from "react";
import Item from "./Item";

const FoodItems = ({ items }) => {
  const [activeItems, setActiveItems] = useState([]);

  let onBuyButton = (item, event) => {
    let newItem = [...activeItems, item];
    setActiveItems(newItem);
  };

  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item
          key={item}
          item={item}
          bought={activeItems.includes(item)}
          handleBuyButton={(event) => {
            onBuyButton(item, event);
          }}
        ></Item>
      ))}
    </ul>
  );
};

export default FoodItems;
