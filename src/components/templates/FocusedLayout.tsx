import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { Mail, Search, SquareTerminal } from "lucide-react";
import { Avatar } from "../atoms/Avatar";
import { CommandPalette } from "../organisms/CommandPalette";

export function FocusedLayout() {
  const [paletteOpen, setPaletteOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col bg-surface">
      <header className="flex h-12 shrink-0 items-center gap-1 px-2 md:px-4">
        <Link
          to="/"
          className="flex h-8 w-8 items-center justify-center rounded-md text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600"
          aria-label="Back to inbox"
        >
          <Mail size={18} />
        </Link>

        <div className="ml-auto flex items-center gap-1">
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
            className="flex h-8 items-center gap-1.5 rounded-md px-2 text-sm text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600"
            aria-label="Search"
          >
            <Search size={16} />
          </Link>
          <Link
            to="/settings/profile"
            className="flex h-8 items-center gap-1.5 rounded-md px-2 text-sm text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-700"
          >
            <span className="hidden sm:inline">Kay</span>
            <Avatar initials="K" />
          </Link>
        </div>
      </header>

      <div className="flex flex-1 flex-col">
        <Outlet />
      </div>

      <CommandPalette open={paletteOpen} onClose={() => setPaletteOpen(false)} />
    </div>
  );
}
