import  React  from "react";

type IngredientListProps = { 
  ingredients: Array<string>};
const IngredientList = ({ ingredients }:IngredientListProps) => (
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
