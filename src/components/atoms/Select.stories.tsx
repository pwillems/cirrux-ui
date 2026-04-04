import type { Story } from "@ladle/react";
import { Select } from "../ui/Select";

const timezoneOptions = [
  { value: "utc", label: "UTC" },
  { value: "america-new_york", label: "America / New York" },
  { value: "europe-amsterdam", label: "Europe / Amsterdam" },
  { value: "asia-tokyo", label: "Asia / Tokyo" },
];

export const Default: Story = () => (
  <div className="w-80">
    <Select options={timezoneOptions} />
  </div>
);

export const WithLabel: Story = () => (
  <div className="w-80">
    <Select label="Timezone" options={timezoneOptions} />
  </div>
);

export const WithHint: Story = () => (
  <div className="w-80">
    <Select
      label="Timezone"
      options={timezoneOptions}
      hint="Used for scheduling and notifications."
    />
  </div>
);
