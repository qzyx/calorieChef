import { Clock, Dot, Users } from "lucide-react";

export default function RecipeInfoSummary({
  recipeInfo,
}: {
  recipeInfo: {
    readyInMinutes: number;
    servings: number;
    instructions: string;
  };
}) {
  return (
    <div className="col-span-1 row-span-1 p-4 bg-primary/60 rounded-lg">
      <h3 className="text-lg font-semibold mb-3">Recipe Summary</h3>
      <div className="flex items-center space-x-2 mb-3">
        <Clock className="h-4 w-4 text-gray-500" />
        <span>{recipeInfo?.readyInMinutes} minutes</span>
        <Dot className="text-gray-500" />
        <Users className="h-4 w-4 text-gray-500" />
        <span>{recipeInfo?.servings} servings</span>
      </div>
      {recipeInfo?.instructions && (
        <div
          className="text-sm text-gray-700 overflow-auto max-h-40"
          dangerouslySetInnerHTML={{ __html: recipeInfo.instructions }}
        />
      )}
    </div>
  );
}
