import type { Story } from "@ladle/react";
import { Inbox, Search } from "lucide-react";
import { Button } from "../ui/Button";
import { EmptyState } from "../ui/EmptyState";

export const TitleOnly: Story = () => <EmptyState title="No results found" />;

export const WithDescription: Story = () => (
  <EmptyState
    title="Your inbox is empty"
    description="New emails will appear here as they arrive."
  />
);

export const WithIcon: Story = () => (
  <EmptyState
    icon={<Inbox size={32} />}
    title="Your inbox is empty"
    description="New emails will appear here as they arrive."
  />
);

export const WithAction: Story = () => (
  <EmptyState
    icon={<Search size={32} />}
    title="No results found"
    description="Try adjusting your search terms or filters."
    action={<Button variant="secondary">Clear filters</Button>}
  />
);
