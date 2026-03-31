import { NavLink } from "react-router-dom";
import {
  User,
  Shield,
  Layers,
  Mail,
  Globe,
  RefreshCw,
  HardDrive,
  Settings,
  CreditCard,
  ArrowLeft,
  PanelLeft,
} from "lucide-react";
import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { useSidebarLayout } from "../../components/layout/SidebarLayoutContext";

const iconMap: Record<string, ReactNode> = {
  profile: <User size={16} />,
  security: <Shield size={16} />,
  workspaces: <Layers size={16} />,
  mailboxes: <Mail size={16} />,
  domains: <Globe size={16} />,
  syncs: <RefreshCw size={16} />,
  backups: <HardDrive size={16} />,
  admin: <Settings size={16} />,
  billing: <CreditCard size={16} />,
};

interface SectionGroup {
  label: string;
  items: { id: string; label: string }[];
}

const sections: SectionGroup[] = [
  {
    label: "General",
    items: [
      { id: "profile", label: "Profile" },
      { id: "security", label: "Security" },
      { id: "workspaces", label: "Workspaces" },
    ],
  },
  {
    label: "Personal",
    items: [
      { id: "mailboxes", label: "Mailboxes" },
      { id: "domains", label: "Domains" },
      { id: "syncs", label: "Syncs" },
      { id: "backups", label: "Backups" },
      { id: "admin", label: "Admin" },
      { id: "billing", label: "Billing" },
    ],
  },
];

export function SettingsSidebar() {
  const { collapsed, toggleCollapsed } = useSidebarLayout();

  return (
    <aside className="w-[var(--sidebar-width)] shrink-0 transition-[width] duration-200 ease-[cubic-bezier(0.16,1,0.3,1)]">
      <div
        className={`
          fixed top-0 left-0 flex h-screen w-[var(--sidebar-width)] flex-col overflow-hidden bg-gray-50 p-4
          transition-[width] duration-200 ease-[cubic-bezier(0.16,1,0.3,1)]
        `}
      >
        {/* Header — logo + collapse toggle */}
        <div className={`mb-6 flex items-center ${collapsed ? "justify-center" : "justify-between"}`}>
          {!collapsed && (
            <Link
              to="/"
              className="flex items-center gap-2 text-gray-900"
              aria-label="Cirrux"
            >
              <Mail size={18} />
              <span className="text-sm font-medium tracking-[0.02em]">Cirrux</span>
            </Link>
          )}
          <button
            type="button"
            onClick={toggleCollapsed}
            aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
            className="flex h-8 w-8 items-center justify-center rounded-md text-gray-400 transition-colors hover:bg-gray-200/60 hover:text-gray-600 cursor-pointer"
          >
            <PanelLeft size={18} />
          </button>
        </div>

        {/* Back to inbox */}
        <Link
          to="/"
          aria-label="Back to inbox"
          title={collapsed ? "Back to inbox" : undefined}
          className={`
            mb-4 flex items-center rounded-md px-2.5 py-1.5 text-base text-gray-500 transition-colors hover:bg-gray-200/60 hover:text-gray-700
            ${collapsed ? "justify-center px-0" : "gap-2.5"}
          `}
        >
          <ArrowLeft size={16} className="opacity-70" />
          {!collapsed && "Back to inbox"}
        </Link>

        {/* Section groups */}
        <nav className="flex flex-1 flex-col gap-6">
          {sections.map((group) => (
            <div key={group.label}>
              {!collapsed && (
                <div className="mb-2 px-2.5 text-xs font-semibold uppercase tracking-wider text-gray-400">
                  {group.label}
                </div>
              )}
              <div className="flex flex-col gap-0.5">
                {group.items.map((item) => (
                  <NavLink key={item.id} to={`/settings/${item.id}`}>
                    {({ isActive }) => (
                      <div
                        title={collapsed ? item.label : undefined}
                        className={`
                          flex items-center gap-2.5 rounded-md px-2.5 py-1.5
                          text-base transition-colors
                          ${collapsed ? "justify-center px-0" : ""}
                          ${
                            isActive
                              ? "bg-white font-medium text-gray-900"
                              : "text-gray-500 hover:bg-gray-200/60 hover:text-gray-700"
                          }
                        `}
                      >
                        <span className={`opacity-70 transition-transform duration-200 ${collapsed ? "scale-110" : "scale-100"}`}>{iconMap[item.id]}</span>
                        {!collapsed && item.label}
                      </div>
                    )}
                  </NavLink>
                ))}
              </div>
            </div>
          ))}
        </nav>
      </div>
    </aside>
  );
}
