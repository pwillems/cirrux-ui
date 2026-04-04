import type { Story } from "@ladle/react";
import { Shield, Trash2 } from "lucide-react";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";
import { CardSection } from "./CardSection";

export const Default: Story = () => (
  <div className="max-w-xl p-6">
    <CardSection>
      <p className="text-sm text-gray-500">Card content goes here.</p>
    </CardSection>
  </div>
);

export const WithHeader: Story = () => (
  <div className="max-w-xl p-6">
    <CardSection
      header={{
        icon: <Shield size={16} />,
        title: "Two-factor authentication",
        description: "Add an extra layer of security to your account.",
      }}
    >
      <p className="text-sm text-gray-500">
        Two-factor authentication is currently disabled.
      </p>
      <div className="mt-4">
        <Button variant="secondary">Enable 2FA</Button>
      </div>
    </CardSection>
  </div>
);

export const WithForm: Story = () => (
  <div className="max-w-xl p-6">
    <CardSection
      header={{ title: "Profile information" }}
    >
      <div className="flex flex-col gap-4">
        <Input label="Display name" defaultValue="Kay Anderson" />
        <Input label="Email address" defaultValue="kay@example.com" type="email" />
        <div className="flex justify-end">
          <Button variant="primary">Save changes</Button>
        </div>
      </div>
    </CardSection>
  </div>
);

export const DangerVariant: Story = () => (
  <div className="max-w-xl p-6">
    <CardSection
      variant="danger"
      header={{
        icon: <Trash2 size={16} />,
        title: "Delete account",
        description: "Permanently delete your account and all associated data.",
      }}
    >
      <Button variant="danger" icon={<Trash2 size={14} />}>
        Delete my account
      </Button>
    </CardSection>
  </div>
);
