import Filter from "@/app/_components/Filter";
import FoundMeals from "@/app/_components/FoundMeals";
import RecipeInfo from "@/app/_components/RecipeInfo";
import { Suspense } from "react";

export default function page() {
  return (
    <main className="py-4  px-2 sm:px-3   md:px-4 flex justify-center ">
      <Filter></Filter>

      <Suspense fallback={<div>Loading...</div>}>
        <RecipeInfo></RecipeInfo>
      </Suspense>
    </main>
  );
}
