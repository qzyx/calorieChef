import Image from "next/image";

export default function RecipeInfoImage({
  recipeInfo,
}: {
  recipeInfo: { image: string; title: string };
}) {
  return (
    <div className="col-span-1 row-span-1 h-full bg-primary/60 rounded-lg overflow-hidden w-full relative">
      {recipeInfo?.image && (
        <Image fill src={recipeInfo.image} alt={recipeInfo.title} />
      )}
    </div>
  );
}
