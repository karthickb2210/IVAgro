import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'


const manifestForPlugin = {
  registerType: "prompt",
  includeAssets: [ "icon-512x512.png", "icon-192x192.png" ],
  manifest: {
    name: "IronValley Agro",
    short_name: "IV Agro",
    description: "An app that helps you purchase herbs",
    icons: [
      
      {
        src: "/icon-192x192.png",
        sizes: "192x192",
        type: "image/png"
      },
      {
        src: "/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    theme_color: "#181818",
    background_color: "#e8eac2",
    display: "standalone",
    scope: "/",
    start_url: "/",
    orientation: "portrait",
  },
};



// https://vitejs.dev/config/
export default defineConfig({
    build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console logs
        drop_debugger: true, // Remove debugger statements
      },
    },
  },
  plugins: [react(), VitePWA(manifestForPlugin)],
  server: {
    host: '0.0.0.0', // Listen to all network interfaces
    port: 5173, // The port where your app will be served
  }
});




