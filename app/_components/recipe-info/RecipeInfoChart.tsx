import { Doughnut } from "react-chartjs-2";
import {
  ArcElement,
  Chart as ChartJS,
  Legend,
  Tooltip,
  ChartData,
} from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);
export default function RecipeInfoChart({
  nutritionData,
}: {
  nutritionData: ChartData<"doughnut", number[], unknown>;
}) {
  return (
    <div className="col-span-1 row-span-1 p-4 bg-primary/60 rounded-lg flex flex-col">
      <h3 className="text-lg font-semibold mb-3">Nutrition Breakdown</h3>
      <div className="flex-1 flex items-center justify-center">
        <div className="h-56 w-56">
          <Doughnut
            data={nutritionData}
            options={{
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  position: "bottom",
                  labels: {
                    boxWidth: 12,
                    padding: 10,
                  },
                },
                tooltip: {
                  callbacks: {
                    label: function (context) {
                      const value = context.raw;
                      const unit = context.label === "Calories" ? "kcal" : "g";
                      return `${context.label}: ${value} ${unit}`;
                    },
                  },
                },
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}
