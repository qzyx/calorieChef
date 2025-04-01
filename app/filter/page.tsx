import { Suspense } from "react";
import Filter from "../_components/Filter";
import FoundMeals from "../_components/FoundMeals";

export default function page() {
  return (
    <main className="  overflow-auto  grow  flex  md:mb-10 m-2 md:mx-4  justify-center ">
      <div className="flex bg-secondary grow rounded-md shadow-xl p-2">
        <span className="hidden lg:block">
          <Filter></Filter>
        </span>

        <Suspense fallback={<div>Loading...</div>}>
          <FoundMeals></FoundMeals>
        </Suspense>
      </div>
    </main>
  );
}
