import { Button } from "../../../components/ui/Button";
import { Toggle } from "../../../components/ui/Toggle";
import { Badge } from "../../../components/ui/Badge";
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
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-semibold tracking-tight text-gray-900">
          Backups
        </h1>
        <Button variant="secondary" size="sm" icon={<Plus size={14} />}>
          Create backup
        </Button>
      </div>

      {/* Auto backup */}
      <div className="mb-6 rounded-lg shadow-card bg-white p-6">
        <Toggle
          checked={autoBackup}
          onChange={setAutoBackup}
          label="Weekly automatic backups"
          description="Creates a backup of your mailbox data every week"
        />
      </div>

      {/* Backup list */}
      <div className="flex flex-col gap-3">
        {backups.map((backup) => (
          <div
            key={backup.id}
            className="flex items-center justify-between rounded-lg shadow-card bg-white px-5 py-4"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-md bg-gray-100">
                <HardDrive size={16} className="text-gray-500" />
              </div>
              <div>
                <p className="text-base font-medium text-gray-900">
                  {backup.date}
                </p>
                <p className="text-sm text-gray-400">{backup.size}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Badge variant="success">Completed</Badge>
              <button
                className="flex h-8 w-8 items-center justify-center rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors cursor-pointer"
                aria-label="Download backup"
              >
                <Download size={14} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
