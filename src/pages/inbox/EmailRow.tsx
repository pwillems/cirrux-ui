import { useState, useCallback } from "react";
import {
  Archive,
  Check,
  Clock,
  Eye,
  EyeOff,
  FolderInput,
  ShieldAlert,
  Star,
  Trash2,
} from "lucide-react";
import { Link } from "react-router-dom";
import { ContextMenu } from "../../components/ui/ContextMenu";
import type { Email } from "../../data/mockData";

interface EmailRowProps {
  email: Email;
  selected: boolean;
  checked: boolean;
  hasChecked?: boolean;
  onSelect: (id: string) => void;
  onToggleChecked: (id: string) => void;
  onArchive: (id: string) => void;
  onDelete: (id: string) => void;
}

export function EmailRow({
  email,
  selected,
  checked,
  hasChecked = false,
  onSelect,
  onToggleChecked,
  onArchive,
  onDelete,
}: EmailRowProps) {
  const [contextMenu, setContextMenu] = useState<{
    x: number;
    y: number;
  } | null>(null);

  const handleContextMenu = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      onSelect(email.id);
      setContextMenu({ x: e.clientX, y: e.clientY });
    },
    [email.id, onSelect]
  );

  const contextMenuItems = [
    {
      label: "Archive",
      icon: <Archive size={15} />,
      shortcut: "E",
      onClick: () => onArchive(email.id),
    },
    { label: "Snooze", icon: <Clock size={15} />, shortcut: "H" },
    { label: "Star", icon: <Star size={15} />, shortcut: "S" },
    { separator: true as const },
    {
      label: email.read ? "Mark as unread" : "Mark as read",
      icon: email.read ? <EyeOff size={15} /> : <Eye size={15} />,
      shortcut: "U",
    },
    { label: "Mark as spam", icon: <ShieldAlert size={15} />, shortcut: "!" },
    { label: "Move to…", icon: <FolderInput size={15} />, shortcut: "V" },
    { separator: true as const },
    {
      label: "Trash",
      icon: <Trash2 size={15} />,
      shortcut: "#",
      onClick: () => onDelete(email.id),
    },
  ];

  const senderDisplay = email.threadParticipants
    ? email.threadParticipants
        .map((participant) =>
          participant === "me" ? "me" : participant.split(" ")[0]
        )
        .join(", ")
    : email.from.name;

  return (
    <>
      <div
        id={`email-row-${email.id}`}
        aria-selected={selected}
        onMouseEnter={() => onSelect(email.id)}
        onFocusCapture={() => onSelect(email.id)}
        onContextMenu={handleContextMenu}
        className={`
          group relative flex items-center gap-3 px-3 py-3 md:gap-4 md:px-4 md:py-3.5
          transition-all duration-150
          ${selected ? "bg-accent-muted" : "bg-surface hover:bg-gray-50/80 md:hover:translate-x-0.5"}
        `}
      >
        {/* Full-row click target */}
        <Link
          to={`/thread/${email.id}`}
          className="absolute inset-0"
          tabIndex={-1}
          aria-hidden="true"
          onMouseDown={() => onSelect(email.id)}
        />

        {selected && (
          <div className="absolute inset-y-0 left-0 w-[3px] bg-accent" />
        )}

        {/* Unread indicator / checkbox */}
        <button
          type="button"
          role="checkbox"
          aria-checked={checked}
          aria-label={checked ? "Deselect email" : "Select email"}
          onClick={() => {
            onSelect(email.id);
            onToggleChecked(email.id);
          }}
          className="relative z-10 flex h-4.5 w-4.5 shrink-0 cursor-pointer items-center justify-center rounded-[4px] text-gray-900 max-md:hidden"
        >
          {checked ? (
            <span className="flex h-4 w-4 items-center justify-center rounded-[4px] border border-black bg-black text-white">
              <Check size={11} strokeWidth={2.25} />
            </span>
          ) : hasChecked ? (
            <span className="flex h-4 w-4 rounded-[4px] border border-gray-300" />
          ) : (
            <>
              {!email.read && (
                <div className="h-1.5 w-1.5 rounded-full bg-gray-400 transition-opacity group-hover:opacity-0 group-focus-within:opacity-0" />
              )}
              <div
                className={`
                  absolute top-1/2 left-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-[4px] border border-gray-300
                  transition-opacity group-hover:opacity-100 group-focus-within:opacity-100
                  ${email.read ? "opacity-0" : "opacity-0"}
                `}
              />
            </>
          )}
        </button>

        {/* Mobile: unread dot only */}
        {!email.read && (
          <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400 md:hidden" />
        )}

        {/* Desktop content — single row */}
        <div className="hidden md:flex min-w-0 flex-1 items-center gap-4 pointer-events-none">
          {/* Sender */}
          <div className="w-36 shrink-0 flex items-baseline gap-1 min-w-0">
            <span
              className={`
                truncate text-base
                ${
                  selected
                    ? "font-medium text-gray-900"
                    : email.read
                      ? "text-gray-500"
                      : "font-medium text-gray-900"
                }
              `}
            >
              {senderDisplay}
            </span>
            {email.threadMessageCount && email.threadMessageCount > 1 && (
              <span className={`shrink-0 text-sm ${selected ? "text-gray-600" : "text-gray-400"}`}>
                {email.threadMessageCount}
              </span>
            )}
          </div>

          {/* Subject + preview */}
          <div className="flex min-w-0 flex-1 items-baseline gap-2">
            <span
              className={`
                truncate text-base
                ${
                  selected
                    ? "text-gray-900"
                    : email.read
                      ? "text-gray-500"
                      : "font-medium text-gray-900"
                }
              `}
            >
              {email.subject}
            </span>
            <span
              className={`
                truncate text-sm
                ${selected ? "text-gray-600" : "text-gray-400"}
              `}
            >
              {email.preview}
            </span>
          </div>

          {/* Date */}
          <span className="shrink-0 min-w-22 text-right text-sm text-gray-400 transition-opacity duration-150 group-hover:opacity-0">
            {email.time || email.date}
          </span>
        </div>

        {/* Mobile content — stacked */}
        <div className="flex min-w-0 flex-1 flex-col gap-0.5 pointer-events-none md:hidden">
          {/* Top row: sender + date */}
          <div className="flex items-baseline justify-between gap-2">
            <div className="flex items-baseline gap-1 min-w-0">
              <span
                className={`truncate text-base ${email.read ? "text-gray-500" : "font-medium text-gray-900"}`}
              >
                {senderDisplay}
              </span>
              {email.threadMessageCount && email.threadMessageCount > 1 && (
                <span className="shrink-0 text-sm text-gray-400">
                  {email.threadMessageCount}
                </span>
              )}
            </div>
            <span className="shrink-0 text-sm text-gray-400">
              {email.time || email.date}
            </span>
          </div>
          {/* Subject */}
          <span
            className={`truncate text-sm ${email.read ? "text-gray-500" : "text-gray-900"}`}
          >
            {email.subject}
          </span>
        </div>

        {/* Hover action icons — desktop only */}
        <div className="absolute right-4 z-10 hidden md:flex items-center gap-0.5 opacity-0 transition-opacity duration-150 group-hover:opacity-100">
          {[
            {
              icon: Archive,
              label: "Archive",
              onClick: () => onArchive(email.id),
            },
            {
              icon: Trash2,
              label: "Delete",
              onClick: () => onDelete(email.id),
            },
            {
              icon: Clock,
              label: "Snooze",
            },
          ].map(({ icon: Icon, label, onClick }) => (
            <button
              key={label}
              type="button"
              className={`
                flex h-7 w-7 items-center justify-center rounded-md transition-colors
                ${
                  onClick
                    ? "cursor-pointer text-gray-400 hover:bg-gray-200/60 hover:text-gray-700"
                    : "cursor-default text-gray-300"
                }
              `}
              aria-label={label}
              onClick={(event) => {
                event.preventDefault();
                event.stopPropagation();
                onClick?.();
              }}
            >
              <Icon size={14} />
            </button>
          ))}
        </div>
      </div>

      {contextMenu && (
        <ContextMenu
          x={contextMenu.x}
          y={contextMenu.y}
          items={contextMenuItems}
          onClose={() => setContextMenu(null)}
        />
      )}
    </>
  );
}
