const apiKey: string = "225797f3718042cca8ed0aa12fd8132a";

export async function getIngredientsAutoComplete(query: string) {
  const data = await fetch(
    `https://api.spoonacular.com/food/ingredients/autocomplete?query=${query}&number=10&apiKey=${apiKey}`
  ).then((res) => res.json());
  return data;
}
