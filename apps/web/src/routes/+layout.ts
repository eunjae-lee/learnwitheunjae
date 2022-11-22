import type { LayoutLoad } from "./$types";
import { getSession } from "@lwe/db";
export const prerender = true;

export const load: LayoutLoad = async (event) => {
  const session = await getSession(event);
  return {
    session,
  };
};
