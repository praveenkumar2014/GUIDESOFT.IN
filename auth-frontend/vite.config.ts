import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [react()],
    // GOOGLE_CLIENT_SECRET is intentionally not exposed to the browser.
    // The client ID is public and is needed to start the Google OAuth flow.
    define: {
      'import.meta.env.VITE_GOOGLE_CLIENT_ID': JSON.stringify(
        env.GOOGLE_CLIENT_ID,
      ),
      'import.meta.env.VITE_BACKEND_VERIFY_TOKEN_URL': JSON.stringify(
        env.BACKEND_VERIFY_TOKEN_URL,
      ),
      'import.meta.env.VITE_BACKEND_LOGOUT_TOKEN_URL': JSON.stringify(
        env.BACKEND_LOGOUT_TOKEN_URL,
      ),
    },
  }
})
