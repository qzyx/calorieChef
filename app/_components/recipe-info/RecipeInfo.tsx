"use client";

import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import { Clock, Dot, Users } from "lucide-react";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { getRecipeInfo } from "../../_lib/spoonacularApi";
import ApiOverdose from "../ApiOverdose";
import BackButton from "../UI/BackButton";
import { PageLoadingSpinner } from "../UI/PageLoadingSpinner";
import RecipeInfoImage from "./RecipeInfoImage";
import RecipeInfoNutrients from "./RecipeInfoNutrients";

ChartJS.register(ArcElement, Tooltip, Legend);

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
            <div className="col-span-1 row-span-1 p-4 bg-primary/60 rounded-lg">
              <h3 className="text-lg font-semibold mb-3">Recipe Summary</h3>
              <div className="flex items-center space-x-2 mb-3">
                <Clock className="h-4 w-4 text-gray-500" />
                <span>{recipeInfo?.readyInMinutes} minutes</span>
                <Dot className="text-gray-500" />
                <Users className="h-4 w-4 text-gray-500" />
                <span>{recipeInfo?.servings} servings</span>
              </div>
              {recipeInfo?.instructions && (
                <div
                  className="text-sm text-gray-700 overflow-auto max-h-40"
                  dangerouslySetInnerHTML={{ __html: recipeInfo.instructions }}
                />
              )}
            </div>
            <div className="col-span-1 row-span-1 p-4 bg-primary/60 rounded-lg flex flex-col">
              <h3 className="text-lg font-semibold mb-3">
                Nutrition Breakdown
              </h3>
              <div className="flex-1 flex items-center justify-center">
                {recipeInfo && (
                  <div className="h-56 w-56">
                    <Doughnut
                      data={nutritionData}
                      options={{
                        maintainAspectRatio: false,
                        plugins: {
                          legend: {
                            position: "bottom",
                            labels: {
                              boxWidth: 12,
                              padding: 10,
                            },
                          },
                          tooltip: {
                            callbacks: {
                              label: function (context) {
                                const value = context.raw;
                                const unit =
                                  context.label === "Calories" ? "kcal" : "g";
                                return `${context.label}: ${value} ${unit}`;
                              },
                            },
                          },
                        },
                      }}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>

          <BackButton top={10} left={10} p={10}></BackButton>
        </>
      ) : (
        <ApiOverdose></ApiOverdose>
      )}
    </div>
  );
}
