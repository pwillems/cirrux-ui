import { Badge } from "../../../components/ui/Badge";
import { Button } from "../../../components/ui/Button";
import { Toggle } from "../../../components/ui/Toggle";
import { RefreshCw } from "lucide-react";
import { useState } from "react";

const syncAccounts = [
  { id: "s1", name: "Google Contacts", status: "connected", lastSync: "2 hours ago" },
  { id: "s2", name: "Google Calendar", status: "connected", lastSync: "1 hour ago" },
];

export function SyncsSection() {
  const [autoSync, setAutoSync] = useState(true);

  return (
    <div>
      <h1 className="mb-6 text-2xl font-semibold tracking-tight text-gray-900">
        Syncs
      </h1>

      {/* Auto-sync toggle */}
      <div className="mb-6 rounded-lg shadow-card bg-white p-6">
        <Toggle
          checked={autoSync}
          onChange={setAutoSync}
          label="Automatic sync"
          description="Automatically sync contacts and calendar in the background"
        />
      </div>

      {/* Sync accounts */}
      <div className="flex flex-col gap-3">
        {syncAccounts.map((sync) => (
          <div
            key={sync.id}
            className="flex items-center justify-between rounded-lg shadow-card bg-white px-5 py-4"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-md bg-gray-100">
                <RefreshCw size={16} className="text-gray-500" />
              </div>
              <div>
                <p className="text-base font-medium text-gray-900">
                  {sync.name}
                </p>
                <p className="text-sm text-gray-400">
                  Last synced {sync.lastSync}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Badge variant="success">Connected</Badge>
              <Button variant="ghost" size="sm">
                Disconnect
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
