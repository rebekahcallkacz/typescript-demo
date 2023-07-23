import  React  from "react";

import IngredientList from "./IngredientList";

type RecipeProps = { recipe: {
  recipeId: number;
  title: string;
  ingredients: Array<string>;
  instructions: string}};

const Recipe = ({ recipe }: RecipeProps) => (
  <>
    <br />
    <span>{` Title: ${recipe.title} `}</span>
    <IngredientList ingredients={recipe.ingredients} />
    <span>{`Instructions: ${recipe.instructions} `}</span>
  </>
);

export default Recipe;
