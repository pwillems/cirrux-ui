interface ListItemProps {
  leading?: React.ReactNode;
  title: string;
  subtitle?: string;
  trailing?: React.ReactNode;
  className?: string;
}

export function ListItem({
  leading,
  title,
  subtitle,
  trailing,
  className = "",
}: ListItemProps) {
  return (
    <div
      className={`flex items-center justify-between rounded-lg shadow-card bg-surface px-5 py-4 ${className}`}
    >
      <div className="flex items-center gap-3 min-w-0">
        {leading}
        <div className="min-w-0">
          <p className="text-base font-medium text-gray-900">{title}</p>
          {subtitle && (
            <p className="text-sm text-gray-400">{subtitle}</p>
          )}
        </div>
      </div>
      {trailing && (
        <div className="flex shrink-0 items-center gap-3 ml-3">
          {trailing}
        </div>
      )}
    </div>
  );
}
