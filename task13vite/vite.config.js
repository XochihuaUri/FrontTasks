// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()]
// })
// /// <reference types="vitest" />
// import { defineConfig } from "vite";

// export default defineConfig({
//   test: {
//     // ...
//   },
// });
// import { mergeConfig } from "vite";
// import { defineConfig } from "vitest/config";
// import viteConfig from "./vite.config";

// export default mergeConfig(
//   viteConfig,
//   defineConfig({
//     test: {
//       exclude: ["packages/template/*"],
//     },
//   })
// );

// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// //vitejs.dev/config/
// https: export default defineConfig({
//   plugins: [react()],
//   test: {
//     globals: true,
//     environment: "vitest",
//   },
// });
// // import { defineConfig } from "vitest/config";

// // export default defineConfig({
// //   test: {
// //     globals: true,
// //   },
// // });
// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// export default defineConfig({
//   plugins: [react()],
//   test: {
//     globals: true,
//     environment: "vitest",
//   },
// });

// /// <reference types="vitest" />
// /// <reference types="vite/client" />

// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   test: {
//     globals: true,
//     environment: "jsdom",
//   },
// });

/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
  },
});
