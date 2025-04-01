import Filter from "@/app/_components/Filter";
import RecipeInfo from "@/app/_components/RecipeInfo";

export default function page() {
  return (
    <main className="py-4  px-2 sm:px-3  overflow-scroll  md:px-4 flex justify-center ">
      <span className="hidden lg:block">

      <Filter></Filter>
      </span>
      
      <RecipeInfo></RecipeInfo>
    </main>
  );
}
