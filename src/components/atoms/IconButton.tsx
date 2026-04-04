interface IconButtonProps {
  icon: React.ReactNode;
  label: string;
  size?: "sm" | "md";
  onClick?: () => void;
  className?: string;
}

export function IconButton({
  icon,
  label,
  size = "md",
  onClick,
  className = "",
}: IconButtonProps) {
  const dimensions = size === "sm" ? "h-7 w-7" : "h-8 w-8";

  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className={`flex ${dimensions} items-center justify-center rounded-md text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors cursor-pointer ${className}`}
    >
      {icon}
    </button>
  );
}
