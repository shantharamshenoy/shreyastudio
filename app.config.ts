// @ts-ignore
import { createApp } from "vinxi";
// @ts-ignore
import { tanstackStart } from "@tanstack/react-start/plugin/vite";

// @ts-ignore
export default createApp(tanstackStart({
  server: {
    preset: "node-server",
  },
}));