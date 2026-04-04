import { PageTitle } from "../atoms/PageTitle";

interface PageHeaderProps {
  title: string;
  action?: React.ReactNode;
}

export function PageHeader({ title, action }: PageHeaderProps) {
  return (
    <div className="mb-6 flex items-center justify-between">
      <PageTitle>{title}</PageTitle>
      {action}
    </div>
  );
}
