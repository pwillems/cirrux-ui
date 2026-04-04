import { Select } from "../../../components/atoms";
import { Toggle } from "../../../components/atoms";
import { Button } from "../../../components/atoms";
import { CardSection } from "../../../components/organisms/CardSection";
import { PageTitle } from "../../../components/atoms/PageTitle";
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
      <PageTitle>Admin</PageTitle>

      <div className="mt-6 flex flex-col gap-6">
        {/* General preferences */}
        <CardSection header={{ icon: <Settings size={16} />, title: "Preferences" }}>
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
        </CardSection>

        {/* Mail behavior */}
        <CardSection header={{ title: "Mail behavior" }}>
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
        </CardSection>

        {/* Danger zone */}
        <CardSection variant="danger">
          <h2 className="mb-2 text-md font-semibold text-error">Danger zone</h2>
          <p className="mb-4 text-sm text-gray-500">
            Permanently delete your account and all associated data. This action
            cannot be undone.
          </p>
          <Button variant="danger">Delete account</Button>
        </CardSection>
      </div>
    </div>
  );
}
