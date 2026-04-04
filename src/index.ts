// Design tokens + Tailwind base styles
import "./index.css";

// Atoms — primitives + all of ui/ (re-exported via atoms/index.ts)
export * from "./components/atoms";

// Molecules
export * from "./components/molecules";

// Organisms
export * from "./components/organisms";

// Layout
export * from "./components/layout/AppShell";
export * from "./components/layout/AppLayout";
export * from "./components/layout/Sidebar";
export * from "./components/layout/SidebarLayoutContext";
export * from "./components/layout/SidebarCollapseButton";
export * from "./components/layout/TopBar";

// Templates
export * from "./components/templates/FocusedLayout";

// Theme
export * from "./components/theme/ThemeProvider";
export * from "./components/theme/ThemeSwitcher";
