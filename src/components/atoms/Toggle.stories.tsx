import { useState } from "react";
import type { Story } from "@ladle/react";
import { Toggle } from "../ui/Toggle";

function ControlledToggle(props: Omit<React.ComponentProps<typeof Toggle>, "checked" | "onChange">) {
  const [checked, setChecked] = useState(false);
  return <Toggle {...props} checked={checked} onChange={setChecked} />;
}

export const Default: Story = () => <ControlledToggle />;

export const WithLabel: Story = () => (
  <ControlledToggle label="Email notifications" />
);

export const WithDescription: Story = () => (
  <ControlledToggle
    label="Marketing emails"
    description="Receive updates about new features and offers."
  />
);

export const Disabled: Story = () => (
  <Toggle checked={false} onChange={() => {}} label="Disabled toggle" disabled />
);

export const DisabledChecked: Story = () => (
  <Toggle checked={true} onChange={() => {}} label="Disabled checked" disabled />
);
