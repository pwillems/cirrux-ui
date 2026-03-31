import type { ReactNode } from "react";

type Variant = "default" | "success" | "error" | "warning";

interface BadgeProps {
  variant?: Variant;
  children: ReactNode;
}

const variantClasses: Record<Variant, string> = {
  default: "bg-gray-100 text-gray-600",
  success: "bg-success-light text-success",
  error: "bg-error-light text-error",
  warning: "bg-warning-light text-warning",
};

export function Badge({ variant = "default", children }: BadgeProps) {
  return (
    <span
      className={`
        inline-flex items-center rounded-full px-2 py-0.5
        text-xs font-medium
        ${variantClasses[variant]}
      `}
    >
      {children}
    </span>
  );
}
