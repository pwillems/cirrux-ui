import type { ReactNode } from "react";

interface StatCardProps {
  label: string;
  value: string;
  icon?: ReactNode;
  onClick?: () => void;
}

export function StatCard({ label, value, icon, onClick }: StatCardProps) {
  const className =
    "rounded-lg border border-gray-200 bg-surface px-4 py-3 text-left w-full" +
    (onClick ? " hover:border-gray-300 transition-colors cursor-pointer" : "");

  const content = (
    <>
      <div className="flex items-center gap-2 mb-1">
        {icon}
        <span className="text-xs text-gray-500">{label}</span>
      </div>
      <p className="text-base font-semibold text-gray-900">{value}</p>
    </>
  );

  return onClick ? (
    <button type="button" onClick={onClick} className={className}>
      {content}
    </button>
  ) : (
    <div className={className}>{content}</div>
  );
}
