import { Link, useLocation } from "react-router-dom";
import { Mail, Monitor, Search } from "lucide-react";

export function TopBar() {
  const location = useLocation();
  const isSettings = location.pathname.startsWith("/settings");

  return (
    <header className="sticky top-0 z-10 flex h-12 items-center justify-between border-b border-black/[0.04] bg-white/80 px-4 backdrop-blur-xl">
      {/* Left — mail icon / home link */}
      <Link
        to="/"
        className="flex items-center gap-2 text-gray-500 transition-colors hover:text-gray-700"
        aria-label="Back to inbox"
      >
        <Mail size={18} />
        <span className="text-sm font-medium tracking-[0.02em] text-gray-900">
          Cirrux
        </span>
      </Link>

      {/* Right — actions */}
      <div className="flex items-center gap-1">
        {!isSettings && (
          <>
            <button
              className="flex h-8 items-center gap-1.5 rounded-md px-2 text-sm text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors cursor-pointer"
              aria-label="Commands"
            >
              <Monitor size={16} />
            </button>
            <button
              className="flex h-8 items-center gap-1.5 rounded-md px-2 text-sm text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors cursor-pointer"
              aria-label="Search"
            >
              <Search size={16} />
            </button>
          </>
        )}
        <Link
          to="/settings/profile"
          className="flex h-8 items-center gap-1.5 rounded-md px-2 text-sm text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-colors"
        >
          Kay
          <span className="flex h-5 w-5 items-center justify-center rounded-sm bg-accent-muted text-xs font-medium text-gray-900">
            K
          </span>
        </Link>
      </div>
    </header>
  );
}
