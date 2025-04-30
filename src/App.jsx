import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import ErrorMessage from "./components/ErrorMessage";
import FoodItems from "./components/FoodItems";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";

function App() {
  let foodItems = ["dal", "green vegetable", "roti", "salad", "milk", "ghee"];

  const handleOnChange = () => {
    (event) => {
      console.log(event.target.value);
    };
  };

  return (
    <>
      <Container>
        <h1 className="food-heading">Healthy Food</h1>
        <FoodInput handleOnChange={handleOnChange}></FoodInput>
        <ErrorMessage items={foodItems}></ErrorMessage>
        <FoodItems items={foodItems}></FoodItems>
      </Container>
    </>
  );
}

export default App;
