import type { Story } from "@ladle/react";
import { Button } from "../ui/Button";
import { PageHeader } from "./PageHeader";

export const Default: Story = () => (
  <div className="p-6">
    <PageHeader title="Settings" />
  </div>
);

export const WithAction: Story = () => (
  <div className="p-6">
    <PageHeader
      title="Mailboxes"
      action={<Button variant="primary">Add mailbox</Button>}
    />
  </div>
);
