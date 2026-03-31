import { useState } from "react";
import { Outlet } from "react-router-dom";
import { SidebarLayoutContext } from "./SidebarLayoutContext";

export function AppShell() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <SidebarLayoutContext.Provider
      value={{
        collapsed,
        toggleCollapsed: () => setCollapsed((current) => !current),
      }}
    >
      <div className="h-screen overflow-y-auto bg-white">
        <Outlet />
      </div>
    </SidebarLayoutContext.Provider>
  );
}
