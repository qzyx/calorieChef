const apiKey: string = "225797f3718042cca8ed0aa12fd8132a";

export async function getIngredientsAutoComplete(query: string) {
  const data = await fetch(
    `https://api.spoonacular.com/food/ingredients/autocomplete?query=${query}&number=10&apiKey=${apiKey}`
  ).then((res) => res.json());
  return data;
}

export async function complexSearch(options: Record<string, string>) {
  const url = "https://api.spoonacular.com/recipes/complexSearch";
  // Accept parameters as an object with optional properties
  const params = new URLSearchParams({
    apiKey: apiKey, // Always include API key
    number: "10", // Default to 10 results
    ...options, // Spread any additional options that were passed
  });
  const data = await fetch(`${url}?${params}`).then((res) => res.json());
  return data;
}
