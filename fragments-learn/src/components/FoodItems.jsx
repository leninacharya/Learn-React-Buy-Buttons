import { useState } from "react";
import Item from "./item";

function FoodItems({ Items }) {
  let [activeItems, setActiveItems] = useState([]);

  let onBuyButton = (event, item) => {
    let newItems = [...activeItems, item];
    setActiveItems(newItems);
  };
  return (
    <ul className="list-group">
      {Items?.map((item) => (
        <Item
          key={item}
          foodItem={item}
          bought={activeItems.includes(item)}
          handelBuyButton={(event) => {
            onBuyButton(event, item);
          }}
        ></Item>
      ))}
    </ul>
  );
}
export default FoodItems;
