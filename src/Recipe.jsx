import { React } from "react";

import IngredientList from "./IngredientList";

const Recipe = ({ recipe }) => (
  <>
    <br />
    <span>{` Title: ${recipe.title} `}</span>
    <IngredientList ingredients={recipe.ingredients} />
    <span>{`Instructions: ${recipe.instructions} `}</span>
  </>
);

export default Recipe;
