import { Button } from "../../../components/ui/Button";
import { Badge } from "../../../components/ui/Badge";
import { EmptyState } from "../../../components/ui/EmptyState";
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
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-semibold tracking-tight text-gray-900">
          Workspaces
        </h1>
        <Button variant="secondary" size="sm" icon={<Plus size={14} />}>
          New workspace
        </Button>
      </div>

      {workspaces.length > 0 ? (
        <div className="flex flex-col gap-3">
          {workspaces.map((ws) => (
            <div
              key={ws.id}
              className="flex items-center justify-between rounded-lg shadow-card bg-white px-5 py-4"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-md bg-gray-100">
                  <Layers size={16} className="text-gray-500" />
                </div>
                <div>
                  <p className="text-base font-medium text-gray-900">
                    {ws.name}
                  </p>
                  <p className="text-sm text-gray-400">
                    {ws.members} member{ws.members !== 1 && "s"}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Badge>{ws.plan}</Badge>
                <Button variant="ghost" size="sm">
                  Manage
                </Button>
              </div>
            </div>
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
