import react from "@vitejs/plugin-react-swc";
import tailwindcss from "tailwindcss";
import { defineConfig } from "vite";
import ghPages from "vite-plugin-gh-pages";

// https://vite.dev/config/
export default defineConfig({
  base: "/reuelo.github.io/",
  plugins: [react(), ghPages()],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
});
