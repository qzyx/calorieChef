import { ParamValue } from "next/dist/server/request/params";
const keys = [
  "225797f3718042cca8ed0aa12fd8132a",
  "262a30a5fdce442f980a6735235abd66",
  "0a54033f2b554d0ca951f2ec1e97b639",
  "c212975049344d73894ceebad17965c8",
];
const apiKey: string = keys[1];

export async function getIngredientsAutoComplete(query: string) {
  const data = await fetch(
    `https://api.spoonacular.com/food/ingredients/autocomplete?query=${query}&number=10&apiKey=${apiKey}`
  ).then((res) => res.json());
  return data;
}

export async function complexSearch(passedParams: string) {
  const url = "https://api.spoonacular.com/recipes/complexSearch";

  const params = new URLSearchParams({
    apiKey: apiKey,
    number: "30",
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
