import React, { useState } from "react";
import FoodItems from "./components/FoodItems";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
import TextBox from "./components/TextBox";
function App() {
  //let foodItems = ["Sabji", "Green Vegetables", "Strawberry", "Milk", "ghee"];

  // let textStateArr = useState("Your food");
  // let textToShow = textStateArr[0];
  // let setTextState = textStateArr[1];

  //or

  //let [textToShow, setTextState] = useState();

  let [foodItems, setFoodItems] = useState([]);

  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      event.target.value = "";
      let newItems = [...foodItems, newFoodItem];
      setFoodItems(newItems);
    }
  };

  return (
    <Container>
      <h1 className="food-h1">Healthy Food</h1>
      <TextBox handelKeyDown={onKeyDown}></TextBox>
      <ErrorMessage Items={foodItems}></ErrorMessage>

      <FoodItems Items={foodItems}></FoodItems>
    </Container>
  );
}
export default App;
