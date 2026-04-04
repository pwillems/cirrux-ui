import { useState } from "react";
import type { Story } from "@ladle/react";
import { Archive, Reply, Star, Trash2 } from "lucide-react";
import { ContextMenu } from "../ui/ContextMenu";

function ContextMenuDemo() {
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null);

  return (
    <div className="p-8">
      <div
        onContextMenu={(e) => {
          e.preventDefault();
          setPos({ x: e.clientX, y: e.clientY });
        }}
        className="flex h-24 items-center justify-center rounded-lg border border-dashed border-gray-200 text-sm text-gray-400 select-none cursor-context-menu"
      >
        Right-click anywhere here
      </div>
      {pos && (
        <ContextMenu
          x={pos.x}
          y={pos.y}
          onClose={() => setPos(null)}
          items={[
            { label: "Reply", icon: <Reply size={14} />, shortcut: "R" },
            { label: "Star", icon: <Star size={14} />, shortcut: "S" },
            { label: "Archive", icon: <Archive size={14} />, shortcut: "E" },
            { separator: true },
            { label: "Delete", icon: <Trash2 size={14} />, shortcut: "⌫" },
          ]}
        />
      )}
    </div>
  );
}

export const Default: Story = () => <ContextMenuDemo />;
