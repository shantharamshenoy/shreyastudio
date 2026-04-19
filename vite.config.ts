import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  vite: {
    server: {
      allowedHosts: ["shreya-shenoy.up.railway.app"],
    },
    preview: {
      allowedHosts: ["shreya-shenoy.up.railway.app"],
      host: "0.0.0.0",
      port: process.env.PORT ? parseInt(process.env.PORT) : 4173,
    },
  },
});