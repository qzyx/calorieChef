import Filter from "@/app/_components/Filter";
import RecipeInfo from "@/app/_components/recipe-info/RecipeInfo";
import { Suspense } from "react";

export default function page() {
  return (
    <main className="  overflow-auto  grow  flex  mb-10 m-2 md:mx-4  justify-center ">
      <div className="flex bg-secondary grow rounded-md shadow-xl p-2">
        <span className="hidden lg:block">
          <Filter></Filter>
        </span>

        <Suspense fallback={<div>Loading...</div>}>
          <RecipeInfo></RecipeInfo>
        </Suspense>
      </div>
    </main>
  );
}
