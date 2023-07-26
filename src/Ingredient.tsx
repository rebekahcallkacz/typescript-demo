import { TIngredient } from "./App";

type TIngredientProp = { ingredient: TIngredient }

const Ingredient = ({ ingredient }: TIngredientProp) => (
    <>
        <li>{ingredient.name} -  {ingredient.quantity}</li>
    </>
);

export default Ingredient;