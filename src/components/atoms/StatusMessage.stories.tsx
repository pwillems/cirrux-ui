import type { Story } from "@ladle/react";
import { StatusMessage } from "../ui/StatusMessage";

export const Saving: Story = () => (
  <StatusMessage status="saving">Saving changes…</StatusMessage>
);

export const Success: Story = () => (
  <StatusMessage status="success">Changes saved</StatusMessage>
);

export const Error: Story = () => (
  <StatusMessage status="error">Failed to save</StatusMessage>
);

export const AllStates: Story = () => (
  <div className="flex flex-col gap-3">
    <StatusMessage status="saving">Saving changes…</StatusMessage>
    <StatusMessage status="success">Changes saved</StatusMessage>
    <StatusMessage status="error">Failed to save</StatusMessage>
  </div>
);
