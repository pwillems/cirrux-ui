import type { Story } from "@ladle/react";
import { Archive, Star, Trash2 } from "lucide-react";
import { IconButton } from "./IconButton";

export const Default: Story = () => (
  <IconButton icon={<Archive size={16} />} label="Archive" />
);

export const Small: Story = () => (
  <IconButton icon={<Archive size={14} />} label="Archive" size="sm" />
);

export const Medium: Story = () => (
  <IconButton icon={<Archive size={16} />} label="Archive" size="md" />
);

export const MultipleIcons: Story = () => (
  <div className="flex items-center gap-1">
    <IconButton icon={<Star size={16} />} label="Star" />
    <IconButton icon={<Archive size={16} />} label="Archive" />
    <IconButton icon={<Trash2 size={16} />} label="Delete" />
  </div>
);
