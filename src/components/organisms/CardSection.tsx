import { SectionHeader, type SectionHeaderProps } from "../molecules/SectionHeader";

interface CardSectionProps {
  header?: SectionHeaderProps;
  children: React.ReactNode;
  className?: string;
  /** Pass a custom border/bg override for special cards like danger zones */
  variant?: "default" | "danger";
}

export function CardSection({
  header,
  children,
  className = "",
  variant = "default",
}: CardSectionProps) {
  const base =
    variant === "danger"
      ? "rounded-lg border border-error/20 bg-surface p-6"
      : "rounded-lg shadow-card bg-surface p-6";

  return (
    <div className={`${base} ${className}`}>
      {header && <SectionHeader {...header} />}
      {children}
    </div>
  );
}
