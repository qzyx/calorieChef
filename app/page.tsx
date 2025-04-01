import Filter from "./_components/Filter";
import Introduction from "./_components/Intoduction";

export default function Home() {
  return (
    <main className="  overflow-auto  grow  flex  md:mb-10 m-2 md:mx-4  justify-center ">
      <span className=" hidden md:flex  justify-center w-full p-2">
        <span className="">
          <Filter></Filter>
        </span>
        <div className="grow ">
          <Introduction></Introduction>
        </div>
      </span>
      <span className="flex md:hidden flex-col gap-5">
        <Filter></Filter>
        <div className="grow flex-1">
          <Introduction></Introduction>
        </div>
      </span>
    </main>
  );
}
