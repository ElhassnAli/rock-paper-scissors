import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
const REPO_NAME = "rock-paper-scissors";

export default defineConfig({
  base: "/rock-paper-scissors/",
  plugins: [react()],
});
