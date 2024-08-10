// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// // https://vitejs.dev/config/
// export default defineConfig({
//     plugins: [react()],
//     logLevel: "info",
//     server: {
//       proxy: {
//         "/api": {
//           target: "http://localhost:5000",
//           changeOrigin: true,
//           secure: false,
//         },
//       },
//     },
// });

// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// // https://vitejs.dev/config/
// export default defineConfig({
//     plugins: [react()],
//     logLevel: "info",
//     server: {
//       proxy: {
//         "/api": {
//           target: "http://localhost:5000",
//           changeOrigin: true,
//           secure: false,
//         },
//       },
//     },
//     build: {
//       rollupOptions: {
//         external: ['react-type-animation'],
//       },
//     },
// });



import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  logLevel: 'info',
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        secure: false,
      },
    },
  },
  build: {
    rollupOptions: {
      // List external packages if necessary, but be cautious
      external: [], // Example: ['some-external-package']
    },
    outDir: 'dist', // Ensure this is set correctly
  },
});
