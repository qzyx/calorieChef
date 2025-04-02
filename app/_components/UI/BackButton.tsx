"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function BackButton({
  top = 3,
  left = 3,
}: {
  top: number;
  left: number;
}) {
  const router = useRouter();
  return (
    <button
      onClick={() => router.back()}
      className={`absolute top-${top} z-10 left-${left} p-2 text-primary cursor-pointer hover:scale-110 transition-all duration-150 rounded-full bg-background`}
    >
      <ArrowLeft></ArrowLeft>
    </button>
  );
}
