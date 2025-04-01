"use client";

import { Link } from "lucide-react";
import { useRouter } from "next/navigation";

interface LinkType {
  sentence: string;
  link: string;
}

export default function FastSearch() {
  const router = useRouter();
  const links: LinkType[] = [
    {
      sentence: "Min Protein:30 & Max Calories:500",
      link: "/filter?minProtein=30&maxCalories=500",
    },
    {
      sentence: "Max Fats:10 & Max Carbs:20",
      link: "/filter?maxFats=10&maxCarbs=20",
    },
    {
      sentence: "High Protein Low Carb",
      link: "/filter?minProtein=40&maxCarbs=15",
    },
    {
      sentence: "Quick Meals Under 400 Calories",
      link: "/filter?maxTime=20&maxCalories=400",
    },
  ];

  return (
    <div className="grid gap-2 h-full  grid-cols-2 grid-rows-2 mx-2">
      {links.map((item, idx) => (
        <div
          key={idx}
          onClick={() => router.push(item.link)}
          className=" rounded gap-1   select-none text-primary flex justify-center items-center hover:bg-primary/50 transition-colors"
        >
          <Link></Link>
          <div className=" font-bold">{item.sentence}</div>
        </div>
      ))}
    </div>
  );
}
