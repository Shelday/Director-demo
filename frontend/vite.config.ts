import dotenv from 'dotenv';
import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';

dotenv.config();

export default ({ mode }: { mode: string }) => {
  // Load environment variables based on the current mode (e.g., 'development', 'production')
  const env = loadEnv(mode, process.cwd());

  return defineConfig({
    plugins: [vue()],
    server: {
      allowedHosts: [process.env.VITE_ALLOWED_HOSTS || 'localhost'],
      host: process.env.VITE_ALLOWED_HOSTS || 'localhost',
      port: parseInt(env.VITE_PORT),  // Access the port directly from the env object
      open: env.VITE_OPEN_BROWSER === 'false' ? false : true,  // Use the environment variable to control browser opening, default to true
    },
  });
};