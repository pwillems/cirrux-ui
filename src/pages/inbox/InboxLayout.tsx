import {
  Archive,
  FilePenLine,
  Inbox,
  PenSquare,
  Send,
  ShieldAlert,
  Star,
  StickyNote,
  Trash2,
} from "lucide-react";
import { AppLayout, type SidebarNavGroup } from "../../components/layout/AppLayout";
import { folders } from "../../data/mockData";

const folderMap = new Map(folders.map((f) => [f.id, f]));

const groups: SidebarNavGroup[] = [
  {
    label: "Mailbox",
    items: [
      { label: "Inbox", icon: <Inbox size={16} />, href: "/", end: true, count: folderMap.get("inbox")?.count, shortcut: ["G", "I"] },
      { label: "Starred", icon: <Star size={16} />, href: "/starred", count: folderMap.get("starred")?.count, shortcut: ["G", "S"] },
      { label: "Drafts", icon: <FilePenLine size={16} />, href: "/drafts", count: folderMap.get("drafts")?.count, shortcut: ["G", "D"] },
      { label: "Sent", icon: <Send size={16} />, href: "/sent", shortcut: ["G", "E"] },
    ],
  },
  {
    label: "Organize",
    items: [
      { label: "Archive", icon: <Archive size={16} />, href: "/archive", shortcut: ["G", "A"] },
      { label: "Trash", icon: <Trash2 size={16} />, href: "/trash", shortcut: ["G", "T"] },
      { label: "Spam", icon: <ShieldAlert size={16} />, href: "/spam", shortcut: ["G", "B"] },
      { label: "Notes", icon: <StickyNote size={16} />, href: "/notes", shortcut: ["G", "N"] },
    ],
  },
];

const primaryAction = {
  label: "Compose",
  icon: <PenSquare size={16} />,
  href: "/compose",
};

interface InboxLayoutProps {
  contentClassName?: string;
}

export function InboxLayout({ contentClassName }: InboxLayoutProps) {
  return (
    <AppLayout
      primaryAction={primaryAction}
      groups={groups}
      contentClassName={contentClassName}
    />
  );
}
