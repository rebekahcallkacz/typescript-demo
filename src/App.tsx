import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import { formatUserName } from "./utils";

// Sample response from user endpoint
// Let's create a type for this
const SAMPLE_USER = {
  firstName: "Rebekah",
  lastName: "CK",
  username: "rebekah",
  userId: 123456,
  recipes: [1111, 2222],
};

// Sample response from recipe endpoint
// Let's create a type for this
const RECIPE_ONE = {
  recipeId: 1111,
  title: "Chicken and Rice",
  ingredients: ["tomato", "chicken", "rice"],
  instructions: "Here are all of the instructions",
};

const RECIPE_TWO = {
  recipeId: 2222,
  title: "Strawberry Tart",
  ingredients: ["strawberries", "flour", "butter"],
  instructions: "Here are all of the instructions",
};

// Sample response from recipes endpoint
// Let's create a type for this
const RECIPES = [RECIPE_ONE, RECIPE_TWO];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* let's convert this component to typescript */}
        <Header label={"Here is my app"} />
        {/* let's convert this function to typescript */}
        <p>
          Hello, {formatUserName(SAMPLE_USER.firstName, SAMPLE_USER.lastName)}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
