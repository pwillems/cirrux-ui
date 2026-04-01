import { Button } from "../../../components/ui/Button";
import { Badge } from "../../../components/ui/Badge";
import { domains } from "../../../data/mockData";
import { Globe, Plus } from "lucide-react";

const statusBadge = (status: string) => {
  switch (status) {
    case "verified":
      return <Badge variant="success">Verified</Badge>;
    case "pending":
      return <Badge variant="warning">Pending</Badge>;
    case "error":
      return <Badge variant="error">Error</Badge>;
    default:
      return <Badge>{status}</Badge>;
  }
};

export function DomainsSection() {
  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-semibold tracking-tight text-gray-900">
          Domains
        </h1>
        <Button variant="secondary" size="sm" icon={<Plus size={14} />}>
          Add domain
        </Button>
      </div>

      <div className="flex flex-col gap-3">
        {domains.map((d) => (
          <div
            key={d.id}
            className="flex items-center justify-between rounded-lg shadow-card bg-surface px-5 py-4"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-md bg-gray-100">
                <Globe size={16} className="text-gray-500" />
              </div>
              <div>
                <p className="text-base font-medium text-gray-900">
                  {d.domain}
                </p>
                <p className="text-sm text-gray-400">
                  Added {d.addedAt}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              {statusBadge(d.status)}
              <Button variant="ghost" size="sm">
                Manage
              </Button>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-4 text-sm text-gray-400">
        Add and verify your domains to send email from custom addresses.
      </p>
    </div>
  );
}
