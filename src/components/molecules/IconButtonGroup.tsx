import { IconButton } from "../atoms/IconButton";

interface IconButtonGroupItem {
  icon: React.ReactNode;
  label: string;
  size?: "sm" | "md";
  onClick?: () => void;
}

interface IconButtonGroupProps {
  buttons: IconButtonGroupItem[];
  size?: "sm" | "md";
  className?: string;
}

export function IconButtonGroup({
  buttons,
  size = "md",
  className = "",
}: IconButtonGroupProps) {
  return (
    <div className={`flex items-center gap-1 text-gray-400 ${className}`}>
      {buttons.map((btn) => (
        <IconButton
          key={btn.label}
          icon={btn.icon}
          label={btn.label}
          size={btn.size ?? size}
          onClick={btn.onClick}
        />
      ))}
    </div>
  );
}
