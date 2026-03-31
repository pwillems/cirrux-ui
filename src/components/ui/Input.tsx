import type { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  hint?: string;
  error?: string;
}

export function Input({
  label,
  hint,
  error,
  className = "",
  id,
  ...props
}: InputProps) {
  const inputId = id || label?.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label
          htmlFor={inputId}
          className="text-sm font-medium text-gray-700"
        >
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={`
          h-9 w-full rounded-md border px-3
          text-base text-gray-900
          placeholder:text-gray-400
          transition-colors duration-150
          ${
            error
              ? "border-error bg-error-light focus:border-error"
              : "border-gray-200 bg-gray-50 focus:border-gray-400 focus:bg-white"
          }
          focus:outline-none
          ${className}
        `}
        {...props}
      />
      {hint && !error && (
        <p className="text-xs text-gray-400">{hint}</p>
      )}
      {error && <p className="text-xs text-error">{error}</p>}
    </div>
  );
}
