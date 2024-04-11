import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // base:"/React-Ecommerce-App/"
  target: "web",
  resolve: {
    fallback: {
      // path: require.resolve("path-browserify"),
      path: false,
    },
  },
});
