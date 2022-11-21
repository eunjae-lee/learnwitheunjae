import type { LayoutServerLoad } from ".svelte-kit/types/src/routes/$types";
import { redirect } from "@sveltejs/kit";

export const load: LayoutServerLoad = async ({ parent }) => {
  // @ts-expect-error not typed yet
  const { session } = await parent();
  if (session && session.user) {
    return {};
  } else {
    throw redirect(307, "/sign_in");
  }
};
