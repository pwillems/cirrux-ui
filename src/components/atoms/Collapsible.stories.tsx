import { useState } from "react";
import type { Story } from "@ladle/react";
import { Collapsible } from "./Collapsible";
import { Input } from "../ui/Input";

export const Default: Story = () => (
  <div className="w-80">
    <Collapsible label="Advanced">
      <Input label="Server URL" placeholder="https://api.example.com" type="url" />
    </Collapsible>
  </div>
);

export const DefaultOpen: Story = () => (
  <div className="w-80">
    <Collapsible label="Advanced" defaultOpen>
      <Input label="Server URL" placeholder="https://api.example.com" type="url" />
    </Collapsible>
  </div>
);

export const Controlled: Story = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-80 flex flex-col gap-4">
      <p className="text-sm text-gray-500">Open: {open ? "yes" : "no"}</p>
      <Collapsible label="More options" open={open} onOpenChange={setOpen}>
        <div className="flex flex-col gap-3">
          <Input label="Custom field" placeholder="Value..." />
          <Input label="Another field" placeholder="Value..." />
        </div>
      </Collapsible>
    </div>
  );
};
