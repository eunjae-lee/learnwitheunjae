import type { LoadEvent, ServerLoadEvent } from "@sveltejs/kit";
import {
  getSupabase,
  getServerSession as getServerSessionFromSupabase,
} from "@supabase/auth-helpers-sveltekit";
import { supabase } from "./client";

export async function signIn() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "github",
    options: { redirectTo: window.location.origin + "/in" },
  });
  return { data, error };
}

export async function signOut() {
  const { error } = await supabase.auth.signOut();
  return { error };
}

export function subscribeToAuthStateChange({
  onChange,
}: {
  onChange: () => void;
}) {
  const {
    data: { subscription },
  } = supabase.auth.onAuthStateChange(() => {
    // invalidate('supabase:auth')
    onChange();
  });

  return () => {
    subscription.unsubscribe();
  };
}

export async function getClientSession(event: LoadEvent) {
  const { session } = await getSupabase(event);
  return session;
}

export async function getServerSession(event: ServerLoadEvent) {
  return await getServerSessionFromSupabase(event);
}
