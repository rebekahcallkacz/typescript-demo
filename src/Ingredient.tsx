import { TIngredient } from "./App";

type IngredientProp = { ingredient: TIngredient }

const Ingredient = ({ ingredient }: IngredientProp) => (
    <>
        <li>{ingredient.name} -  {ingredient.quantity}</li>
    </>
);

export default Ingredient;