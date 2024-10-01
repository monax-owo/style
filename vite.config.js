import { defineConfig } from "vite";
export default defineConfig({
  root: "test",
  base: "/test",
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler",
      },
    },
  },
});
