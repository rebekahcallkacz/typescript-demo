import React from "react";
import Header from "./Header";
import { formatUserName } from "./utils";
import Recipe from "./Recipe";


// Sample response from recipe endpoint
// Let's create a type for this
export type TIngredient = {
  ingredient: string;
  quantity: number | string;
};
export type TRecipe = {
  recipeId: number;
  title: string;
  ingredients: Array<TIngredient>;
  instructions: string;
};
    const RECIPE_ONE_INGREDIENTS: Array<TIngredient> = [
        { ingredient: "tomato", quantity: 1 },
        { ingredient: "chicken", quantity: "1 pound" },
        { ingredient: "rice", quantity: "1 cup" }
    ]
    const RECIPE_TWO_INGREDIENTS: Array<TIngredient> = [
        { ingredient: "strawberries", quantity: "1 quart" },
        { ingredient: "flour", quantity: "1 cup" },
        { ingredient: "butter", quantity: "1/2 cup" }
    ]
    

const RECIPE_ONE: TRecipe = {
  recipeId: 1111,
  title: "Chicken and Rice",
  ingredients: RECIPE_ONE_INGREDIENTS,
  instructions: "Here are all of the instructions",
};

const RECIPE_TWO: TRecipe = {
  recipeId: 2222,
  title: "Strawberry Tart",
  ingredients: RECIPE_TWO_INGREDIENTS,
  instructions: "Here are all of the instructions",
};

// Sample response from recipes endpoint
// Let's create a type for this
const RECIPES: Array<TRecipe> = [RECIPE_ONE, RECIPE_TWO];

// Sample response from user endpoint
// Let's create a type for this
type User = {
  firstName?: string;
  lastName?: string;
  username: string;
  userId: number;
  recipes: Array<TRecipe>;
};
const SAMPLE_USER: User = {
  firstName: "Rebekah",
  lastName: "CK",
  username: "rebekah",
  userId: 123456,
  recipes: RECIPES,
};

function App() {
  return (
    <div className="App">
      <Header label={"Here is my app"} />
      <p>
        Hello,{" "}
        {formatUserName(
          SAMPLE_USER.firstName,
          SAMPLE_USER.lastName,
          SAMPLE_USER.username
        )}
      </p>
      {RECIPES.map((recipe) => (
        <Recipe recipe={recipe} />
      ))}
    </div>
  );
}

export default App;
