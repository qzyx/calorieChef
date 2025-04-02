import { User } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <div className="bg-primary flex justify-between rounded-md m-2 mb-1 md:mb-4 md:m-4  px-2 md:px-4 py-2">
      <span className="font-joti text-background  flex text-sm items-center sm:text-base md:text-lg lg:text-xl">
        <span className="select-none">Calorie Chef</span>
        <div className="flex gap-3 ml-4">
          <Link
            href={"/"}
            className="hover:bg-background/20 px-2 py-1 rounded transition-colors text-xs sm:text-sm md:text-base border border-background/30 flex"
          >
            Home
          </Link>
          <Link
            href={"/about"}
            className="hover:bg-background/20 px-2 py-1 rounded transition-colors text-xs sm:text-sm md:text-base border border-background/30 flex"
          >
            About
          </Link>
        </div>
      </span>
      <button className="cursor-pointer font-joti text-background text-lg">
        <User></User>
      </button>
    </div>
  );
}
