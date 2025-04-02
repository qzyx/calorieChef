interface NutrientInfo {
  amount: number;
  unit: string;
}

interface RecipeInfoNutrientsProps {
  calories: NutrientInfo;
  fat: NutrientInfo;
  protein: NutrientInfo;
  carbohydrates: NutrientInfo;
}

export default function RecipeInfoNutrients({
  calories,
  fat,
  protein,
  carbohydrates,
}: RecipeInfoNutrientsProps) {
  return (
    <div className="col-span-1 row-span-1 p-4 bg-primary/60 rounded-lg">
      <h3 className="text-lg font-semibold mb-3">Nutrition Facts</h3>
      <div className="flex flex-col space-y-2">
        {calories && (
          <div className="flex justify-between">
            <span>Calories</span>
            <span className="font-medium">
              {calories.amount} {calories.unit}
            </span>
          </div>
        )}
        {fat && (
          <div className="flex justify-between">
            <span>Fat</span>
            <span className="font-medium">
              {fat.amount} {fat.unit}
            </span>
          </div>
        )}
        {protein && (
          <div className="flex justify-between">
            <span>Protein</span>
            <span className="font-medium">
              {protein.amount} {protein.unit}
            </span>
          </div>
        )}
        {carbohydrates && (
          <div className="flex justify-between">
            <span>Carbohydrates</span>
            <span className="font-medium">
              {carbohydrates.amount} {carbohydrates.unit}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
