import { useEffect, useRef, useState } from "react";
import { Check, Monitor, Moon, SquareTerminal, Sun } from "lucide-react";
import { useTheme, type Theme } from "./ThemeProvider";

const options: { value: Theme; label: string; icon: typeof Monitor }[] = [
  { value: "system", label: "System", icon: Monitor },
  { value: "light", label: "Light", icon: Sun },
  { value: "dark", label: "Dark", icon: Moon },
];

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleKey);
    };
  }, [open]);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-md text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600 md:h-8 md:w-auto md:gap-1.5 md:px-2"
        aria-label="Theme"
      >
        <SquareTerminal size={16} />
      </button>

      {open && (
        <div className="absolute right-0 top-full z-50 mt-2 w-44 rounded-lg border border-gray-200 bg-surface py-1 shadow-lg">
          <div className="px-3 py-2 text-xs font-medium text-gray-400">
            Theme
          </div>
          {options.map(({ value, label, icon: Icon }) => (
            <button
              key={value}
              type="button"
              onClick={() => {
                setTheme(value);
                setOpen(false);
              }}
              className={`
                flex w-full cursor-pointer items-center gap-2.5 px-3 py-1.5 text-sm transition-colors
                ${theme === value ? "bg-gray-50 text-gray-900" : "text-gray-500 hover:bg-gray-50 hover:text-gray-700"}
              `}
            >
              <Icon size={15} />
              <span className="flex-1 text-left">{label}</span>
              {theme === value && (
                <Check size={14} className="text-gray-400" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
