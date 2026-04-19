import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  cloudflare: false,
  vite: {
    build: {
      outDir: ".output/public",
    },
    server: {
      allowedHosts: ["shreya-shenoy.up.railway.app"],
    },
    preview: {
      host: "0.0.0.0",
      port: process.env.PORT ? parseInt(process.env.PORT) : 4173,
      allowedHosts: ["shreya-shenoy.up.railway.app"],
    },
  },
});