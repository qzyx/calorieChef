"use client";

import { useParams, useSearchParams } from "next/navigation";

export default function RecipeInfo() {
  const recipeId = useParams().recipeId;
  console.log(recipeId);
  return (
    <div className="flex-1 flex ml-3 overflow-hidden min-h-full flex-col lg:block shadow-md ring-1 ring-secondary rounded-md p-6  bg-white select-none "></div>
  );
}
