import type { Story } from "@ladle/react";
import { PageTitle } from "./PageTitle";

export const Default: Story = () => <PageTitle>Settings</PageTitle>;

export const LongTitle: Story = () => (
  <PageTitle>Workspace & Organization Settings</PageTitle>
);
