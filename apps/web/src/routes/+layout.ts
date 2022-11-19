import type { LayoutLoad } from "./$types";
import { getClientSession } from "@lwe/db";
export const prerender = true;

export const load: LayoutLoad = async (event) => {
  return {
    session: await getClientSession(event),
  };
};
