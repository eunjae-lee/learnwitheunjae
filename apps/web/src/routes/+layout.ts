import type { LayoutLoad } from "./$types";
import { getClientSession } from "@lwe/db";
export const prerender = true;

export const load: LayoutLoad = async (event) => {
  const session = await getClientSession(event);
  // console.log("💡 client session", session);
  return {
    session,
  };
};
