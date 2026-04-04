import type { Story } from "@ladle/react";
import { Archive, Reply, Star, Trash2 } from "lucide-react";
import { IconButtonGroup } from "./IconButtonGroup";

export const Default: Story = () => (
  <IconButtonGroup
    buttons={[
      { icon: <Reply size={16} />, label: "Reply" },
      { icon: <Archive size={16} />, label: "Archive" },
      { icon: <Star size={16} />, label: "Star" },
    ]}
  />
);

export const Small: Story = () => (
  <IconButtonGroup
    size="sm"
    buttons={[
      { icon: <Reply size={14} />, label: "Reply" },
      { icon: <Archive size={14} />, label: "Archive" },
      { icon: <Trash2 size={14} />, label: "Delete" },
    ]}
  />
);
