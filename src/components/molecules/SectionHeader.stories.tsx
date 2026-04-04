import type { Story } from "@ladle/react";
import { Shield } from "lucide-react";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import { SectionHeader } from "./SectionHeader";

export const Default: Story = () => (
  <SectionHeader title="Profile information" />
);

export const WithDescription: Story = () => (
  <SectionHeader
    title="Two-factor authentication"
    description="Add an extra layer of security to your account."
  />
);

export const WithIcon: Story = () => (
  <SectionHeader
    icon={<Shield size={16} />}
    title="Security"
    description="Manage your account security settings."
  />
);

export const WithTrailing: Story = () => (
  <SectionHeader
    title="Active sessions"
    description="Devices currently signed in to your account."
    trailing={<Badge variant="success">3 active</Badge>}
  />
);

export const WithAction: Story = () => (
  <SectionHeader
    icon={<Shield size={16} />}
    title="Two-factor authentication"
    description="Add an extra layer of security to your account."
    trailing={<Button size="sm">Enable</Button>}
  />
);
