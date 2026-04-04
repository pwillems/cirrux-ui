import { type InputHTMLAttributes, type ReactNode } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  hint?: string;
  error?: string;
  leadingIcon?: ReactNode;
  trailingAction?: ReactNode;
}

export function Input({
  label,
  hint,
  error,
  leadingIcon,
  trailingAction,
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
      <div className="relative flex items-center">
        {leadingIcon && (
          <span className="pointer-events-none absolute left-3 flex items-center text-gray-400">
            {leadingIcon}
          </span>
        )}
        <input
          id={inputId}
          className={`
            h-9 w-full rounded-md border
            text-base text-gray-900
            placeholder:text-gray-400
            transition-colors duration-150
            ${leadingIcon ? "pl-9" : "pl-3"}
            ${trailingAction ? "pr-9" : "pr-3"}
            ${
              error
                ? "border-error bg-error-light focus:border-error"
                : "border-gray-200 bg-gray-50 focus:border-gray-400 focus:bg-surface"
            }
            focus:outline-none
            ${className}
          `}
          {...props}
        />
        {trailingAction && (
          <span className="absolute right-2.5 flex items-center">
            {trailingAction}
          </span>
        )}
      </div>
      {hint && !error && (
        <p className="text-xs text-gray-400">{hint}</p>
      )}
      {error && <p className="text-xs text-error">{error}</p>}
    </div>
  );
}
