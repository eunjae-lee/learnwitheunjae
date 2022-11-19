import type { LayoutServerLoad } from "./$types";
import { getServerSession } from "@lwe/db";
export const prerender = true;

export const load: LayoutServerLoad = async (event) => {
  return {
    session: await getServerSession(event),
  };
};
