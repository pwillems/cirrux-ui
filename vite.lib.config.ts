import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import dts from "vite-plugin-dts";
import { resolve } from "path";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    dts({
      tsconfigPath: "./tsconfig.lib.json",
      insertTypesEntry: true,
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      formats: ["es"],
      fileName: "index",
    },
    rollupOptions: {
      external: [
        "react",
        "react/jsx-runtime",
        "react-dom",
        "react-router-dom",
        "lucide-react",
      ],
    },
    cssCodeSplit: false,
    sourcemap: true,
    outDir: "dist",
  },
});
