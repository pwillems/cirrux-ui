import type { CSSProperties } from "react";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { Menu, Search, SquareTerminal } from "lucide-react";
import { useSidebarLayout } from "./SidebarLayoutContext";
import { Sidebar, type SidebarNavGroup, type SidebarNavItem } from "./Sidebar";
import { IconButton } from "../atoms/IconButton";
import { Avatar } from "../atoms/Avatar";
import { CommandPalette } from "../organisms/CommandPalette";

interface SidebarPrimaryAction {
  label: string;
  icon: React.ReactNode;
  href: string;
}

interface AppLayoutProps {
  primaryAction: SidebarPrimaryAction;
  groups: SidebarNavGroup[];
  contentClassName?: string;
}

export function AppLayout({
  primaryAction,
  groups,
  contentClassName = "px-4 py-4 md:px-6 md:py-6",
}: AppLayoutProps) {
  const { collapsed, setMobileOpen } = useSidebarLayout();
  const [paletteOpen, setPaletteOpen] = useState(false);

  return (
    <div
      className="flex min-h-screen"
      style={{ "--sidebar-width": collapsed ? "5rem" : "15rem" } as CSSProperties}
    >
      <Sidebar primaryAction={primaryAction} groups={groups} />
      <main className="flex min-w-0 flex-1 flex-col">
        <header className="flex h-12 shrink-0 items-center gap-1 px-2 md:px-4">
          <IconButton
            icon={<Menu size={18} />}
            label="Open menu"
            onClick={() => setMobileOpen(true)}
            className="md:hidden"
          />
          <div className="ml-auto flex min-w-0 items-center gap-1">
            <button
              type="button"
              onClick={() => setPaletteOpen(true)}
              className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-md text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600"
              aria-label="Open command palette"
            >
              <SquareTerminal size={16} />
            </button>
            <Link
              to="/search"
              className="flex h-8 items-center gap-1.5 rounded-md px-2 text-sm text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
              aria-label="Search"
            >
              <Search size={16} />
            </Link>
            <Link
              to="/settings/profile"
              className="flex h-8 items-center gap-1.5 rounded-md px-2 text-sm text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-colors"
            >
              <span className="hidden sm:inline">Kay</span>
              <Avatar initials="K" />
            </Link>
          </div>
        </header>
        <div className={contentClassName}>
          <Outlet />
        </div>
      </main>

      <CommandPalette open={paletteOpen} onClose={() => setPaletteOpen(false)} />
    </div>
  );
}

export type { SidebarNavGroup, SidebarNavItem };
