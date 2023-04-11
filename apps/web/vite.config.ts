import { sveltekit } from '@sveltejs/kit/vite';
import mkcert from 'vite-plugin-mkcert';
import type { UserConfig } from 'vite';

const config: UserConfig = {
  plugins: [mkcert(), sveltekit()],
  server: {
    https: true,
    fs: {
      allow: ['content'],
    },
  },
  define: {
    '_process.env.XYZ': 'process.env.XYZ',
    '_process.env.DATABASE_URL': 'process.env.DATABASE_URL',
    '_process.env.API_ENDPOINT': 'process.env.API_ENDPOINT',
    '_import.meta.env.XYZ': 'import.meta.env.XYZ',
  },
};

export default config;
