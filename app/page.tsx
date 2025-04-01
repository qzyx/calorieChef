import Filter from "./_components/Filter";
import Introduction from "./_components/Intoduction";

export default function Home() {
  return (
    <main className=" mb-10 grow px-2 sm:px-3 md:px-4 flex justify-center ">
      <span className="flex justify-center w-full">
        <Introduction></Introduction>
        <Filter></Filter>
        <div className="flex-1 hidden lg:block"></div>
      </span>
    </main>
  );
}
