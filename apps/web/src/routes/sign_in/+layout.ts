import type { LayoutLoad } from ".svelte-kit/types/src/routes/$types";
import { redirect } from "@sveltejs/kit";

export const prerender = false;

export const load: LayoutLoad = async ({ parent, url }) => {
  // @ts-expect-error not typed yet
  const { session } = await parent();
  const redirectTo = url.searchParams.get("redirect_to") ?? "/in";
  if (session && session.user) {
    throw redirect(307, redirectTo);
  } else {
    return {
      redirectTo,
    };
  }
};
