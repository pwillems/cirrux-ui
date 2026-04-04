import { useState } from "react";
import type { Story } from "@ladle/react";
import { Archive, FilePenLine, Inbox, PenSquare, Send, Star, Trash2 } from "lucide-react";
import { MemoryRouter } from "react-router-dom";
import { SidebarLayoutContext } from "./SidebarLayoutContext";
import { Sidebar } from "./Sidebar";

const primaryAction = {
  label: "Compose",
  icon: <PenSquare size={16} />,
  href: "/compose",
};

const groups = [
  {
    label: "Mailbox",
    items: [
      { label: "Inbox", icon: <Inbox size={16} />, href: "/", end: true, count: 4, shortcut: ["G", "I"] },
      { label: "Starred", icon: <Star size={16} />, href: "/starred", shortcut: ["G", "S"] },
      { label: "Drafts", icon: <FilePenLine size={16} />, href: "/drafts", count: 2, shortcut: ["G", "D"] },
      { label: "Sent", icon: <Send size={16} />, href: "/sent", shortcut: ["G", "E"] },
    ],
  },
  {
    label: "Organize",
    items: [
      { label: "Archive", icon: <Archive size={16} />, href: "/archive", shortcut: ["G", "A"] },
      { label: "Trash", icon: <Trash2 size={16} />, href: "/trash", shortcut: ["G", "T"] },
    ],
  },
];

function SidebarDemo({ initialCollapsed = false }: { initialCollapsed?: boolean }) {
  const [collapsed, setCollapsed] = useState(initialCollapsed);
  return (
    <MemoryRouter initialEntries={["/"]}>
      <SidebarLayoutContext.Provider
        value={{
          collapsed,
          toggleCollapsed: () => setCollapsed((c) => !c),
          mobileOpen: false,
          setMobileOpen: () => {},
        }}
      >
        <div className="relative flex h-screen overflow-hidden">
          <Sidebar primaryAction={primaryAction} groups={groups} />
        </div>
      </SidebarLayoutContext.Provider>
    </MemoryRouter>
  );
}

export const Default: Story = () => <SidebarDemo />;

export const Collapsed: Story = () => <SidebarDemo initialCollapsed />;
