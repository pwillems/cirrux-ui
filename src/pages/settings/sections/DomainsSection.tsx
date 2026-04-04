import { Button } from "../../../components/atoms";
import { Badge } from "../../../components/atoms";
import { PageHeader } from "../../../components/molecules/PageHeader";
import { ListItem } from "../../../components/molecules/ListItem";
import { domains } from "../../../data/mockData";
import { Globe, Plus } from "lucide-react";

const statusVariant = (
  status: string
): "success" | "error" | "warning" | "default" => {
  if (status === "verified") return "success";
  if (status === "pending") return "warning";
  if (status === "error") return "error";
  return "default";
};

const statusLabel = (status: string) =>
  status.charAt(0).toUpperCase() + status.slice(1);

export function DomainsSection() {
  return (
    <div>
      <PageHeader
        title="Domains"
        action={
          <Button variant="secondary" size="sm" icon={<Plus size={14} />}>
            Add domain
          </Button>
        }
      />

      <div className="flex flex-col gap-3">
        {domains.map((d) => (
          <ListItem
            key={d.id}
            leading={
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-gray-100">
                <Globe size={16} className="text-gray-500" />
              </div>
            }
            title={d.domain}
            subtitle={`Added ${d.addedAt}`}
            trailing={
              <>
                <Badge variant={statusVariant(d.status)}>
                  {statusLabel(d.status)}
                </Badge>
                <Button variant="ghost" size="sm">Manage</Button>
              </>
            }
          />
        ))}
      </div>

      <p className="mt-4 text-sm text-gray-400">
        Add and verify your domains to send email from custom addresses.
      </p>
    </div>
  );
}
