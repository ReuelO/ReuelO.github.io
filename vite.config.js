import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import ghPages from "vite-plugin-gh-pages";

// https://vite.dev/config/
export default defineConfig({
  base: "/portfolio-site/",
  plugins: [react(), ghPages()],
});
