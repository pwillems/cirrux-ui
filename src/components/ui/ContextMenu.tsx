import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export interface ContextMenuItem {
  label: string;
  icon: React.ReactNode;
  shortcut?: string;
  onClick?: () => void;
  separator?: never;
}

export interface ContextMenuSeparator {
  separator: true;
}

interface ContextMenuProps {
  x: number;
  y: number;
  items: (ContextMenuItem | ContextMenuSeparator)[];
  onClose: () => void;
}

export function ContextMenu({ x, y, items, onClose }: ContextMenuProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        onClose();
      }
    }
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleKey);
    };
  }, [onClose]);

  // Keep menu within viewport
  useEffect(() => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    if (rect.right > window.innerWidth) {
      ref.current.style.left = `${x - rect.width}px`;
    }
    if (rect.bottom > window.innerHeight) {
      ref.current.style.top = `${y - rect.height}px`;
    }
  }, [x, y]);

  return createPortal(
    <div
      ref={ref}
      className="fixed z-50 min-w-[200px] rounded-lg border border-gray-200 bg-surface py-1.5 shadow-lg"
      style={{ top: y, left: x }}
    >
      {items.map((item, i) =>
        "separator" in item ? (
          <div key={i} className="my-1.5 border-t border-gray-100" />
        ) : (
          <button
            key={i}
            type="button"
            onClick={() => {
              item.onClick?.();
              onClose();
            }}
            className="flex w-full items-center gap-3 px-3 py-1.5 text-sm text-gray-700 transition-colors hover:bg-gray-50 cursor-pointer"
          >
            <span className="flex w-4 items-center justify-center text-gray-400">
              {item.icon}
            </span>
            <span className="flex-1 text-left">{item.label}</span>
            {item.shortcut && (
              <span className="ml-4 text-xs text-gray-400">{item.shortcut}</span>
            )}
          </button>
        )
      )}
    </div>,
    document.body
  );
}
