import { useState } from "react";
import { Input } from "../../../components/atoms";
import { Toggle } from "../../../components/atoms";
import { Button } from "../../../components/atoms";
import { Badge } from "../../../components/atoms";
import { CardSection } from "../../../components/organisms/CardSection";
import { PageTitle } from "../../../components/atoms/PageTitle";
import { Shield, Key, Smartphone } from "lucide-react";

export function SecuritySection() {
  const [twoFactor, setTwoFactor] = useState(false);
  const [sessionAlerts, setSessionAlerts] = useState(true);

  return (
    <div>
      <PageTitle>Security</PageTitle>

      <div className="mt-6 flex flex-col gap-6">
        {/* Password */}
        <CardSection header={{ icon: <Key size={16} />, title: "Password" }}>
          <div className="flex flex-col gap-4">
            <Input
              label="Current password"
              type="password"
              placeholder="Enter current password"
            />
            <Input
              label="New password"
              type="password"
              placeholder="Enter new password"
              hint="Minimum 12 characters"
            />
            <Input
              label="Confirm new password"
              type="password"
              placeholder="Confirm new password"
            />
            <div>
              <Button variant="secondary">Update password</Button>
            </div>
          </div>
        </CardSection>

        {/* Two-factor authentication */}
        <CardSection
          header={{
            icon: <Smartphone size={16} />,
            title: "Two-factor authentication",
            trailing: (
              <Badge variant={twoFactor ? "success" : "default"}>
                {twoFactor ? "Enabled" : "Disabled"}
              </Badge>
            ),
            description:
              "Add an extra layer of security to your account by requiring a verification code in addition to your password.",
          }}
        >
          <Toggle
            checked={twoFactor}
            onChange={setTwoFactor}
            label="Enable two-factor authentication"
          />
        </CardSection>

        {/* Sessions */}
        <CardSection header={{ icon: <Shield size={16} />, title: "Sessions" }}>
          <div className="flex flex-col gap-4">
            <Toggle
              checked={sessionAlerts}
              onChange={setSessionAlerts}
              label="Email me about new sign-ins"
              description="Get notified when a new device signs in to your account"
            />
            <div className="rounded-md bg-gray-50 px-4 py-3">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-base font-medium text-gray-900">
                    Current session
                  </p>
                  <p className="text-sm text-gray-400">
                    macOS — Chrome — Active now
                  </p>
                </div>
                <Badge variant="success">Active</Badge>
              </div>
            </div>
            <Button variant="ghost" className="self-start text-error">
              Sign out all other sessions
            </Button>
          </div>
        </CardSection>
      </div>
    </div>
  );
}
