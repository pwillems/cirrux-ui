import { KbdShortcut } from "../ui/KbdShortcut";

interface CommandItemProps {
  icon: React.ReactNode;
  label: string;
  shortcut?: string[];
  active?: boolean;
  onClick?: () => void;
}

export function CommandItem({
  icon,
  label,
  shortcut,
  active,
  onClick,
}: CommandItemProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`group flex w-full items-center gap-3 px-4 py-1.5 text-sm transition-colors ${
        active ? "font-medium text-gray-900" : "text-gray-500 hover:text-gray-700"
      }`}
    >
      <span className="shrink-0 opacity-70">{icon}</span>
      <span className="flex-1 text-left">{label}</span>
      {shortcut && (
        <span
          className={`shrink-0 transition-opacity ${
            active ? "opacity-100" : "opacity-0 group-hover:opacity-100"
          }`}
        >
          <KbdShortcut keys={shortcut} />
        </span>
      )}
    </button>
  );
}
