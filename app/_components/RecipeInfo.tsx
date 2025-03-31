"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getRecipeNutrition } from "../_lib/spoonacularApi";
import { LoadingSpinner } from "./LoadingSpinner";

export default function RecipeInfo() {
  const recipeId = useParams().recipeId;
  const [nutrition, setNutrition] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const data = await getRecipeNutrition(recipeId);
      setNutrition(data);
      setLoading(false);
      return data;
    }
    fetchData();
  }, [recipeId]);
  console.log("recipeId:", recipeId);
  console.log("nutrition:", nutrition);

  return (
    <div className="flex-1 flex ml-3 overflow-hidden min-h-full flex-col lg:block shadow-md ring-1 ring-secondary rounded-md p-6  bg-white select-none ">
      {loading && (
        <span>
          <LoadingSpinner size="md"></LoadingSpinner>
        </span>
      )}
    </div>
  );
}
