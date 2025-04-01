import Filter from "@/app/_components/Filter";
import RecipeInfo from "@/app/_components/RecipeInfo";

export default function page() {
  return (
    <main className="  px-2  sm:px-3 overflow-auto  grow md:px-4 flex  my-10  justify-center ">
      <div className="flex bg-secondary grow rounded-md shadow-xl p-2">
        <span className="hidden lg:block">
          <Filter></Filter>
        </span>

        <RecipeInfo></RecipeInfo>
      </div>
    </main>
  );
}
