import { PanelLeftClose, PanelLeftOpen } from "lucide-react";
import { useSidebarLayout } from "./SidebarLayoutContext";

interface SidebarCollapseButtonProps {
  collapsed: boolean;
}

export function SidebarCollapseButton({
  collapsed,
}: SidebarCollapseButtonProps) {
  const { toggleCollapsed } = useSidebarLayout();

  return (
    <button
      type="button"
      onClick={toggleCollapsed}
      aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
      title={collapsed ? "Expand sidebar" : "Collapse sidebar"}
      className={`
        mt-auto inline-flex h-8 w-8 items-center justify-center rounded-md text-gray-400 transition-colors
        hover:bg-gray-100 hover:text-gray-700
        ${collapsed ? "self-center" : "self-start"}
      `}
    >
      {collapsed ? <PanelLeftOpen size={15} /> : <PanelLeftClose size={15} />}
    </button>
  );
}
