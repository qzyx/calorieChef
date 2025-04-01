export default function ApiOverdose() {
  return (
    <div className="flex flex-col items-center justify-center h-full p-4">
      <div className="text-red-500 text-xl font-semibold mb-2">
        API Usage Limit Reached
      </div>
      <p className="text-center text-gray-600 max-w-md">
        We&apos;ve reached our daily limit for recipe searches. This app is for
        educational purposes only and uses the free Spoonacular API. Please try
        again later or search for a different recipe.
      </p>
    </div>
  );
}
