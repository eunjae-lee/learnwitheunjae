import type { LayoutLoad } from "./$types";
import { getSession } from "@lwe/db";
export const prerender = true;

export const load: LayoutLoad = async (event) => {
  const session = await getSession(event);
  const pathname = event.url.pathname;
  const isHome = pathname === "/";
  const usePrimaryColor =
    isHome || pathname === "/in" || pathname.startsWith("/in/");
  const useSecondaryColor = !isHome && !usePrimaryColor;
  const themeColor = usePrimaryColor ? "#de4500" : "#202d85";

  return {
    session,
    isHome,
    themeColor,
    usePrimaryColor,
    useSecondaryColor,
  };
};
