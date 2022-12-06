import { sveltekit } from "@sveltejs/kit/vite";
import mkcert from "vite-plugin-mkcert";
import type { UserConfig } from "vite";

const config: UserConfig = {
  plugins: [mkcert(), sveltekit()],
  server: {
    https: true,
    fs: {
      allow: ["content"],
    },
  },
};

export default config;
