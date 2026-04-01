import type { CSSProperties } from "react";
import { Link, Outlet } from "react-router-dom";
import { Menu, Search } from "lucide-react";
import { useSidebarLayout } from "../../components/layout/SidebarLayoutContext";
import { ThemeSwitcher } from "../../components/theme/ThemeSwitcher";
import { InboxSidebar } from "./InboxSidebar";

export function InboxLayout() {
  const { collapsed, setMobileOpen } = useSidebarLayout();

  return (
    <div
      className="flex min-h-screen"
      style={
        {
          "--sidebar-width": collapsed ? "5rem" : "15rem",
        } as CSSProperties
      }
    >
      <InboxSidebar />
      <main className="flex min-w-0 flex-1 flex-col">
        <header className="flex h-12 shrink-0 items-center gap-1 px-2 md:px-4">
          {/* Mobile: hamburger */}
          <button
            className="flex h-8 w-8 items-center justify-center rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors cursor-pointer md:hidden"
            aria-label="Open menu"
            onClick={() => setMobileOpen(true)}
          >
            <Menu size={18} />
          </button>

          {/* Right actions */}
          <div className="ml-auto flex min-w-0 items-center gap-1">
            <ThemeSwitcher />
            <button
              className="flex h-8 items-center gap-1.5 rounded-md px-2 text-sm text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors cursor-pointer"
              aria-label="Search"
            >
              <Search size={16} />
            </button>
            <Link
              to="/settings/profile"
              className="flex h-8 items-center gap-1.5 rounded-md px-2 text-sm text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-colors"
            >
              <span className="hidden sm:inline">Kay</span>
              <span className="flex h-5 w-5 items-center justify-center rounded-sm bg-accent-muted text-xs font-medium text-gray-900">
                K
              </span>
            </Link>
          </div>
        </header>
        <div className="flex-1">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
