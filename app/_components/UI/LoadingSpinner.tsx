export function LoadingSpinner({
  size = "md",
  color = "background",
}: {
  size?: "sm" | "md" | "lg";
  color?: string;
}) {
  const sizes = {
    sm: "h-16 w-16",
    md: "h-32 w-32",
    lg: "h-48 w-48",
  };

  // Map color to Tailwind class - Tailwind doesn't support fully dynamic classes
  const borderColorClass =
    {
      background: "border-background",
      primary: "border-primary",
      secondary: "border-secondary",
      accent: "border-accent",
      info: "border-info",
      success: "border-success",
      warning: "border-warning",
      error: "border-error",
    }[color] || "border-primary";

  return (
    <div className="flex justify-center items-center h-full">
      <div
        className={`${sizes[size]} animate-spin rounded-full border-b-2 ${borderColorClass}`}
      ></div>
    </div>
  );
}
