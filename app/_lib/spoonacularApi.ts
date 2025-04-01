import { ParamValue } from "next/dist/server/request/params";
const keys = [
  "225797f3718042cca8ed0aa12fd8132a",
  "262a30a5fdce442f980a6735235abd66",
  "0a54033f2b554d0ca951f2ec1e97b639",
];
const apiKey: string = keys[1];

export async function getIngredientsAutoComplete(query: string) {
  const data = await fetch(
    `https://api.spoonacular.com/food/ingredients/autocomplete?query=${query}&number=10&apiKey=${apiKey}`
  ).then((res) => res.json());
  return data;
}

export async function complexSearch(passedParams: string) {
  // Parse the passed parameters string into an object

  const url = "https://api.spoonacular.com/recipes/complexSearch";
  // Accept parameters as an object with optional properties
  const params = new URLSearchParams({
    apiKey: apiKey, // Always include API key
    number: "30", // Default to 10 results
    // Include the parsed parameters
    // Spread any additional options that were passed
  });

  const data = await fetch(`${url}?${params}&${passedParams}`).then((res) =>
    res.json()
  );
  return data;
}
export async function getRecipeNutrition(recipeId: ParamValue) {
  const data = await fetch(
    `https://api.spoonacular.com/recipes/${recipeId}/nutritionWidget.json?apiKey=${apiKey}`
  ).then((res) => res.json());
  return data;
}
export async function getRecipeInfo(recipeId: ParamValue) {
  const data = await fetch(
    `https://api.spoonacular.com/recipes/${recipeId}/information?includeNutrition=true&apiKey=${apiKey}`
  ).then((res) => res.json());

  return data;
}
