import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base:'https://demo.nursingupdate.in',
  server: {
    port: 3000,
    open: true,
    watch: {
      usePolling: true,
    },
  },
});
