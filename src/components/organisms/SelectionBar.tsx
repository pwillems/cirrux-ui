import { type ReactNode, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { KbdShortcut } from "../ui/KbdShortcut";

export interface SelectionBarAction {
  icon: ReactNode;
  label: string;
  shortcut?: string[];
  onClick: () => void;
}

interface ActionButtonProps {
  action: SelectionBarAction;
}

function ActionButton({ action }: ActionButtonProps) {
  const [visible, setVisible] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  function show() {
    timerRef.current = setTimeout(() => setVisible(true), 500);
  }

  function hide() {
    if (timerRef.current) clearTimeout(timerRef.current);
    setVisible(false);
  }

  return (
    <div className="relative" onMouseEnter={show} onMouseLeave={hide}>
      <button
        type="button"
        aria-label={action.label}
        onClick={action.onClick}
        className="flex h-8 w-8 items-center justify-center rounded-md text-gray-300 transition-colors hover:bg-white/10 hover:text-white cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
      >
        {action.icon}
      </button>
      {visible && action.shortcut && (
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-50 pointer-events-none whitespace-nowrap">
          <KbdShortcut keys={action.shortcut} />
        </div>
      )}
    </div>
  );
}

interface SelectionBarProps {
  count: number;
  actions: SelectionBarAction[];
  onClose: () => void;
}

export function SelectionBar({ count, actions, onClose }: SelectionBarProps) {
  return createPortal(
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[9999]">
      <div className="flex items-center gap-1 rounded-xl bg-gray-900 px-4 py-1.5 shadow-lg shadow-black/20">
        {/* Count */}
        <span className="text-sm font-medium text-white pr-2 select-none">
          {count} selected
        </span>

        <div className="w-px h-5 bg-white/20 mx-1" />

        {/* Actions */}
        <div className="flex items-center gap-0.5">
          {actions.map((action) => (
            <ActionButton key={action.label} action={action} />
          ))}
        </div>

        <div className="w-px h-5 bg-white/20 mx-1" />

        {/* Close */}
        <button
          type="button"
          aria-label="Clear selection"
          onClick={onClose}
          className="flex h-8 w-8 items-center justify-center rounded-md text-gray-300 transition-colors hover:bg-white/10 hover:text-white cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
        >
          <X size={15} />
        </button>
      </div>
    </div>,
    document.body
  );
}
