import { type ReactNode, useEffect, useRef, useState } from "react";
import {
  BookUser,
  Calendar,
  CalendarDays,
  ChevronDown,
  Mail,
  PanelLeft,
  X,
} from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { useSidebarLayout } from "./SidebarLayoutContext";
import { KbdShortcut } from "../ui/KbdShortcut";

const apps = [
  { id: "mail", label: "Mail", icon: <Mail size={15} /> },
  { id: "contacts", label: "Contacts", icon: <BookUser size={15} /> },
  { id: "agenda", label: "Agenda", icon: <CalendarDays size={15} /> },
  { id: "calendar", label: "Calendar", icon: <Calendar size={15} /> },
];

export interface SidebarNavItem {
  label: string;
  icon: ReactNode;
  href: string;
  count?: number;
  shortcut?: string[];
  end?: boolean;
}

export interface SidebarNavGroup {
  label: string;
  items: SidebarNavItem[];
}

interface SidebarPrimaryAction {
  label: string;
  icon: ReactNode;
  href: string;
}

interface SidebarProps {
  primaryAction: SidebarPrimaryAction;
  groups: SidebarNavGroup[];
}

export function Sidebar({ primaryAction, groups }: SidebarProps) {
  const { collapsed, toggleCollapsed, mobileOpen, setMobileOpen } =
    useSidebarLayout();
  const [appMenuOpen, setAppMenuOpen] = useState(false);
  const appMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!appMenuOpen) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (
        appMenuRef.current &&
        !appMenuRef.current.contains(e.target as Node)
      ) {
        setAppMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [appMenuOpen]);

  const sidebarContent = (
    <div
      className={`
        top-0 left-0 flex h-screen flex-col overflow-hidden bg-white p-4
        transition-[width,transform] duration-200 ease-[cubic-bezier(0.16,1,0.3,1)]
        max-md:absolute max-md:w-60
        md:fixed md:w-[var(--sidebar-width)]
      `}
    >
      {/* Header — app switcher + toggle */}
      <div
        className={`mb-6 flex items-center ${collapsed ? "max-md:justify-between md:justify-center" : "justify-between"}`}
      >
        {(!collapsed || mobileOpen) && (
          <div className="relative" ref={appMenuRef}>
            <button
              type="button"
              onClick={() => setAppMenuOpen((o) => !o)}
              className="flex items-center gap-1.5 text-gray-900 hover:text-gray-600 transition-colors cursor-pointer"
              aria-haspopup="true"
              aria-expanded={appMenuOpen}
            >
              <Mail size={18} />
              <span className="text-sm font-medium tracking-[0.02em]">
                Mail
              </span>
              <ChevronDown
                size={13}
                className={`text-gray-400 transition-transform duration-150 ${appMenuOpen ? "rotate-180" : ""}`}
              />
            </button>
            {appMenuOpen && (
              <div className="absolute left-0 top-full z-50 mt-1.5 w-44 rounded-lg border border-gray-100 bg-white py-1 shadow-md">
                {apps.map((app) => (
                  <button
                    key={app.id}
                    type="button"
                    onClick={() => setAppMenuOpen(false)}
                    className={`flex w-full items-center gap-2.5 px-3 py-1.5 text-sm transition-colors hover:bg-gray-50 ${app.id === "mail" ? "font-medium text-gray-900" : "text-gray-500"}`}
                  >
                    <span className="opacity-60">{app.icon}</span>
                    {app.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        )}
        {/* Desktop: collapse toggle */}
        <button
          type="button"
          onClick={toggleCollapsed}
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          className="hidden md:flex h-8 w-8 items-center justify-center rounded-md text-gray-400 transition-colors hover:bg-gray-200/60 hover:text-gray-600 cursor-pointer"
        >
          <PanelLeft size={18} />
        </button>
        {/* Mobile: close */}
        <button
          type="button"
          onClick={() => setMobileOpen(false)}
          aria-label="Close menu"
          className="flex md:hidden h-8 w-8 items-center justify-center rounded-md text-gray-400 transition-colors hover:bg-gray-200/60 hover:text-gray-600 cursor-pointer"
        >
          <X size={18} />
        </button>
      </div>

      {/* Primary action */}
      <Link
        to={primaryAction.href}
        aria-label={primaryAction.label}
        title={collapsed && !mobileOpen ? primaryAction.label : undefined}
        onClick={() => setMobileOpen(false)}
        className={`
          mb-4 flex items-center rounded-md px-2.5 py-1.5 text-sm font-medium text-gray-700 bg-gray-100 transition-colors hover:bg-gray-200 hover:text-gray-900
          max-md:gap-2.5
          ${collapsed ? "md:justify-center md:px-0" : "gap-2.5"}
        `}
      >
        <span className="opacity-70">{primaryAction.icon}</span>
        {(!collapsed || mobileOpen) && primaryAction.label}
      </Link>

      {/* Nav groups */}
      <nav
        className={`flex flex-1 flex-col ${collapsed && !mobileOpen ? "gap-8" : "gap-6"}`}
      >
        {groups.map((group) => (
          <div key={group.label}>
            {(!collapsed || mobileOpen) && (
              <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-400">
                {group.label}
              </div>
            )}
            <div
              className={`flex flex-col ${collapsed && !mobileOpen ? "gap-3" : "gap-1"}`}
            >
              {group.items.map((item) => (
                <NavLink
                  key={item.href}
                  to={item.href}
                  end={item.end}
                  onClick={() => setMobileOpen(false)}
                  className="group"
                >
                  {({ isActive }) => (
                    <div
                      title={collapsed && !mobileOpen ? item.label : undefined}
                      className={`
                        flex items-center justify-between rounded-md py-0.5
                        text-base transition-colors
                        ${collapsed && !mobileOpen ? "md:justify-center" : ""}
                        ${
                          isActive
                            ? "font-medium text-gray-900"
                            : "text-gray-500 hover:text-gray-700"
                        }
                      `}
                    >
                      <span
                        className={`flex items-center ${collapsed && !mobileOpen ? "" : "gap-2.5"}`}
                      >
                        <span
                          className={`opacity-70 transition-transform duration-200 ${collapsed && !mobileOpen ? "scale-110" : "scale-100"}`}
                        >
                          {item.icon}
                        </span>
                        {(!collapsed || mobileOpen) && (
                          <span>{item.label}</span>
                        )}
                      </span>
                      {(!collapsed || mobileOpen) && (
                          <span className="relative flex items-center">
                            {item.shortcut ? (
                              <>
                                {(item.count ?? 0) > 0 && (
                                  <span className="absolute inset-0 flex items-center justify-end text-xs opacity-70 group-hover:opacity-0">
                                    {item.count}
                                  </span>
                                )}
                                <span className="opacity-0 group-hover:opacity-100">
                                  <KbdShortcut keys={item.shortcut} />
                                </span>
                              </>
                            ) : (item.count ?? 0) > 0 ? (
                              <span className="text-xs opacity-70">
                                {item.count}
                              </span>
                            ) : (
                              <span className="invisible">
                                <KbdShortcut keys={["X"]} />
                              </span>
                            )}
                          </span>
                        )}
                    </div>
                  )}
                </NavLink>
              ))}
            </div>
          </div>
        ))}
      </nav>
    </div>
  );

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden md:block w-[var(--sidebar-width)] shrink-0 transition-[width] duration-200 ease-[cubic-bezier(0.16,1,0.3,1)]">
        {sidebarContent}
      </aside>

      {/* Mobile overlay — always rendered, transition-controlled */}
      <div
        className={`fixed inset-0 z-40 md:hidden ${mobileOpen ? "" : "pointer-events-none"}`}
      >
        <div
          className={`absolute inset-0 bg-black/20 transition-opacity duration-300 ${mobileOpen ? "opacity-100" : "opacity-0"}`}
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={`relative z-10 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${mobileOpen ? "translate-x-0" : "-translate-x-full"}`}
        >
          {sidebarContent}
        </div>
      </div>
    </>
  );
}
