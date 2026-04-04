interface KbdShortcutProps {
  keys: string[];
}

export function KbdShortcut({ keys }: KbdShortcutProps) {
  return (
    <span className="flex items-center gap-1 rounded-md border border-gray-200 bg-white px-1 py-1 text-xs text-semibold">
      {keys.map((key, index) => (
        <span key={index} className="flex items-center gap-0.5">
          {index > 0 && <span className="font-semibold">then</span>}
          <kbd className="rounded border border-gray-200 bg-white px-1 py-px font-sans text-xs font-bold leading-tight shadow-[0_1px_0_0_rgba(0,0,0,0.1)]">
            {key}
          </kbd>
        </span>
      ))}
    </span>
  );
}
