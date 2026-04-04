import { useState } from "react";
import type { Story } from "@ladle/react";
import { MemoryRouter } from "react-router-dom";
import { Button } from "../ui/Button";
import { CommandPalette } from "./CommandPalette";

function CommandPaletteDemo({ defaultOpen = false }: { defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <MemoryRouter>
      <div className="flex h-64 items-center justify-center">
        <Button variant="secondary" onClick={() => setOpen(true)}>
          Open command palette
        </Button>
        <CommandPalette open={open} onClose={() => setOpen(false)} />
      </div>
    </MemoryRouter>
  );
}

export const Default: Story = () => <CommandPaletteDemo />;

export const Open: Story = () => <CommandPaletteDemo defaultOpen />;
