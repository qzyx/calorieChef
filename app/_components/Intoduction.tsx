export default function Introduction() {
  return (
    <div className="flex-1 select-none hidden lg:flex flex-col justify-center items-center text-primary  rounded-lg  ">
      <h1 className="text-3xl text-center font-inknut mb-4">
        Recipe & Meal Finder
      </h1>
      <p className="text-lg text-center font-medium max-w-xl mb-4">
        Tired of wondering what to cook? Our Recipe & Meal Finder makes it easy
        to discover delicious meals that match your ingredients, dietary
        preferences, and nutrition goals—all powered by the Spoonacular API.
      </p>
      <p className="text-md text-center max-w-xl mb-6">
        Search by ingredients you already have, filter by dietary restrictions,
        or browse through thousands of recipes categorized by cuisine, meal
        type, and preparation time. From quick weeknight dinners to impressive
        weekend feasts, find exactly what you're craving in just a few clicks.
      </p>
      <div className="flex gap-4 mt-2">
        <span className="px-3 py-1 bg-primary/10 rounded-full text-sm">
          Personalized Results
        </span>
        <span className="px-3 py-1 bg-primary/10 rounded-full text-sm">
          Nutrition Analysis
        </span>
        <span className="px-3 py-1 bg-primary/10 rounded-full text-sm">
          Save Favorites
        </span>
      </div>
    </div>
  );
}
