import { useState } from "react";
import { Outlet } from "react-router-dom";
import { ThemeProvider } from "../theme/ThemeProvider";
import { SidebarLayoutContext } from "./SidebarLayoutContext";

export function AppShell() {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <ThemeProvider>
      <SidebarLayoutContext.Provider
        value={{
          collapsed,
          toggleCollapsed: () => setCollapsed((current) => !current),
          mobileOpen,
          setMobileOpen,
        }}
      >
        <div className="h-screen overflow-y-auto overflow-x-hidden bg-surface">
          <Outlet />
        </div>
      </SidebarLayoutContext.Provider>
    </ThemeProvider>
  );
}
