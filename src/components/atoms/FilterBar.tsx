import React from "react";

export interface FilterOption<T extends string = string> {
  value: T;
  label: string;
}

interface FilterBarProps<T extends string = string> {
  options: FilterOption<T>[];
  value: T;
  onChange: (value: T) => void;
  className?: string;
}

export function FilterBar<T extends string = string>({
  options,
  value,
  onChange,
  className = "",
}: FilterBarProps<T>) {
  return (
    <div className={`flex items-center gap-0 ${className}`}>
      {options.map((opt, i) => (
        <React.Fragment key={opt.value}>
          <button
            type="button"
            onClick={() => onChange(opt.value)}
            className={`text-xs transition-colors cursor-pointer ${
              value === opt.value
                ? "text-gray-900 font-medium"
                : "text-gray-400 hover:text-gray-600"
            }`}
          >
            {opt.label}
          </button>
          {i < options.length - 1 && (
            <span className="text-xs text-gray-300 mx-1.5">&middot;</span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
