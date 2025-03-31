import Filter from "@/app/_components/Filter";
import RecipeInfo from "@/app/_components/RecipeInfo";

export default function page() {
  return (
    <main className="py-4  px-2 sm:px-3   md:px-4 flex justify-center ">
      <Filter></Filter>

      <RecipeInfo></RecipeInfo>
    </main>
  );
}
