interface SectionTitleProps {
  children: React.ReactNode;
}

export function SectionTitle({ children }: SectionTitleProps) {
  return (
    <h2 className="text-md font-semibold tracking-[0.01em] text-gray-900">
      {children}
    </h2>
  );
}
