import type { Story } from "@ladle/react";
import { SectionTitle } from "./SectionTitle";

export const Default: Story = () => <SectionTitle>Profile</SectionTitle>;

export const LongTitle: Story = () => (
  <SectionTitle>Two-factor Authentication</SectionTitle>
);
