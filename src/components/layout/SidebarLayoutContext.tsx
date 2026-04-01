import { createContext, useContext } from "react";

interface SidebarLayoutContextValue {
  collapsed: boolean;
  toggleCollapsed: () => void;
  mobileOpen: boolean;
  setMobileOpen: (open: boolean) => void;
}

export const SidebarLayoutContext =
  createContext<SidebarLayoutContextValue | null>(null);

export function useSidebarLayout() {
  const context = useContext(SidebarLayoutContext);

  if (!context) {
    throw new Error("useSidebarLayout must be used within AppShell");
  }

  return context;
}
