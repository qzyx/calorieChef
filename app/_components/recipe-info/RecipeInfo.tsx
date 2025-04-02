"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getRecipeInfo } from "../../_lib/spoonacularApi";
import ApiOverdose from "../ApiOverdose";
import BackButton from "../UI/BackButton";
import { PageLoadingSpinner } from "../UI/PageLoadingSpinner";
import RecipeInfoChart from "./RecipeInfoChart";
import RecipeInfoImage from "./RecipeInfoImage";
import RecipeInfoNutrients from "./RecipeInfoNutrients";
import RecipeInfoSummary from "./RecipeInfoSummary";

export default function RecipeInfo() {
  const { recipeId } = useParams();

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
  if (loading) {
    return (
      <div className="grow flex  overflow-auto flex-col lg:block shadow-md  rounded-md   bg-primary/60 select-none relative ">
        <PageLoadingSpinner size="md" />
      </div>
    );
  } else
    return (
      <div className="grow flex  overflow-auto flex-col lg:block shadow-md  rounded-md   bg-primary/60 select-none relative ">
        <BackButton top={3} left={3}></BackButton>
        {recipeInfo?.status !== "failure" ? (
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
          </>
        ) : (
          <ApiOverdose></ApiOverdose>
        )}
      </div>
    );
}
