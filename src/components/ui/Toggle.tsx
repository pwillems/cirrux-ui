interface ToggleProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  description?: string;
  disabled?: boolean;
}

export function Toggle({
  checked,
  onChange,
  label,
  description,
  disabled = false,
}: ToggleProps) {
  return (
    <label
      className={`
        inline-flex items-center gap-3 select-none
        ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
      `}
    >
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        disabled={disabled}
        onClick={() => onChange(!checked)}
        className={`
          relative inline-flex h-5 w-9 shrink-0 items-center
          rounded-full transition-colors duration-200
          focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent
          ${checked ? "bg-accent" : "bg-gray-300"}
          ${disabled ? "cursor-not-allowed" : "cursor-pointer"}
        `}
      >
        <span
          className={`
            inline-block h-3.5 w-3.5 rounded-full bg-white
            shadow-sm transition-transform duration-200 ease-[cubic-bezier(0.34,1.56,0.64,1)]
            ${checked ? "translate-x-[18px]" : "translate-x-[3px]"}
          `}
        />
      </button>
      {(label || description) && (
        <div className="flex flex-col">
          {label && (
            <span className="text-base text-gray-900">{label}</span>
          )}
          {description && (
            <span className="text-xs text-gray-400">
              {description}
            </span>
          )}
        </div>
      )}
    </label>
  );
}
