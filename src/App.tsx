import Header from "./Header";
import { formatUserName } from "./utils";
import Recipe from "./Recipe";

// Sample response from recipe endpoint
// Let's create a type for this
export type TRecipe = {
  recipeId: number;
  title: string;
  ingredients: Array<TIngredient>;
  instructions: string;
};

export type TIngredient = {
  id: number;
  name: string;
  quantity?: string | number;
}

const RECIPE_ONE: TRecipe = {
  recipeId: 1111,
  title: "Chicken and Rice",
  ingredients: [
    {
      id: 1,
      name: "tomato",
      quantity: 1
    },
    {
      id: 2,
      name: "chicken",
      quantity: "200 gram"
    },
    {
      id: 3,
      name: "rice",
      quantity: " 1 cup"
    },
  ],
  instructions: "Here are all of the instructions",
};

const RECIPE_TWO: TRecipe = {
  recipeId: 2222,
  title: "Strawberry Tart",
  ingredients: [
    {
      id: 1,
      name: "strawberries",
      quantity: 20
    },
    {
      id: 2,
      name: "flour",
      quantity: "1 cup"
    },
    {
      id: 3,
      name: "butter",
      quantity: " 1/4 cup"
    },
  ],
  instructions: "Here are all of the instructions",
};

// Sample response from recipes endpoint
// Let's create a type for this
const RECIPES: Array<TRecipe> = [RECIPE_ONE, RECIPE_TWO];

// Sample response from user endpoint
// Let's create a type for this
type User = {
  firstName?: string;
  lastName?: string;
  username: string;
  userId: number;
  recipes: Array<TRecipe>;
};
const SAMPLE_USER: User = {
  firstName: "Rebekah",
  lastName: "CK",
  username: "rebekah",
  userId: 123456,
  recipes: RECIPES,
};

function App() {
  return (
    <div className="App">
      <Header label={"Here is my app"} />
      <p>
        Hello,{" "}
        {formatUserName(
          SAMPLE_USER.firstName,
          SAMPLE_USER.lastName,
          SAMPLE_USER.username
        )}
      </p>
      {RECIPES.map((recipe) => (
        <Recipe key={recipe.recipeId} recipe={recipe} />
      ))}
    </div>
  );
}

export default App;
