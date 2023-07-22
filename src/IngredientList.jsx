import { React } from "react";

const IngredientList = ({ ingredients }) => (
  <>
    <p>Ingredients</p>
    <ul>
      {ingredients.map((ingredient) => (
        <li key={ingredient}>{ingredient}</li>
      ))}
    </ul>
  </>
);

export default IngredientList;
