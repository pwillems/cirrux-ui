interface PageTitleProps {
  children: React.ReactNode;
}

export function PageTitle({ children }: PageTitleProps) {
  return (
    <h1 className="text-xl font-semibold tracking-tight text-gray-900 md:text-2xl">
      {children}
    </h1>
  );
}
