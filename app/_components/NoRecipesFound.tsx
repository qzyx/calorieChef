export default function NoRecipesFound() {
    return (
      <div className="flex flex-col items-center justify-center h-[calc(100vh-200px)] p-4">
        <div className="text-red-500 text-xl font-semibold mb-2">
          No Recipes Found
        </div>
        <p className="text-center text-gray-600 max-w-md">
        We couldn't find any recipes matching your criteria. Try adjusting your search terms or filters to see more results.
        </p>
      </div>
    );
  }
  