import { Button } from "../../../components/atoms";
import { Badge } from "../../../components/atoms";
import { EmptyState } from "../../../components/atoms";
import { PageHeader } from "../../../components/molecules/PageHeader";
import { ListItem } from "../../../components/molecules/ListItem";
import { Layers, Plus } from "lucide-react";

const workspaces = [
  {
    id: "w1",
    name: "Personal",
    members: 1,
    plan: "Free",
  },
];

export function WorkspacesSection() {
  return (
    <div>
      <PageHeader
        title="Workspaces"
        action={
          <Button variant="secondary" size="sm" icon={<Plus size={14} />}>
            New workspace
          </Button>
        }
      />

      {workspaces.length > 0 ? (
        <div className="flex flex-col gap-3">
          {workspaces.map((ws) => (
            <ListItem
              key={ws.id}
              leading={
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-gray-100">
                  <Layers size={16} className="text-gray-500" />
                </div>
              }
              title={ws.name}
              subtitle={`${ws.members} member${ws.members !== 1 ? "s" : ""}`}
              trailing={
                <>
                  <Badge>{ws.plan}</Badge>
                  <Button variant="ghost" size="sm">Manage</Button>
                </>
              }
            />
          ))}
        </div>
      ) : (
        <EmptyState
          icon={<Layers size={32} />}
          title="No workspaces yet"
          description="Create a workspace to collaborate with your team."
          action={
            <Button variant="primary" icon={<Plus size={14} />}>
              Create workspace
            </Button>
          }
        />
      )}
    </div>
  );
}
