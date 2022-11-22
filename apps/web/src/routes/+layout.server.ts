import type { LayoutServerLoad } from "./$types";
import { getServerSession } from "@lwe/db";
export const prerender = true;

export const load: LayoutServerLoad = async (event) => {
  const session = await getServerSession(event);
  return {
    session,
  };
};
