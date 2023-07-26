import { TIngredient } from "./App";
import Ingredient from "./Ingredient";

type TIngredientListProp = { ingredients: Array<TIngredient> }

const IngredientList = ({ ingredients }: TIngredientListProp) => (
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
