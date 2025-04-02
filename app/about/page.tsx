"use client";

import { Doughnut } from "react-chartjs-2";

import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);
export default function page() {
  const exampleData = {
    labels: ["Protein", "Carbs", "Fat"],
    datasets: [
      {
        label: "Nutrition",
        data: [20, 40, 10],
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(153, 102, 255, 0.6)",
          "rgba(75, 192, 192, 0.6)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(75, 192, 192, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Hero section */}
      <section className="mb-12 text-center">
        <h1 className="text-3xl text-primary md:text-5xl font-bold mb-4">
          About CalorieChef
        </h1>
        <p className="text-lg md:text-xl text-primary  max-w-3xl mx-auto">
          Your personal assistant for healthy meal planning and calorie
          tracking.
        </p>
      </section>

      {/* About the app */}
      <section className="mb-16">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2">
            <h2 className="text-2xl text-primary md:text-3xl font-semibold mb-4">
              Our Mission
            </h2>
            <p className="mb-4 text-secondary">
              At CalorieChef, we believe that healthy eating shouldn&apos;t be
              complicated. Our mission is to make meal planning and calorie
              tracking simple, intuitive, and even enjoyable.
            </p>
            <p className="text-secondary">
              Founded in 2023, we&apos;ve been helping people achieve their
              nutritional goals through smart technology and personalized
              recommendations.
            </p>
          </div>
          <div className="md:w-1/2">
            <div className="rounded-lg overflow-hidden ">
              <Doughnut
                data={exampleData}
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
                          const unit =
                            context.label === "Calories" ? "kcal" : "g";
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
      </section>

      {/* Features section */}
      <section className="mb-16">
        <h2 className="text-2xl text-primary md:text-3xl font-semibold mb-8 text-center">
          Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-primary">
          {[
            {
              title: "Meal Planning",
              description:
                "Create balanced meal plans tailored to your dietary needs and preferences.",
            },
            {
              title: "Calorie Tracking",
              description:
                "Easily track your daily caloric intake with our intuitive interface.",
            },
            {
              title: "Recipe Suggestions",
              description:
                "Discover new healthy recipes that match your nutritional goals.",
            },
          ].map((feature, index) => (
            <div key={index} className="p-6 bg-background rounded-lg shadow-md">
              <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
