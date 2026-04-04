import type { Story } from "@ladle/react";
import { MemoryRouter } from "react-router-dom";
import { TopBar } from "./TopBar";

export const Default: Story = () => (
  <MemoryRouter initialEntries={["/"]}>
    <TopBar />
  </MemoryRouter>
);

export const SettingsRoute: Story = () => (
  <MemoryRouter initialEntries={["/settings/profile"]}>
    <TopBar />
  </MemoryRouter>
);
