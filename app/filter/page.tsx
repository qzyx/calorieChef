import Filter from "../_components/Filter";

export default function page() {
  return (
    <main className="py-4  px-2 sm:px-3 md:px-4 flex justify-center ">
      <Filter></Filter>
      <div className="flex-1 flex overflow-hidden flex-col lg:block shadow-md ring-1 ring-secondary rounded-md p-6 ml-4 bg-white ">
        <h2 className="text-2xl font-semibold mb-4 text-primary">
          Filtered Meals
        </h2>
        <div className=" flex gap-2 bg-red-500 p-2 overflow-y-scroll">
            
        </div>
      </div>
    </main>
  );
}
