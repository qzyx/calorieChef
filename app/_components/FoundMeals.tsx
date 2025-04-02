"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { complexSearch } from "../_lib/spoonacularApi";
import ApiOverdose from "./ApiOverdose";
import NoRecipesFound from "./NoRecipesFound";
import { PageLoadingSpinner } from "./UI/PageLoadingSpinner";
import Image from "next/image";
import BackButton from "./UI/BackButton";

export default function FoundMeals() {
  const router = useRouter();
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
  if (loading) {
    return (
      <div className="grow flex  overflow-hidden flex-col relative lg:block shadow-md  rounded-md   bg-primary/60 select-none ">
        <PageLoadingSpinner color="background" size="md"></PageLoadingSpinner>
      </div>
    );
  } else
    return (
      <div className="grow flex  overflow-hidden flex-col relative lg:block shadow-md  rounded-md   bg-primary/60 select-none ">
        <BackButton top={3} left={3}></BackButton>
        {recipes?.length > 0 ? (
          <>
            <div className="flex gap-2  flex-wrap overflow-y-auto h-full">
              {recipes?.map((recipe: Recipe, idx) => (
                <button
                  className="w-[calc(50%-0.5rem)] md:w-[calc(33.333%-0.5rem)] lg:w-[calc(25%-0.5rem)] 
            p-4 bg-primary/20 hover:bg-secondary transition-colors duration-300
            rounded-md shadow flex flex-col items-center mb-3 cursor-pointer "
                  onClick={() => router.push(`recipe/${recipe.id}`)}
                  key={recipe.id || idx}
                >
                  <div className="flex flex-col w-full gap-2 items-center justify-center h-full">
                    {recipe.image && (
                      <span className="relative w-full h-40">
                        <Image
                          fill
                          className="w-full h-40 object-cover rounded-md mb-2"
                          src={recipe.image}
                          alt={recipe.title}
                        />
                      </span>
                    )}
                    <h3 className="text-center font-medium text-sm md:text-base">
                      {recipe.title}
                    </h3>
                  </div>
                </button>
              ))}
            </div>
          </>
        ) : !loading && recipes ? (
          <NoRecipesFound></NoRecipesFound>
        ) : (
          <ApiOverdose></ApiOverdose>
        )}
      </div>
    );
}
