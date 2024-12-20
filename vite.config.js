import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [["styled-components", { displayName: true, fileName: true }]],
      },
    }),
  ],
  resolve: {
    alias: [
      { find: "@", replacement: resolve(__dirname, "src") },
      { find: "@api", replacement: resolve(__dirname, "src/api") },
      { find: "@assets", replacement: resolve(__dirname, "src/assets") },
      {
        find: "@components",
        replacement: resolve(__dirname, "src/components"),
      },
      { find: "@pages", replacement: resolve(__dirname, "src/pages") },
      { find: "@store", replacement: resolve(__dirname, "src/store") },
      { find: "@utils", replacement: resolve(__dirname, "src/utils") },
    ],
  },
  rules: {
    indent: ["error", 2], // 들여쓰기 스타일 설정 (2칸 들여쓰기)

    "no-unused-vars": "off", // 사용하지 않는 변수 경고 끄기,
    "react/prop-types": "off",
  },
});
