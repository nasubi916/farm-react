import { defineConfig } from "@farmfe/core";
import path from "path";

export default defineConfig({
  plugins: ["@farmfe/plugin-react"],
  server: {
    port: 3000,
  },
  compilation: {
    resolve: {
      alias: {
        "@": path.join(process.cwd(), "./src"),
      },
    },
  },
});
