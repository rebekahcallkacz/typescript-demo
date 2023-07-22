# Using TypeScript

## Additional Practice (Optional)

- Accept my invite to this repository
- Clone down the repository
- Checkout out to a new branch
- On your branch, practice writing TypeScript
  - Convert `Recipe` and `IngredientList` to TypeScript
  - Change `recipe.ingredients` to an array of objects (hints: you'll need to create a new type `TIngredient`, `quantity` will need to allow for two types for the value (`number` or `string`), and `IngredientList` will need to be modified):

```
    const RECIPE_ONE_INGREDIENTS = [
        { ingredient: "tomato", quantity: 1 },
        { ingredient: "chicken", quantity: "1 pound" },
        { ingredient: "rice", quantity: "1 cup" };
    ]
    const RECIPE_TWO_INGREDIENTS = [
        { ingredient: "strawberries", quantity: "1 quart" },
        { ingredient: "flour", quantity: "1 cup" },
        { ingredient: "butter", quantity: "1/2 cup" };
    ]
```

- Open a PR to merge in your changes and request my review

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.
