import { useState } from "react";
import type { Story } from "@ladle/react";
import { SidebarLayoutContext } from "./SidebarLayoutContext";
import { SidebarCollapseButton } from "./SidebarCollapseButton";

function SidebarCollapseButtonDemo({ initialCollapsed = false }) {
  const [collapsed, setCollapsed] = useState(initialCollapsed);
  return (
    <SidebarLayoutContext.Provider
      value={{
        collapsed,
        toggleCollapsed: () => setCollapsed((c) => !c),
        mobileOpen: false,
        setMobileOpen: () => {},
      }}
    >
      <div className="flex items-center gap-4 p-4">
        <SidebarCollapseButton collapsed={collapsed} />
        <span className="text-sm text-gray-400">
          Sidebar is {collapsed ? "collapsed" : "expanded"}
        </span>
      </div>
    </SidebarLayoutContext.Provider>
  );
}

export const Expanded: Story = () => <SidebarCollapseButtonDemo />;

export const Collapsed: Story = () => (
  <SidebarCollapseButtonDemo initialCollapsed />
);
