import type { Story } from "@ladle/react";
import { KbdShortcut } from "../ui/KbdShortcut";

export const SingleKey: Story = () => <KbdShortcut keys={["C"]} />;

export const Sequence: Story = () => <KbdShortcut keys={["G", "I"]} />;

export const ModifierKey: Story = () => <KbdShortcut keys={["⌘", "K"]} />;

export const AllExamples: Story = () => (
  <div className="flex flex-col gap-3">
    <div className="flex items-center gap-3 text-sm text-gray-500">
      <span className="w-24">Compose</span>
      <KbdShortcut keys={["C"]} />
    </div>
    <div className="flex items-center gap-3 text-sm text-gray-500">
      <span className="w-24">Go to inbox</span>
      <KbdShortcut keys={["G", "I"]} />
    </div>
    <div className="flex items-center gap-3 text-sm text-gray-500">
      <span className="w-24">Command</span>
      <KbdShortcut keys={["⌘", "K"]} />
    </div>
  </div>
);
