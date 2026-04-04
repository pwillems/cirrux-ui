import { SectionTitle } from "../atoms/SectionTitle";

interface SectionHeaderProps {
  icon?: React.ReactNode;
  title: string;
  description?: string;
  trailing?: React.ReactNode;
}

export function SectionHeader({
  icon,
  title,
  description,
  trailing,
}: SectionHeaderProps) {
  return (
    <div className="mb-4">
      <div className="flex items-center gap-2">
        {icon && (
          <span className="text-gray-400 shrink-0">{icon}</span>
        )}
        <SectionTitle>{title}</SectionTitle>
        {trailing}
      </div>
      {description && (
        <p className="mt-1 text-sm text-gray-500">{description}</p>
      )}
    </div>
  );
}

export type { SectionHeaderProps };
