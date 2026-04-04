import type { TextareaHTMLAttributes } from "react";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  hint?: string;
  error?: string;
}

export function Textarea({
  label,
  hint,
  error,
  className = "",
  id,
  ...props
}: TextareaProps) {
  const textareaId = id || label?.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label
          htmlFor={textareaId}
          className="text-sm font-medium text-gray-700"
        >
          {label}
        </label>
      )}
      <textarea
        id={textareaId}
        className={`
          w-full rounded-md border px-3 py-2
          text-base text-gray-900
          placeholder:text-gray-400
          transition-colors duration-150
          resize-y
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
      {hint && !error && (
        <p className="text-xs text-gray-400">{hint}</p>
      )}
      {error && <p className="text-xs text-error">{error}</p>}
    </div>
  );
}
