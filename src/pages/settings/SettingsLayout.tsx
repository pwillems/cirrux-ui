import type { CSSProperties } from "react";
import { Link, Outlet } from "react-router-dom";
import { useSidebarLayout } from "../../components/layout/SidebarLayoutContext";
import { SettingsSidebar } from "./SettingsSidebar";

export function SettingsLayout() {
  const { collapsed } = useSidebarLayout();

  return (
    <div
      className="flex min-h-screen"
      style={
        {
          "--sidebar-width": collapsed ? "5rem" : "15rem",
        } as CSSProperties
      }
    >
      <SettingsSidebar />
      <main className="flex flex-1 flex-col">
        <header className="flex h-12 shrink-0 items-center justify-end px-4">
          <Link
            to="/settings/profile"
            className="flex h-8 items-center gap-1.5 rounded-md px-2 text-sm text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-colors"
          >
            Kay
            <span className="flex h-5 w-5 items-center justify-center rounded-sm bg-accent-muted text-xs font-medium text-gray-900">
              K
            </span>
          </Link>
        </header>
        <div className="sidebar-offset-center mx-auto w-full max-w-[60rem] px-8 py-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
