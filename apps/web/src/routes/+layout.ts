import type { LayoutLoad } from "./$types";
export const prerender = true;

export type PageData = {
  isHome: boolean;
  themeColor: string;
  usePrimaryColor: boolean;
  useSecondaryColor: boolean;
};

export const load: LayoutLoad = async (event) => {
  const pathname = event.url.pathname;
  const isHome = pathname === "/";
  const usePrimaryColor = isHome
  const useSecondaryColor = !isHome
  const themeColor = usePrimaryColor ? "#de4500" : "#202d85";

  const data: PageData = {
    isHome,
    themeColor,
    usePrimaryColor,
    useSecondaryColor,
  };
  return data;
};
