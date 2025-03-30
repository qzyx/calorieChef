import { Suspense } from "react";
import Filter from "../_components/Filter";
import FoundMeals from "../_components/FoundMeals";

export default function page() {
  return (
    <main className="py-4  px-2 sm:px-3 md:px-4 flex  items-center  justify-center ">
      <div className="self-center">
        <Filter></Filter>
      </div>

      <Suspense fallback={<div>Loading...</div>}>
        <FoundMeals></FoundMeals>
      </Suspense>
    </main>
  );
}
