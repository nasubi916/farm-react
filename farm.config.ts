import path from "node:path";
import { defineConfig } from "@farmfe/core";

export default defineConfig({
  plugins: ["@farmfe/plugin-react"],
  server: {
    port: 3000,
  },
  compilation: {
    resolve: {
      alias: {
        "@": path.join(process.cwd(), "src/"),
      },
    },
  },
});
