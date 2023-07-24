import { TIngredient } from "./App";
import Ingredient from "./Ingredient";

type IngredientListProp = { ingredients: Array<TIngredient> }

const IngredientList = ({ ingredients }: IngredientListProp) => (
  <>
    <p>Ingredients</p>
    <ul>
      {ingredients.map((ingredient) => (
        <Ingredient key={ingredient.id} ingredient={ingredient}/>
      ))}
    </ul>
  </>
);

export default IngredientList;
