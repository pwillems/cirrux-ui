import {
  ArrowLeft,
  CreditCard,
  Globe,
  HardDrive,
  Layers,
  Mail,
  RefreshCw,
  Settings,
  Shield,
  User,
} from "lucide-react";
import { AppLayout, type SidebarNavGroup } from "../../components/layout/AppLayout";

const groups: SidebarNavGroup[] = [
  {
    label: "General",
    items: [
      { label: "Profile", icon: <User size={16} />, href: "/settings/profile" },
      { label: "Security", icon: <Shield size={16} />, href: "/settings/security" },
      { label: "Workspaces", icon: <Layers size={16} />, href: "/settings/workspaces" },
    ],
  },
  {
    label: "Personal",
    items: [
      { label: "Mailboxes", icon: <Mail size={16} />, href: "/settings/mailboxes" },
      { label: "Domains", icon: <Globe size={16} />, href: "/settings/domains" },
      { label: "Syncs", icon: <RefreshCw size={16} />, href: "/settings/syncs" },
      { label: "Backups", icon: <HardDrive size={16} />, href: "/settings/backups" },
      { label: "Admin", icon: <Settings size={16} />, href: "/settings/admin" },
      { label: "Billing", icon: <CreditCard size={16} />, href: "/settings/billing" },
    ],
  },
];

const primaryAction = {
  label: "Back to inbox",
  icon: <ArrowLeft size={16} />,
  href: "/",
};

export function SettingsLayout() {
  return <AppLayout primaryAction={primaryAction} groups={groups} />;
}
