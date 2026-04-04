import type { Story } from "@ladle/react";
import { Mail } from "lucide-react";
import { Avatar } from "../atoms/Avatar";
import { Button } from "../ui/Button";
import { ListItem } from "./ListItem";

export const Default: Story = () => (
  <div className="w-[480px] p-4">
    <ListItem title="Kay Anderson" subtitle="kay@example.com" />
  </div>
);

export const WithLeading: Story = () => (
  <div className="w-[480px] p-4">
    <ListItem
      leading={<Avatar initials="KA" />}
      title="Kay Anderson"
      subtitle="kay@example.com"
    />
  </div>
);

export const WithTrailing: Story = () => (
  <div className="w-[480px] p-4">
    <ListItem
      leading={<Mail size={16} className="text-gray-400" />}
      title="Primary inbox"
      subtitle="All incoming mail"
      trailing={<Button size="sm">Manage</Button>}
    />
  </div>
);
