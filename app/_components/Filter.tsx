"use client";

import { ListFilter, Plus, X } from "lucide-react";
import { useRouter } from "next/navigation";

import { useEffect, useState } from "react";
import { getIngredientsAutoComplete } from "../_lib/spoonacularApi";
import InputBox from "./UI/InputBox";
export default function Filter() {
  const router = useRouter();
  const [suggestions, setSuggestions] = useState<Ingredient[]>([]);
  const [ingeredient, setIngeredient] = useState("");
  const [mealName, setMealName] = useState("");
  const [minCalories, setMinCalories] = useState(0);
  const [maxCalories, setMaxCalories] = useState(0);
  const [minProtein, setMinProtein] = useState(0);
  const [maxProtein, setMaxProtein] = useState(0);
  const [minCarbs, setMinCarbs] = useState(0);
  const [maxCarbs, setMaxCarbs] = useState(0);
  const [minFats, setMinFats] = useState(0);
  const [maxFats, setMaxFats] = useState(0);
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [filterError, setFilterError] = useState("");

  interface Ingredient {
    name: string;
    image: string;
    // Add other properties as needed
  }

  async function applyFilter() {
    const params = new URLSearchParams();
    if (mealName) params.append("query", mealName);
    if (minCalories !== 0) params.append("minCalories", minCalories.toString());
    if (maxCalories !== 0) params.append("maxCalories", maxCalories.toString());
    if (minProtein !== 0) params.append("minProtein", minProtein.toString());
    if (maxProtein !== 0) params.append("maxProtein", maxProtein.toString());
    if (minCarbs !== 0) params.append("minCarbs", minCarbs.toString());
    if (maxCarbs !== 0) params.append("maxCarbs", maxCarbs.toString());
    if (minFats !== 0) params.append("minFats", minFats.toString());
    if (maxFats !== 0) params.append("maxFats", maxFats.toString());
    if (ingredients.length > 0)
      params.append("ingredients", ingredients.join(","));
    if (params.toString() !== "") {
      router.push(`/filter?${params.toString()}`);
    }
    if (params.toString() === "") {
      setFilterError("Please add at least one filter");
    }
  }
  const handleSetIngredients = (
    ingeredient: string,
    e?: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>
  ) => {
    if (e) e.preventDefault();
    if (ingeredient === "") return;
    setIngredients([...ingredients, ingeredient]);
    setIngeredient("");
  };

  const handleMinCalories = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMinCalories(Number(e.target.value));
    console.log("changes min calories");
  };
  const handleMaxCalories = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMaxCalories(Number(e.target.value));
  };
  const handleMinProtein = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMinProtein(Number(e.target.value));
  };
  const handleMaxProtein = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMaxProtein(Number(e.target.value));
  };
  const hanleMinCarbs = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMinCarbs(Number(e.target.value));
  };
  const handleMaxCarbs = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMaxCarbs(Number(e.target.value));
  };
  const hanleMinFats = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMinFats(Number(e.target.value));
  };
  const hanleMaxFats = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMaxFats(Number(e.target.value));
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    if (searchParams.has("query")) setMealName(searchParams.get("query") || "");
    if (searchParams.has("minCalories"))
      setMinCalories(Number(searchParams.get("minCalories")));
    if (searchParams.has("maxCalories"))
      setMaxCalories(Number(searchParams.get("maxCalories")));
    if (searchParams.has("minProtein"))
      setMinProtein(Number(searchParams.get("minProtein")));
    if (searchParams.has("maxProtein"))
      setMaxProtein(Number(searchParams.get("maxProtein")));
    if (searchParams.has("minCarbs"))
      setMinCarbs(Number(searchParams.get("minCarbs")));
    if (searchParams.has("maxCarbs"))
      setMaxCarbs(Number(searchParams.get("maxCarbs")));
    if (searchParams.has("minFats"))
      setMinFats(Number(searchParams.get("minFats")));
    if (searchParams.has("maxFats"))
      setMaxFats(Number(searchParams.get("maxFats")));
    if (searchParams.has("ingredients")) {
      const ingredientsParam = searchParams.get("ingredients");
      if (ingredientsParam) {
        setIngredients(ingredientsParam.split(","));
      }
    }
  }, []);

  useEffect(() => {
    if (ingeredient.length === 0) {
      setSuggestions([]);
      return;
    } else {
      async function fetchData() {
        const data = await getIngredientsAutoComplete(ingeredient);
        return data;
      }

      fetchData()
        .then((data) => {
          if (data) {
            setSuggestions(data);
          }
        })
        .catch((error) => {
          console.error("Error fetching ingredient suggestions:", error);
        });
    }
  }, [ingeredient]);

  return (
    <div className=" h-full flex select-none flex-col rounded-md  shadow-lg bg-primary text-sm md:text-base p-1 md:p-3 pb-3 lg:flex-1 ">
      <span className="font-joti select-none text-3xl text-center mb-5 text-background ">
        Filter
      </span>

      <div className="flex flex-col gap-3">
        <div className="flex gap-1 flex-col">
          <label className="font-joti text-tertiary">
            Meal Name (Optional)
          </label>
          <input
            value={mealName}
            onChange={(e) => setMealName(e.target.value)}
            placeholder="...Fried Chicked"
            className="bg-background py-3 text-lg px-4 w-full focus:outline-none text-secondary rounded-md  "
          ></input>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex justify-between">
            <label className="text-tertiary font-joti">Macros</label>
            <div className="flex gap-15 mx-10 font-joti text-background ">
              <label className="px-4">MIN</label>
              <label className="px-4">MAX</label>
            </div>
          </div>
          <InputBox
            textColor={"text-orange-500"}
            valueMin={minCalories}
            valueMax={maxCalories}
            onMinChange={handleMinCalories}
            onMaxChange={handleMaxCalories}
          >
            Calories
          </InputBox>
          <InputBox
            textColor={"text-blue-500"}
            valueMin={minProtein}
            valueMax={maxProtein}
            onMinChange={handleMinProtein}
            onMaxChange={handleMaxProtein}
          >
            Protein
          </InputBox>
          <InputBox
            textColor={"text-purple-500"}
            valueMin={minCarbs}
            valueMax={maxCarbs}
            onMinChange={hanleMinCarbs}
            onMaxChange={handleMaxCarbs}
          >
            Carbohydrates
          </InputBox>
          <InputBox
            textColor={"text-green-500"}
            valueMin={minFats}
            valueMax={maxFats}
            onMinChange={hanleMinFats}
            onMaxChange={hanleMaxFats}
          >
            Fats
          </InputBox>
        </div>
        <div className="flex gap-1 flex-col">
          <label className="font-joti text-tertiary">
            Ingredients (Optional)
          </label>
          <form
            className="flex flex-col relative"
            onSubmit={(e) => handleSetIngredients(ingeredient, e)}
          >
            <div className="flex">
              <input
                value={ingeredient}
                onChange={(e) => setIngeredient(e.target.value)}
                placeholder="...cheese"
                className="bg-background relative py-2 text-lg px-4 w-full focus:outline-none text-secondary rounded-l-md  "
              ></input>
              <button
                type="submit"
                className="bg-secondary rounded-r-md w-[80%] hover:w-[100%] transition-all duration-300 focus:outline-none text-background font-joti cursor-pointer"
              >
                Add ingeredient
              </button>
            </div>

            {suggestions.length > 1 && (
              <div className="absolute top-12 max-h-60 overflow-scroll flex flex-col py-1 gap-1 min-w-[40%] shadow-md bg-secondary select-none border-secondary border-2 rounded-md">
                {suggestions.map((suggestion, idx) => (
                  <div
                    className="bg-primary mx-1 gap-2 justify-between items-center px-2 font-inknut text-background rounded-sm min-h-10 flex"
                    key={idx}
                  >
                    <span>{suggestion.name}</span>
                    <button
                      className="p-1 border-secondary border cursor-pointer rounded-full bg-secondary hover:bg-primary hover:text-background transition-all duration-300"
                      onClick={(e) => handleSetIngredients(suggestion.name, e)}
                    >
                      <Plus></Plus>
                    </button>
                  </div>
                ))}
              </div>
            )}
          </form>
        </div>
        <div className="mt-3 flex flex-wrap gap-1 rounded-md overflow-y-auto max-h-40">
          {ingredients.length === 0 && (
            <span className="text-background text-xl font-joti">
              No ingredients added
            </span>
          )}
          {ingredients.map((item, idx) => (
            <button
              key={idx}
              onClick={() =>
                setIngredients(ingredients.filter((ing) => ing !== item))
              }
              className=" cursor-pointer"
            >
              <div className="font-serif flex items-center select-none bg-secondary px-4 py-2 rounded-md text-background">
                <span>{item}</span>
                <X className="ml-2" color="red"></X>
              </div>
            </button>
          ))}
        </div>
      </div>
      <span className="flex flex-col items-center mt-5 gap-2 ">
        {filterError && (
          <span className="text-red-500 font-joti text-center">
            {filterError}
          </span>
        )}
        <button
          onClick={applyFilter}
          className="cursor-pointer w-30 gap-2 flex items-center justify-center h-10 font-joti text-background bg-secondary rounded-md"
        >
          <span>
            <ListFilter></ListFilter>
          </span>
          <span>FILTER</span>
        </button>
      </span>
    </div>
  );
}
