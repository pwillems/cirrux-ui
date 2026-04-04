import type { Story } from "@ladle/react";
import { Badge } from "../ui/Badge";

export const Default: Story = () => <Badge>Draft</Badge>;

export const Success: Story = () => <Badge variant="success">Active</Badge>;

export const Error: Story = () => <Badge variant="error">Failed</Badge>;

export const Warning: Story = () => <Badge variant="warning">Pending</Badge>;

export const AllVariants: Story = () => (
  <div className="flex items-center gap-2">
    <Badge>Default</Badge>
    <Badge variant="success">Success</Badge>
    <Badge variant="error">Error</Badge>
    <Badge variant="warning">Warning</Badge>
  </div>
);
