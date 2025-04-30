import Item from "./Item";

const FoodItems = ({ items }) => {
  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item
          key={item}
          item={item}
          handleBuyButtonClicked={() => console.log(`${item} being bought`)}
        ></Item>
      ))}
    </ul>
  );
};

export default FoodItems;
