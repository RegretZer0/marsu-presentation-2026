import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  base: "./",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        sample: resolve(__dirname, "sample.html"),
        home: resolve(__dirname, "home.html"),
        loadingempower: resolve(__dirname, "loadingempower.html"),

        page1: resolve(__dirname, "src/pages/page1.html"),
        page2: resolve(__dirname, "src/pages/page2.html"),
        page3: resolve(__dirname, "src/pages/page3.html"),
        page4: resolve(__dirname, "src/pages/page4.html"),
        page5: resolve(__dirname, "src/pages/page5.html"),
        page6: resolve(__dirname, "src/pages/page6.html"),
        page7: resolve(__dirname, "src/pages/page7.html"),
        page8: resolve(__dirname, "src/pages/page8.html"),
        page9: resolve(__dirname, "src/pages/page9.html"),
        page10: resolve(__dirname, "src/pages/page10.html"),
        page11: resolve(__dirname, "src/pages/page11.html"),
        page12: resolve(__dirname, "src/pages/page12.html"),
        page13: resolve(__dirname, "src/pages/page13.html"),
        page14: resolve(__dirname, "src/pages/page14.html"),
        page15: resolve(__dirname, "src/pages/page15.html"),
        page16: resolve(__dirname, "src/pages/page16.html"),
        page17: resolve(__dirname, "src/pages/page17.html"),
      },
    },
  },
});