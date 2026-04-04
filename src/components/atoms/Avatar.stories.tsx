import type { Story } from "@ladle/react";
import { Avatar } from "./Avatar";

export const Small: Story = () => <Avatar initials="KA" size="sm" />;

export const Medium: Story = () => <Avatar initials="KA" size="md" />;

export const AllSizes: Story = () => (
  <div className="flex items-center gap-4">
    <Avatar initials="KA" size="sm" />
    <Avatar initials="KA" size="md" />
  </div>
);
