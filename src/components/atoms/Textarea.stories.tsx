import type { Story } from "@ladle/react";
import { Textarea } from "../ui/Textarea";

export const Default: Story = () => (
  <div className="w-80">
    <Textarea placeholder="Enter text..." />
  </div>
);

export const WithLabel: Story = () => (
  <div className="w-80">
    <Textarea label="Notes" placeholder="Add a note..." rows={4} />
  </div>
);

export const WithHint: Story = () => (
  <div className="w-80">
    <Textarea
      label="Bio"
      placeholder="Tell us about yourself"
      hint="Keep it under 200 characters."
      rows={3}
    />
  </div>
);

export const WithError: Story = () => (
  <div className="w-80">
    <Textarea
      label="Notes"
      value="Some text here"
      error="This field is required."
      onChange={() => {}}
    />
  </div>
);

export const Disabled: Story = () => (
  <div className="w-80">
    <Textarea
      label="Notes"
      value="Read-only content"
      disabled
      onChange={() => {}}
    />
  </div>
);
