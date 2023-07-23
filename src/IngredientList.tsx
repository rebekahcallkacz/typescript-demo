import  React  from "react";
import {TIngredient} from "./App"

type IngredientListProps = { 
  ingredient: TIngredient};
const IngredientList = ({ ingredient }:IngredientListProps) => (
  <>

    <li>
      <span>{ingredient.ingredient} {ingredient.quantity}</span>
    </li>
    
  </>
);

export default IngredientList;
