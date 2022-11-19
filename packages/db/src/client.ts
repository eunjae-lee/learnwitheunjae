import { env } from "$env/dynamic/public";
import { createClient } from "@supabase/auth-helpers-sveltekit";

export const supabase = createClient(
  env.PUBLIC_SUPABASE_URL,
  env.PUBLIC_SUPABASE_ANON_KEY
);
