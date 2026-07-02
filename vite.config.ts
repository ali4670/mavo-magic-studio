import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import cloudflare from "@cloudflare/vite-plugin";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    tsconfigPaths(),
    cloudflare({
      // Adjust as needed for Cloudflare Workers
    }),
  ],
  resolve: {
    alias: {
      // Add any custom aliases here if needed
    },
  },
});
