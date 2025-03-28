import Link from "next/link";

export default function Heading() {
  return (
    <div className="text-primary w-full select-none  text-center py-4 text-3xl font-inknut ">
      <Link href={"/"}>CalorieChef</Link>
    </div>
  );
}
