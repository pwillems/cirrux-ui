import { useState } from "react";
import { Input } from "../../../components/ui/Input";
import { Toggle } from "../../../components/ui/Toggle";
import { Button } from "../../../components/ui/Button";
import { Badge } from "../../../components/ui/Badge";
import { Shield, Key, Smartphone } from "lucide-react";

export function SecuritySection() {
  const [twoFactor, setTwoFactor] = useState(false);
  const [sessionAlerts, setSessionAlerts] = useState(true);

  return (
    <div>
      <h1 className="mb-6 text-2xl font-semibold tracking-tight text-gray-900">
        Security
      </h1>

      {/* Password */}
      <div className="rounded-lg shadow-card bg-white p-6">
        <div className="mb-4 flex items-center gap-2">
          <Key size={16} className="text-gray-400" />
          <h2 className="text-md font-semibold tracking-[0.01em] text-gray-900">
            Password
          </h2>
        </div>
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
      </div>

      {/* Two-factor authentication */}
      <div className="mt-6 rounded-lg shadow-card bg-white p-6">
        <div className="mb-4 flex items-center gap-2">
          <Smartphone size={16} className="text-gray-400" />
          <h2 className="text-md font-semibold tracking-[0.01em] text-gray-900">
            Two-factor authentication
          </h2>
          <Badge variant={twoFactor ? "success" : "default"}>
            {twoFactor ? "Enabled" : "Disabled"}
          </Badge>
        </div>
        <p className="mb-4 text-sm text-gray-500">
          Add an extra layer of security to your account by requiring a
          verification code in addition to your password.
        </p>
        <Toggle
          checked={twoFactor}
          onChange={setTwoFactor}
          label="Enable two-factor authentication"
        />
      </div>

      {/* Sessions */}
      <div className="mt-6 rounded-lg shadow-card bg-white p-6">
        <div className="mb-4 flex items-center gap-2">
          <Shield size={16} className="text-gray-400" />
          <h2 className="text-md font-semibold tracking-[0.01em] text-gray-900">
            Sessions
          </h2>
        </div>
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
      </div>
    </div>
  );
}
