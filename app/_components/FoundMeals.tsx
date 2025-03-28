"use client";

import { useSearchParams } from "next/navigation";

export default function FoundMeals() {
  const searchParams = useSearchParams();

  const mealName = searchParams.get("mealName");
  const minCalories = searchParams.get("minCalories");
  const maxCalories = searchParams.get("maxCalories");
  const minProtein = searchParams.get("minProtein");
  const maxProtein = searchParams.get("maxProtein");
  const minCarbs = searchParams.get("minCarbs");
  const maxCarbs = searchParams.get("maxCarbs");
  const minFats = searchParams.get("minFats");
  const maxFats = searchParams.get("maxFats");
  const ingredients = searchParams.get("ingredients");

  console.log("Meal Name:", mealName);
  console.log("Min Calories:", minCalories);
  console.log("Max Calories:", maxCalories);
  console.log("Min Protein:", minProtein);
  console.log("Max Protein:", maxProtein);
  console.log("Min Carbs:", minCarbs);
  console.log("Max Carbs:", maxCarbs);
  console.log("Min Fats:", minFats);
  console.log("Max Fats:", maxFats);
  console.log("Ingredients:", ingredients);
  return (
    <div className="flex-1 flex overflow-hidden flex-col lg:block shadow-md ring-1 ring-secondary rounded-md p-6 ml-4 bg-white ">
      <h2 className="text-2xl font-semibold mb-4 text-primary">
        Filtered Meals
      </h2>
      <div className=" flex gap-2 p-2 overflow-y-scroll"></div>
    </div>
  );
}
