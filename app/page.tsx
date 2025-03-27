import Filter from "./_components/Filter";
import Introduction from "./_components/Intoduction";

export default function Home() {
  return (
    <main className="py-4  px-2 sm:px-3 md:px-4 flex justify-center ">
      <Introduction></Introduction>
      <Filter></Filter>
      <div className="flex-1 hidden lg:block"></div>
    </main>
  );
}
