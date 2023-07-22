import React from "react";
import "./App.css";
import Header from "./Header";
import { formatUserName } from "./utils";

// Sample response from recipe endpoint
// Let's create a type for this
type Recipe = {
  recipeId: number;
  title: string;
  ingredients: Array<string>;
  instructions: string;
};
const RECIPE_ONE: Recipe = {
  recipeId: 1111,
  title: "Chicken and Rice",
  ingredients: ["tomato", "chicken", "rice"],
  instructions: "Here are all of the instructions",
};

const RECIPE_TWO: Recipe = {
  recipeId: 2222,
  title: "Strawberry Tart",
  ingredients: ["strawberries", "flour", "butter"],
  instructions: "Here are all of the instructions",
};

// Sample response from recipes endpoint
// Let's create a type for this
const RECIPES: Array<Recipe> = [RECIPE_ONE, RECIPE_TWO];
console.log(RECIPES);

// Sample response from user endpoint
// Let's create a type for this
type User = {
  firstName?: string;
  lastName?: string;
  username: string;
  userId: number;
  recipes: Array<Recipe>;
};
const SAMPLE_USER: User = {
  firstName: "Rebekah",
  lastName: "CK",
  username: "rebekah",
  userId: 123456,
  recipes: RECIPES,
};

console.log(SAMPLE_USER);

function App() {
  return (
    <div className="App">
      {/* let's convert this component to typescript */}
      <Header label={"Here is my app"} />
      {/* let's convert this function to typescript */}
      <p>
        Hello,{" "}
        {formatUserName(
          SAMPLE_USER.firstName,
          SAMPLE_USER.lastName,
          SAMPLE_USER.username
        )}
      </p>
    </div>
  );
}

export default App;
