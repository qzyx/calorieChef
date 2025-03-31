"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { complexSearch } from "../_lib/spoonacularApi";
import { LoadingSpinner } from "./LoadingSpinner";
import ApiOverdose from "./ApiOverdose";

export default function FoundMeals() {
  const searchParams = useSearchParams();
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  interface Recipe {
    id: number;
    title: string;
    image: string;
    imageType: string;
  }

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const data = await complexSearch(searchParams.toString());
        setRecipes(data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
        setRecipes([]);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [searchParams]);

  return (
    <div className="flex-1 flex ml-3 overflow-hidden flex-col lg:block shadow-md  rounded-md p-6  bg-white select-none ">
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
      ) : !loading ? (
        <ApiOverdose></ApiOverdose>
      ) : (
        <LoadingSpinner size="md"></LoadingSpinner>
      )}
    </div>
  );
}
