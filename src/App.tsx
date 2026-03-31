import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AppShell } from "./components/layout/AppShell";
import { InboxLayout } from "./pages/inbox/InboxLayout";
import { InboxPage } from "./pages/inbox/InboxPage";
import { ThreadPage } from "./pages/thread/ThreadPage";
import { ComposePage } from "./pages/compose/ComposePage";
import { SettingsLayout } from "./pages/settings/SettingsLayout";
import { ProfileSection } from "./pages/settings/sections/ProfileSection";
import { SecuritySection } from "./pages/settings/sections/SecuritySection";
import { WorkspacesSection } from "./pages/settings/sections/WorkspacesSection";
import { MailboxesSection } from "./pages/settings/sections/MailboxesSection";
import { DomainsSection } from "./pages/settings/sections/DomainsSection";
import { SyncsSection } from "./pages/settings/sections/SyncsSection";
import { BackupsSection } from "./pages/settings/sections/BackupsSection";
import { AdminSection } from "./pages/settings/sections/AdminSection";
import { BillingSection } from "./pages/settings/sections/BillingSection";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppShell />}>
          {/* Mail */}
          <Route element={<InboxLayout />}>
            <Route path="/" element={<InboxPage />} />
            <Route path="/thread/:id" element={<ThreadPage />} />
            <Route path="/compose" element={<ComposePage />} />
          </Route>

          {/* Settings */}
          <Route path="/settings" element={<SettingsLayout />}>
            <Route index element={<Navigate to="profile" replace />} />
            <Route path="profile" element={<ProfileSection />} />
            <Route path="security" element={<SecuritySection />} />
            <Route path="workspaces" element={<WorkspacesSection />} />
            <Route path="mailboxes" element={<MailboxesSection />} />
            <Route path="domains" element={<DomainsSection />} />
            <Route path="syncs" element={<SyncsSection />} />
            <Route path="backups" element={<BackupsSection />} />
            <Route path="admin" element={<AdminSection />} />
            <Route path="billing" element={<BillingSection />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
