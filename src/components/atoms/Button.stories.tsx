import type { Story } from "@ladle/react";
import { Save, Trash2 } from "lucide-react";
import { Button } from "../ui/Button";

export const Primary: Story = () => (
  <Button variant="primary">Save changes</Button>
);

export const Secondary: Story = () => (
  <Button variant="secondary">Cancel</Button>
);

export const Ghost: Story = () => <Button variant="ghost">Dismiss</Button>;

export const Danger: Story = () => (
  <Button variant="danger">Delete account</Button>
);

export const WithIcon: Story = () => (
  <div className="flex gap-2">
    <Button variant="primary" icon={<Save size={14} />}>
      Save
    </Button>
    <Button variant="danger" icon={<Trash2 size={14} />}>
      Delete
    </Button>
  </div>
);

export const Sizes: Story = () => (
  <div className="flex items-center gap-2">
    <Button size="sm">Small</Button>
    <Button size="md">Medium</Button>
    <Button size="lg">Large</Button>
  </div>
);

export const Disabled: Story = () => (
  <Button variant="primary" disabled>
    Unavailable
  </Button>
);

export const AllVariants: Story = () => (
  <div className="flex flex-wrap gap-2">
    <Button variant="primary">Primary</Button>
    <Button variant="secondary">Secondary</Button>
    <Button variant="ghost">Ghost</Button>
    <Button variant="danger">Danger</Button>
  </div>
);
