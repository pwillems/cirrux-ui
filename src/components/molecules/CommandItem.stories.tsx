import type { Story } from "@ladle/react";
import { Archive, PenSquare, Reply } from "lucide-react";
import { CommandItem } from "./CommandItem";

export const Default: Story = () => (
  <div className="w-80 rounded-lg border border-gray-100 py-1">
    <CommandItem icon={<PenSquare size={15} />} label="Compose" />
  </div>
);

export const WithShortcut: Story = () => (
  <div className="w-80 rounded-lg border border-gray-100 py-1">
    <CommandItem
      icon={<PenSquare size={15} />}
      label="Compose"
      shortcut={["C"]}
    />
  </div>
);

export const Active: Story = () => (
  <div className="w-80 rounded-lg border border-gray-100 py-1">
    <CommandItem
      icon={<PenSquare size={15} />}
      label="Compose"
      shortcut={["C"]}
      active
    />
  </div>
);

export const List: Story = () => (
  <div className="w-80 rounded-lg border border-gray-100 py-1">
    <CommandItem icon={<PenSquare size={15} />} label="Compose" shortcut={["C"]} active />
    <CommandItem icon={<Reply size={15} />} label="Reply" shortcut={["R"]} />
    <CommandItem icon={<Archive size={15} />} label="Archive" shortcut={["E"]} />
  </div>
);
