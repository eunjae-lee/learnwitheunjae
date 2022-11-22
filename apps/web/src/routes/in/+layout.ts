import type { LayoutLoad } from "./$types";
import { getSession } from "@lwe/db";
import { redirect } from "@sveltejs/kit";

export const prerender = false;

export const load: LayoutLoad = async (event) => {
  const session = await getSession(event);
  if (!session) {
    throw redirect(307, "/sign_in");
  }

  return {
    session,
  };
};
