import type { Story } from "@ladle/react";
import { ThemeSwitcher } from "./ThemeSwitcher";

// ThemeProvider is already applied globally via .ladle/provider.tsx

export const Default: Story = () => (
  <div className="flex justify-end p-4">
    <ThemeSwitcher />
  </div>
);
