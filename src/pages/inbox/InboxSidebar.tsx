import type { ReactNode } from "react";
import {
  Archive,
  FilePenLine,
  Inbox,
  Mail,
  PanelLeft,
  PenSquare,
  Send,
  ShieldAlert,
  Star,
  StickyNote,
  Trash2,
} from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { useSidebarLayout } from "../../components/layout/SidebarLayoutContext";
import { folders } from "../../data/mockData";

type FolderId = (typeof folders)[number]["id"];

interface FolderGroup {
  label: string;
  items: FolderId[];
}

const iconMap: Record<FolderId, ReactNode> = {
  inbox: <Inbox size={16} />,
  starred: <Star size={16} />,
  drafts: <FilePenLine size={16} />,
  sent: <Send size={16} />,
  archive: <Archive size={16} />,
  trash: <Trash2 size={16} />,
  spam: <ShieldAlert size={16} />,
  notes: <StickyNote size={16} />,
};

const groups: FolderGroup[] = [
  {
    label: "Mailbox",
    items: ["inbox", "starred", "drafts", "sent"],
  },
  {
    label: "Organize",
    items: ["archive", "trash", "spam", "notes"],
  },
];

export function InboxSidebar() {
  const { collapsed, toggleCollapsed } = useSidebarLayout();
  const folderMap = new Map(folders.map((folder) => [folder.id, folder]));

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

        {/* Compose */}
        <Link
          to="/compose"
          aria-label="Compose"
          title={collapsed ? "Compose" : undefined}
          className={`
            mb-4 flex items-center rounded-md px-2.5 py-1.5 text-base text-gray-500 transition-colors hover:bg-gray-200/60 hover:text-gray-700
            ${collapsed ? "justify-center px-0" : "gap-2.5"}
          `}
        >
          <PenSquare size={16} className="opacity-70" />
          {!collapsed && "Compose"}
        </Link>

        {/* Folder groups */}
        <nav className="flex flex-1 flex-col gap-6">
          {groups.map((group) => (
            <div key={group.label}>
              {!collapsed && (
                <div className="mb-2 px-2.5 text-xs font-semibold uppercase tracking-wider text-gray-400">
                  {group.label}
                </div>
              )}
              <div className="flex flex-col gap-0.5">
                {group.items.map((folderId) => {
                  const folder = folderMap.get(folderId);

                  if (!folder) {
                    return null;
                  }

                  return (
                    <NavLink key={folder.id} to={folder.id === "inbox" ? "/" : `/${folder.id}`}>
                      {({ isActive }) => (
                        <div
                          title={collapsed ? folder.name : undefined}
                          className={`
                            flex items-center justify-between rounded-md px-2.5 py-1.5
                            text-base transition-colors
                            ${collapsed ? "justify-center px-0" : ""}
                            ${
                              isActive
                                ? "bg-white font-medium text-gray-900"
                                : "text-gray-500 hover:bg-gray-200/60 hover:text-gray-700"
                            }
                          `}
                        >
                          <span className={`flex items-center ${collapsed ? "" : "gap-2.5"}`}>
                            <span className={`opacity-70 transition-transform duration-200 ${collapsed ? "scale-110" : "scale-100"}`}>{iconMap[folder.id]}</span>
                            {!collapsed && <span>{folder.name}</span>}
                          </span>
                          {!collapsed && folder.count > 0 && (
                            <span className="text-xs opacity-70">{folder.count}</span>
                          )}
                        </div>
                      )}
                    </NavLink>
                  );
                })}
              </div>
            </div>
          ))}
        </nav>
      </div>
    </aside>
  );
}
