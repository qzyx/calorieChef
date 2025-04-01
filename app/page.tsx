import FastSearch from "./_components/FastSearch";
import Filter from "./_components/Filter";
import Introduction from "./_components/Intoduction";

export default function Home() {
  return (
    <main className="  overflow-auto  grow  flex  md:mb-10 m-2 md:mx-4  justify-center ">
      <span className=" hidden md:flex  justify-center w-full p-2">
        <span className="">
          <Filter></Filter>
        </span>
        <div className="grow flex flex-col  gap-2">
          <span className="flex-1">
            <Introduction></Introduction>
          </span>
          <span className="flex-1">
            <FastSearch></FastSearch>
          </span>
        </div>
      </span>
      <span className="flex md:hidden flex-col gap-5">
        <Filter></Filter>
        <div className="grow flex flex-col  gap-5">
          <span className="flex-1">
            <FastSearch></FastSearch>
          </span>
          <span className="flex-1">
            <Introduction></Introduction>
          </span>
        </div>
      </span>
    </main>
  );
}
