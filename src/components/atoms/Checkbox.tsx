import { Check } from "lucide-react";

interface CheckboxProps {
  checked: boolean;
  onChange?: (checked: boolean) => void;
  size?: "sm" | "md";
}

export function Checkbox({ checked, onChange, size = "md" }: CheckboxProps) {
  const dim = size === "sm" ? "w-4 h-4" : "w-5 h-5";
  const icon = size === "sm" ? 10 : 12;

  return (
    <button
      type="button"
      role="checkbox"
      aria-checked={checked}
      onClick={() => onChange?.(!checked)}
      className={`${dim} rounded flex items-center justify-center border-2 transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-1 ${
        checked
          ? "bg-gray-900 border-gray-900"
          : "bg-white border-gray-300 hover:border-gray-400"
      }`}
    >
      {checked && (
        <Check size={icon} className="text-white" strokeWidth={3} />
      )}
    </button>
  );
}
