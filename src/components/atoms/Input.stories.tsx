import type { Story } from "@ladle/react";
import { Input } from "../ui/Input";

export const Default: Story = () => (
  <div className="w-80">
    <Input placeholder="Enter value..." />
  </div>
);

export const WithLabel: Story = () => (
  <div className="w-80">
    <Input label="Email address" placeholder="you@example.com" type="email" />
  </div>
);

export const WithHint: Story = () => (
  <div className="w-80">
    <Input
      label="Display name"
      placeholder="Kay Anderson"
      hint="This is shown to other users."
    />
  </div>
);

export const WithError: Story = () => (
  <div className="w-80">
    <Input
      label="Email address"
      placeholder="you@example.com"
      value="not-an-email"
      error="Please enter a valid email address."
      onChange={() => {}}
    />
  </div>
);

export const Disabled: Story = () => (
  <div className="w-80">
    <Input label="Email address" value="kay@example.com" disabled onChange={() => {}} />
  </div>
);
