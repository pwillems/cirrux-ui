import { Button } from "../../../components/ui/Button";
import { Select } from "../../../components/ui/Select";
import { Toggle } from "../../../components/ui/Toggle";
import { Settings } from "lucide-react";
import { useState } from "react";

export function AdminSection() {
  const [timezone, setTimezone] = useState("Europe/Amsterdam");
  const [language, setLanguage] = useState("en");
  const [threadView, setThreadView] = useState(true);
  const [readReceipts, setReadReceipts] = useState(false);
  const [externalImages, setExternalImages] = useState(true);

  return (
    <div>
      <h1 className="mb-6 text-2xl font-semibold tracking-tight text-gray-900">
        Admin
      </h1>

      {/* General preferences */}
      <div className="rounded-lg shadow-card bg-white p-6">
        <div className="mb-4 flex items-center gap-2">
          <Settings size={16} className="text-gray-400" />
          <h2 className="text-md font-semibold tracking-[0.01em] text-gray-900">
            Preferences
          </h2>
        </div>
        <div className="flex flex-col gap-5">
          <Select
            label="Language"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            options={[
              { value: "en", label: "English" },
              { value: "nl", label: "Nederlands" },
              { value: "de", label: "Deutsch" },
              { value: "fr", label: "Francais" },
            ]}
          />
          <Select
            label="Timezone"
            value={timezone}
            onChange={(e) => setTimezone(e.target.value)}
            options={[
              { value: "Europe/Amsterdam", label: "Europe/Amsterdam (CET)" },
              { value: "Europe/London", label: "Europe/London (GMT)" },
              { value: "America/New_York", label: "America/New_York (EST)" },
              { value: "America/Los_Angeles", label: "America/Los_Angeles (PST)" },
            ]}
          />
        </div>
      </div>

      {/* Mail behavior */}
      <div className="mt-6 rounded-lg shadow-card bg-white p-6">
        <h2 className="mb-4 text-md font-semibold tracking-[0.01em] text-gray-900">
          Mail behavior
        </h2>
        <div className="flex flex-col gap-5">
          <Toggle
            checked={threadView}
            onChange={setThreadView}
            label="Conversation view"
            description="Group related messages into threads"
          />
          <Toggle
            checked={readReceipts}
            onChange={setReadReceipts}
            label="Send read receipts"
            description="Let senders know when you've read their email"
          />
          <Toggle
            checked={externalImages}
            onChange={setExternalImages}
            label="Load external images"
            description="Automatically load images from external servers"
          />
        </div>
      </div>

      {/* Danger zone */}
      <div className="mt-6 rounded-lg border border-error/20 bg-white p-6">
        <h2 className="mb-2 text-md font-semibold text-error">
          Danger zone
        </h2>
        <p className="mb-4 text-sm text-gray-500">
          Permanently delete your account and all associated data. This action
          cannot be undone.
        </p>
        <Button variant="danger">Delete account</Button>
      </div>
    </div>
  );
}
