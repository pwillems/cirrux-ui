import { Button } from "../../../components/atoms";
import { Toggle } from "../../../components/atoms";
import { Badge } from "../../../components/atoms";
import { CardSection } from "../../../components/organisms/CardSection";
import { PageHeader } from "../../../components/molecules/PageHeader";
import { ListItem } from "../../../components/molecules/ListItem";
import { IconButton } from "../../../components/atoms/IconButton";
import { HardDrive, Download, Plus } from "lucide-react";
import { useState } from "react";

const backups = [
  { id: "b1", date: "Mar 28, 2026", size: "142 MB", status: "completed" },
  { id: "b2", date: "Mar 21, 2026", size: "138 MB", status: "completed" },
  { id: "b3", date: "Mar 14, 2026", size: "135 MB", status: "completed" },
];

export function BackupsSection() {
  const [autoBackup, setAutoBackup] = useState(true);

  return (
    <div>
      <PageHeader
        title="Backups"
        action={
          <Button variant="secondary" size="sm" icon={<Plus size={14} />}>
            Create backup
          </Button>
        }
      />

      <div className="flex flex-col gap-6">
        {/* Auto backup */}
        <CardSection>
          <Toggle
            checked={autoBackup}
            onChange={setAutoBackup}
            label="Weekly automatic backups"
            description="Creates a backup of your mailbox data every week"
          />
        </CardSection>

        {/* Backup list */}
        <div className="flex flex-col gap-3">
          {backups.map((backup) => (
            <ListItem
              key={backup.id}
              leading={
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-gray-100">
                  <HardDrive size={16} className="text-gray-500" />
                </div>
              }
              title={backup.date}
              subtitle={backup.size}
              trailing={
                <>
                  <Badge variant="success">Completed</Badge>
                  <IconButton icon={<Download size={14} />} label="Download backup" />
                </>
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
}
