export default function RecipeInfoImage({
  recipeInfo,
}: {
  recipeInfo: { image: string; title: string };
}) {
  return (
    <div className="col-span-1 row-span-1 bg-primary/60 rounded-lg overflow-hidden h-64 md:h-70">
      {recipeInfo?.image && (
        <img
          src={recipeInfo.image}
          alt={recipeInfo.title}
          className="h-full w-full object-cover"
        />
      )}
    </div>
  );
}
