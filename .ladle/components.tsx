import type { GlobalProvider } from "@ladle/react";
import "../src/index.css";
import { ThemeProvider } from "../src/components/theme/ThemeProvider";

export const Provider: GlobalProvider = ({ children }) => (
  <ThemeProvider>{children}</ThemeProvider>
);
