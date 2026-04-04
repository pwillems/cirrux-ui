import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Forward,
  Link2,
  Mail,
  Monitor,
  Moon,
  PenSquare,
  Reply,
  Search,
  SquareDashedMousePointer,
  Sun,
} from "lucide-react";
import { CommandItem } from "../molecules/CommandItem";
import { useTheme } from "../theme/ThemeProvider";

interface CommandAction {
  id: string;
  label: string;
  icon: React.ReactNode;
  shortcut?: string[];
  onAction: () => void;
}

interface CommandGroup {
  label: string;
  items: CommandAction[];
}

interface CommandPaletteProps {
  open: boolean;
  onClose: () => void;
}

export function CommandPalette({ open, onClose }: CommandPaletteProps) {
  const navigate = useNavigate();
  const { setTheme } = useTheme();
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const groups = useMemo<CommandGroup[]>(
    () => [
      {
        label: "Mail",
        items: [
          {
            id: "compose",
            label: "Compose",
            icon: <PenSquare size={15} />,
            shortcut: ["C"],
            onAction: () => navigate("/compose"),
          },
          {
            id: "reply",
            label: "Reply",
            icon: <Reply size={15} />,
            shortcut: ["R"],
            onAction: () => {},
          },
          {
            id: "forward",
            label: "Forward",
            icon: <Forward size={15} />,
            shortcut: ["F"],
            onAction: () => {},
          },
        ],
      },
      {
        label: "Thread",
        items: [
          {
            id: "copy-link",
            label: "Copy thread link",
            icon: <Link2 size={15} />,
            onAction: () => {},
          },
          {
            id: "select",
            label: "Select thread",
            icon: <SquareDashedMousePointer size={15} />,
            shortcut: ["X"],
            onAction: () => {},
          },
          {
            id: "open",
            label: "Open",
            icon: <Mail size={15} />,
            shortcut: ["Enter"],
            onAction: () => {},
          },
        ],
      },
      {
        label: "Theme",
        items: [
          {
            id: "theme-light",
            label: "Light",
            icon: <Sun size={15} />,
            onAction: () => setTheme("light"),
          },
          {
            id: "theme-dark",
            label: "Dark",
            icon: <Moon size={15} />,
            onAction: () => setTheme("dark"),
          },
          {
            id: "theme-system",
            label: "System",
            icon: <Monitor size={15} />,
            onAction: () => setTheme("system"),
          },
        ],
      },
    ],
    [navigate, setTheme]
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return groups;
    return groups
      .map((g) => ({
        ...g,
        items: g.items.filter((item) => item.label.toLowerCase().includes(q)),
      }))
      .filter((g) => g.items.length > 0);
  }, [query, groups]);

  const flatItems = useMemo(
    () => filtered.flatMap((g) => g.items),
    [filtered]
  );

  // Reset state when opening
  useEffect(() => {
    if (!open) return;
    setQuery("");
    setActiveIndex(0);
    // Defer focus so the input is mounted
    requestAnimationFrame(() => inputRef.current?.focus());
  }, [open]);

  // Reset active index when filtered list changes
  useEffect(() => {
    setActiveIndex(0);
  }, [query]);

  useEffect(() => {
    if (!open) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setActiveIndex((i) => Math.min(i + 1, flatItems.length - 1));
        return;
      }
      if (e.key === "ArrowUp") {
        e.preventDefault();
        setActiveIndex((i) => Math.max(i - 1, 0));
        return;
      }
      if (e.key === "Enter") {
        e.preventDefault();
        const item = flatItems[activeIndex];
        if (item) {
          item.onAction();
          onClose();
        }
      }
    };

    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [open, onClose, flatItems, activeIndex]);

  if (!open) return null;

  let runningIndex = 0;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-50 bg-black/20"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Palette card */}
      <div
        role="dialog"
        aria-label="Command palette"
        className="fixed left-1/2 top-[18%] z-50 w-[calc(100%-2rem)] max-w-lg -translate-x-1/2 overflow-hidden rounded-xl border border-gray-100 bg-surface shadow-xl"
      >
        {/* Search input */}
        <div className="flex items-center gap-3 border-b border-gray-100 px-4">
          <Search size={16} className="shrink-0 text-gray-400" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search actions..."
            className="flex-1 border-0 bg-transparent py-3.5 text-sm text-gray-900 placeholder:text-gray-400 !outline-none"
          />
        </div>

        {/* Results */}
        <div className="max-h-72 overflow-y-auto py-1">
          {filtered.length === 0 ? (
            <p className="px-4 py-8 text-center text-sm text-gray-400">
              No actions found
            </p>
          ) : (
            filtered.map((group) => (
              <div key={group.label}>
                <div className="px-4 pb-1 pt-3 text-xs font-medium text-gray-400">
                  {group.label}
                </div>
                {group.items.map((item) => {
                  const index = runningIndex++;
                  return (
                    <CommandItem
                      key={item.id}
                      icon={item.icon}
                      label={item.label}
                      shortcut={item.shortcut}
                      active={activeIndex === index}
                      onClick={() => {
                        item.onAction();
                        onClose();
                      }}
                    />
                  );
                })}
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}
