import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";

export default defineConfig({
  plugins: [
    TanStackRouterVite({ autoCodeSplitting: true }),
    react(),
    tailwindcss(),
    tsConfigPaths(),
  ],
  preview: {
    host: "0.0.0.0",
    port: process.env.PORT ? parseInt(process.env.PORT) : 4173,
  },
});