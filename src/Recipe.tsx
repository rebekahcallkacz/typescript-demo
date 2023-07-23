import  React  from "react";

import IngredientList from "./IngredientList";
import {TRecipe} from "./App"


type RecipeProps = { recipe: TRecipe};

const Recipe = ({ recipe }: RecipeProps) => (
  <>
    <br />
        <p>Ingredients</p>
    <span>{` Title: ${recipe.title} `}</span>
    <ul> 
      {recipe.ingredients.map((ingr) => (
            <IngredientList 
            key = {ingr.ingredient}
            ingredient ={ingr} />
      ))}</ul>
    
    <span>{`Instructions: ${recipe.instructions} `}</span>
  </>
);

export default Recipe;
