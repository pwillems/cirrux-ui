import tailwindcssPostcss from "@tailwindcss/postcss";
import { defineConfig } from "vite";

// Do NOT add @vitejs/plugin-react here.
// Ladle injects its own Vite 6-compatible React plugin internally.
// Adding ours (built for Vite 8 / rolldown) causes a "Missing field moduleType" crash.
//
// Do NOT use @tailwindcss/vite here either.
// Ladle overrides Vite's `root` to its internal app folder inside node_modules,
// so @tailwindcss/vite scans the wrong directory and generates no component CSS.
// Instead, use @tailwindcss/postcss inline — Ladle reads userViteConfig.css.postcss
// directly and runs it with process.cwd() (the actual project root).
export default defineConfig({
  css: {
    postcss: {
      plugins: [tailwindcssPostcss()],
    },
  },
});
