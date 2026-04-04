import { useState } from "react";
import { Input } from "../../../components/atoms";
import { Select } from "../../../components/atoms";
import { Toggle } from "../../../components/atoms";
import { Button } from "../../../components/atoms";
import { StatusMessage } from "../../../components/atoms";
import { CardSection } from "../../../components/organisms/CardSection";
import { PageTitle } from "../../../components/atoms/PageTitle";
import { profile } from "../../../data/mockData";

type SaveStatus = "idle" | "saving" | "success" | "error";

export function ProfileSection() {
  const [form, setForm] = useState(profile);
  const [status, setStatus] = useState<SaveStatus>("idle");

  const update = (field: string, value: string | boolean) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    setStatus("saving");
    setTimeout(() => {
      setStatus("success");
      setTimeout(() => setStatus("idle"), 2000);
    }, 800);
  };

  return (
    <div>
      <PageTitle>Profile</PageTitle>

      <div className="mt-6 flex flex-col gap-6">
        {/* Account info card */}
        <CardSection>
          <div className="flex flex-col gap-5">
            <Input
              label="Username"
              value={form.username}
              onChange={(e) => update("username", e.target.value)}
              hint="Your unique Cirrux username"
            />
            <div className="grid grid-cols-2 gap-4">
              <Input
                label="First name"
                value={form.firstName}
                onChange={(e) => update("firstName", e.target.value)}
              />
              <Input
                label="Last name"
                value={form.lastName}
                onChange={(e) => update("lastName", e.target.value)}
                placeholder="Last name"
              />
            </div>
            <Input
              label="Recovery email"
              type="email"
              value={form.recoveryEmail}
              onChange={(e) => update("recoveryEmail", e.target.value)}
              hint="Used for account recovery and security alerts"
            />
          </div>
        </CardSection>

        {/* Product Updates */}
        <div>
          <h2 className="mb-4 text-md font-semibold tracking-[0.01em] text-gray-900">
            Product Updates
          </h2>
          <CardSection>
            <div className="flex items-center justify-between">
              <Toggle
                checked={form.productUpdates}
                onChange={(checked) => update("productUpdates", checked)}
                label="Enable product update emails"
                description="Receive news about new features and improvements"
              />
              <Select
                options={[
                  {
                    value: "hello@northfield.studio",
                    label: "hello@northfield.studio",
                  },
                  { value: "ops@rivermail.co", label: "ops@rivermail.co" },
                  { value: "team@foundryhq.io", label: "team@foundryhq.io" },
                ]}
                value={form.productUpdatesEmail}
                onChange={(e) => update("productUpdatesEmail", e.target.value)}
                className="w-48"
              />
            </div>
          </CardSection>
        </div>

        {/* Save */}
        <div className="flex items-center gap-3">
          <Button
            variant="primary"
            onClick={handleSave}
            disabled={status === "saving"}
          >
            {status === "saving" ? "Saving..." : "Save changes"}
          </Button>
          {status === "saving" && (
            <StatusMessage status="saving">Saving changes...</StatusMessage>
          )}
          {status === "success" && (
            <StatusMessage status="success">Changes saved</StatusMessage>
          )}
          {status === "error" && (
            <StatusMessage status="error">Failed to save</StatusMessage>
          )}
        </div>
      </div>
    </div>
  );
}
