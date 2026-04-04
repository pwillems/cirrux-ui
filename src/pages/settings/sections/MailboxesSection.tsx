import { Button } from "../../../components/atoms";
import { Badge } from "../../../components/atoms";
import { PageHeader } from "../../../components/molecules/PageHeader";
import { ListItem } from "../../../components/molecules/ListItem";
import { IconButton } from "../../../components/atoms/IconButton";
import { mailboxes } from "../../../data/mockData";
import { Mail, Plus, RefreshCw } from "lucide-react";

const statusVariant = (
  status: string
): "success" | "error" | "warning" | "default" => {
  if (status === "connected") return "success";
  if (status === "error") return "error";
  if (status === "syncing") return "warning";
  return "default";
};

export function MailboxesSection() {
  return (
    <div>
      <PageHeader
        title="Mailboxes"
        action={
          <Button variant="secondary" size="sm" icon={<Plus size={14} />}>
            Add mailbox
          </Button>
        }
      />

      <div className="flex flex-col gap-3">
        {mailboxes.map((mb) => (
          <ListItem
            key={mb.id}
            leading={
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-gray-100">
                <Mail size={16} className="text-gray-500" />
              </div>
            }
            title={mb.email}
            subtitle={`${mb.provider} — ${mb.lastSync}`}
            trailing={
              <>
                <Badge variant={statusVariant(mb.status)}>
                  {mb.status.charAt(0).toUpperCase() + mb.status.slice(1)}
                </Badge>
                <IconButton icon={<RefreshCw size={14} />} label="Sync now" />
                <Button variant="ghost" size="sm">Settings</Button>
              </>
            }
          />
        ))}
      </div>
    </div>
  );
}
