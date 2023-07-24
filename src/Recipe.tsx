import IngredientList from "./IngredientList";
import { TRecipe } from "./App";

type RecipeProps = { recipe: TRecipe };

const Recipe = ({ recipe }: RecipeProps) => (
  <>
    <br />
    <span>{` Title: ${recipe.title} `}</span>
    <IngredientList 
      key={recipe.recipeId} 
      ingredients={recipe.ingredients} 
    />
    <span>{`Instructions: ${recipe.instructions} `}</span>
  </>
);

export default Recipe;

