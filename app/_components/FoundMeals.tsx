"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { complexSearch } from "../_lib/spoonacularApi";

export default function FoundMeals() {
  const searchParams = useSearchParams();
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const data = await complexSearch(searchParams.toString());
      console.log("Data from API:", data);
      setRecipes(data.results);
      return data;
    }
    fetchData();
  }, [searchParams]);
  console.log("recipes:", recipes);

  interface Recipe {
    id: number;
    title: string;
    image: string;
    imageType: string;
  }

  return (
    <div className="flex-1 flex ml-3 overflow-hidden flex-col lg:block shadow-md ring-1 ring-secondary rounded-md p-6  bg-white select-none ">
      {recipes ? (
        <div className="flex gap-2 p-2 flex-wrap overflow-y-auto h-[calc(100vh-200px)]">
          {recipes?.map((recipe: Recipe, idx) => (
            <Link
              className="w-[calc(50%-0.5rem)] md:w-[calc(33.333%-0.5rem)] lg:w-[calc(25%-0.5rem)] 
            p-4 bg-primary/20 hover:bg-primary transition-colors duration-300
            rounded-md shadow flex flex-col items-center mb-3"
              href={`/recipe/${recipe.id}`}
              key={recipe.id || idx}
            >
              <div className="">
                {recipe.image && (
                  <img
                    src={recipe.image}
                    alt={recipe.title}
                    className="w-full h-40 object-cover rounded-md mb-2"
                  />
                )}
                <h3 className="text-center font-medium text-sm md:text-base">
                  {recipe.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-[calc(100vh-200px)] p-4">
          <div className="text-red-500 text-xl font-semibold mb-2">
            API Usage Limit Reached
          </div>
          <p className="text-center text-gray-600 max-w-md">
            We&apos;ve reached our daily limit for recipe searches. Please try again
            later or search for a different recipe.
          </p>
        </div>
      )}
    </div>
  );
}
