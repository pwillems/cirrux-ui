import { Badge } from "../../../components/atoms";
import { Button } from "../../../components/atoms";
import { Toggle } from "../../../components/atoms";
import { CardSection } from "../../../components/organisms/CardSection";
import { PageTitle } from "../../../components/atoms/PageTitle";
import { ListItem } from "../../../components/molecules/ListItem";
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
      <PageTitle>Syncs</PageTitle>

      <div className="mt-6 flex flex-col gap-6">
        {/* Auto-sync toggle */}
        <CardSection>
          <Toggle
            checked={autoSync}
            onChange={setAutoSync}
            label="Automatic sync"
            description="Automatically sync contacts and calendar in the background"
          />
        </CardSection>

        {/* Sync accounts */}
        <div className="flex flex-col gap-3">
          {syncAccounts.map((sync) => (
            <ListItem
              key={sync.id}
              leading={
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-gray-100">
                  <RefreshCw size={16} className="text-gray-500" />
                </div>
              }
              title={sync.name}
              subtitle={`Last synced ${sync.lastSync}`}
              trailing={
                <>
                  <Badge variant="success">Connected</Badge>
                  <Button variant="ghost" size="sm">Disconnect</Button>
                </>
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
}
