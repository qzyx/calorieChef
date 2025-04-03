import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function BackButton({
  top = 5,
  left = 5,
  p = 5,
}: {
  top: number;
  left: number;
  p: number;
}) {
  const router = useRouter();
  return (
    <button
      onClick={() => router.back()}
      style={{ top: `${top}px`, left: `${left}px`, padding: `${p}px` }}
      className={`absolute z-10 text-primary cursor-pointer hover:scale-110 transition-all duration-150 rounded-full bg-background`}
    >
      <ArrowLeft></ArrowLeft>
    </button>
  );
}
