import { CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import type { ReactNode } from "react";

type Status = "saving" | "success" | "error";

interface StatusMessageProps {
  status: Status;
  children: ReactNode;
}

const config: Record<Status, { icon: ReactNode; className: string }> = {
  saving: {
    icon: <Loader2 size={14} className="animate-spin" />,
    className: "text-gray-500",
  },
  success: {
    icon: <CheckCircle size={14} />,
    className: "text-success",
  },
  error: {
    icon: <AlertCircle size={14} />,
    className: "text-error",
  },
};

export function StatusMessage({ status, children }: StatusMessageProps) {
  const { icon, className } = config[status];

  return (
    <div
      className={`inline-flex items-center gap-1.5 text-sm ${className}`}
    >
      {icon}
      <span>{children}</span>
    </div>
  );
}
