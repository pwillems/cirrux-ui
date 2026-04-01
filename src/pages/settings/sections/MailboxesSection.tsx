import { Button } from "../../../components/ui/Button";
import { Badge } from "../../../components/ui/Badge";
import { mailboxes } from "../../../data/mockData";
import { Mail, Plus, RefreshCw } from "lucide-react";

const statusBadge = (status: string) => {
  switch (status) {
    case "connected":
      return <Badge variant="success">Connected</Badge>;
    case "error":
      return <Badge variant="error">Error</Badge>;
    case "syncing":
      return <Badge variant="warning">Syncing</Badge>;
    default:
      return <Badge>{status}</Badge>;
  }
};

export function MailboxesSection() {
  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-semibold tracking-tight text-gray-900">
          Mailboxes
        </h1>
        <Button variant="secondary" size="sm" icon={<Plus size={14} />}>
          Add mailbox
        </Button>
      </div>

      <div className="flex flex-col gap-3">
        {mailboxes.map((mb) => (
          <div
            key={mb.id}
            className="flex items-center justify-between rounded-lg shadow-card bg-surface px-5 py-4"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-md bg-gray-100">
                <Mail size={16} className="text-gray-500" />
              </div>
              <div>
                <p className="text-base font-medium text-gray-900">
                  {mb.email}
                </p>
                <p className="text-sm text-gray-400">
                  {mb.provider} — {mb.lastSync}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              {statusBadge(mb.status)}
              <button
                className="flex h-8 w-8 items-center justify-center rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors cursor-pointer"
                aria-label="Sync now"
              >
                <RefreshCw size={14} />
              </button>
              <Button variant="ghost" size="sm">
                Settings
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
