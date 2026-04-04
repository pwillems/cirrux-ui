import { useState } from "react";
import type { Story } from "@ladle/react";
import { Archive, Trash2 } from "lucide-react";
import { Button } from "../ui/Button";
import { UndoToast } from "../ui/UndoToast";

function ToastDemo({
  extraActionLabel,
}: {
  extraActionLabel?: string;
}) {
  const [visible, setVisible] = useState(false);
  return (
    <div className="flex flex-col items-center gap-4 p-8">
      <Button variant="secondary" onClick={() => setVisible(true)}>
        Show toast
      </Button>
      {visible && (
        <UndoToast
          icon={<Archive size={16} />}
          message="Email archived"
          onUndo={() => {}}
          onDismiss={() => setVisible(false)}
          extraActionLabel={extraActionLabel}
          onExtraAction={() => {}}
        />
      )}
    </div>
  );
}

export const Default: Story = () => <ToastDemo />;

export const WithExtraAction: Story = () => (
  <ToastDemo extraActionLabel="View archive" />
);

export const DeleteVariant: Story = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="flex flex-col items-center gap-4 p-8">
      <Button variant="danger" onClick={() => setVisible(true)}>
        Delete email
      </Button>
      {visible && (
        <UndoToast
          icon={<Trash2 size={16} />}
          message="Email deleted"
          onUndo={() => {}}
          onDismiss={() => setVisible(false)}
        />
      )}
    </div>
  );
};
