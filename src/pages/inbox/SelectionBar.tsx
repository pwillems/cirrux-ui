import {
  Archive,
  Clock,
  Forward,
  Star,
  Trash2,
  MailOpen,
  X,
} from "lucide-react";
import { createPortal } from "react-dom";

interface SelectionBarProps {
  count: number;
  onClear: () => void;
}

const actions = [
  { icon: Archive, label: "Archive" },
  { icon: Trash2, label: "Delete" },
  { icon: Clock, label: "Snooze" },
  { icon: Star, label: "Star" },
  { icon: MailOpen, label: "Mark as read" },
  { icon: Forward, label: "Forward" },
];

export function SelectionBar({ count, onClear }: SelectionBarProps) {
  if (typeof document === "undefined") {
    return null;
  }

  return createPortal(
    <div className="pointer-events-none fixed inset-x-0 bottom-8 z-30 flex justify-center px-4">
      <div className="pointer-events-auto flex items-center gap-1 rounded-2xl border border-black/40 bg-[#181512] px-4 py-2.5 text-white shadow-[0_18px_40px_rgba(0,0,0,0.32)]">
        <span className="pr-2 text-sm font-medium">
          {count} selected
        </span>

        <div className="mx-1 h-4 w-px bg-white/16" />

        {actions.map(({ icon: Icon, label }) => (
          <button
            key={label}
            type="button"
            className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-md transition-colors hover:bg-white/10"
            aria-label={label}
          >
            <Icon size={16} />
          </button>
        ))}

        <div className="mx-1 h-4 w-px bg-white/16" />

        <button
          type="button"
          onClick={onClear}
          className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-md transition-colors hover:bg-white/10"
          aria-label="Clear selection"
        >
          <X size={16} />
        </button>
      </div>
    </div>,
    document.body
  );
}
