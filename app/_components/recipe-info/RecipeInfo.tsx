"use client";

import { ArrowLeft } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getRecipeInfo } from "../../_lib/spoonacularApi";
import ApiOverdose from "../ApiOverdose";
import RecipeInfoImage from "./RecipeInfoImage";
import RecipeInfoNutrients from "./RecipeInfoNutrients";
import RecipeInfoSummary from "./RecipeInfoSummary";
import { PageLoadingSpinner } from "../UI/PageLoadingSpinner";
import RecipeInfoChart from "./RecipeInfoChart";

export default function RecipeInfo() {
  const { recipeId } = useParams();
  const router = useRouter();
  type Nutrient = {
    name: string;
    amount: number;
    unit: string;
  };

  type RecipeInfoType = {
    title: string;
    image: string;
    readyInMinutes: number;
    servings: number;
    summary: string;
    status: string;
    instructions: string;
    nutrition: {
      nutrients: Nutrient[];
    };
  };

  const [recipeInfo, setRecipeInfo] = useState<RecipeInfoType | null>(null);
  const [loading, setLoading] = useState(true);

  const calories = recipeInfo?.nutrition?.nutrients?.find(
    (nutr) => nutr.name === "Calories"
  );
  const fat = recipeInfo?.nutrition?.nutrients?.find(
    (nutr) => nutr.name === "Fat"
  );
  const protein = recipeInfo?.nutrition?.nutrients?.find(
    (nutr) => nutr.name === "Protein"
  );
  const carbohydrates = recipeInfo?.nutrition?.nutrients?.find(
    (nutr) => nutr.name === "Carbohydrates"
  );

  const nutritionData = {
    labels: ["Protein", "Carbs", "Fat"],
    datasets: [
      {
        label: "Nutrition",
        data: [
          protein?.amount || 0,
          carbohydrates?.amount || 0,
          fat?.amount || 0,
        ],
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(153, 102, 255, 0.6)",
          "rgba(75, 192, 192, 0.6)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(75, 192, 192, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const data = await getRecipeInfo(recipeId);
        setRecipeInfo(data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setRecipeInfo(null);
      }
      setLoading(false);
    }
    fetchData();
  }, [recipeId]);
  if (!recipeInfo) {
    return;
  }

  // Create default nutrient objects to ensure we always pass valid data
  const defaultNutrient = { name: "", amount: 0, unit: "g" };
  const caloriesData = calories || {
    ...defaultNutrient,
    name: "Calories",
    unit: "kcal",
  };
  const fatData = fat || { ...defaultNutrient, name: "Fat" };
  const proteinData = protein || { ...defaultNutrient, name: "Protein" };
  const carbohydratesData = carbohydrates || {
    ...defaultNutrient,
    name: "Carbohydrates",
  };

  return (
    <div className="grow flex  overflow-hidden flex-col lg:block shadow-md  rounded-md   bg-primary/60 select-none relative ">
      {loading ? (
        <div className="flex justify-center items-center h-full w-full">
          <PageLoadingSpinner size="md" />
        </div>
      ) : recipeInfo?.status !== "failure" ? (
        <>
          <div className="grid  grid-cols-1 h-full w-full grid-rows-4 md:grid-cols-2 md:grid-rows-2 gap-2">
            <RecipeInfoImage recipeInfo={recipeInfo} />
            <RecipeInfoNutrients
              protein={proteinData}
              fat={fatData}
              calories={caloriesData}
              carbohydrates={carbohydratesData}
            />
            <RecipeInfoSummary recipeInfo={recipeInfo}></RecipeInfoSummary>
            <RecipeInfoChart nutritionData={nutritionData} />
          </div>

          <button
            onClick={() => router.back()}
            className="absolute top-5 z-10 left-5 p-2 text-background cursor-pointer hover:scale-110 transition-all duration-150 rounded-full bg-primary"
          >
            <ArrowLeft></ArrowLeft>
          </button>
        </>
      ) : (
        <ApiOverdose></ApiOverdose>
      )}
    </div>
  );
}
