import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

// https://vitejs.dev/config/

export default defineConfig(({ mode }) => ({
  base: mode === "production" ? "/website/" : "/",
  plugins: [
    svelte({
      compilerOptions: {
        compatibility: {
          componentApi: 4, // This line fixes your error
        },
      },
    }),
  ],
}));
