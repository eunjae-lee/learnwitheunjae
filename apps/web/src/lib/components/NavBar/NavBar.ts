export type MenuItem = {
  label: string;
  shortLabel?: string;
  href: string;
  icon?: ConstructorOfATypedSvelteComponent;
};

export function getClassForMenuItem(
  isCurrentPage: boolean,
  useWhiteUnderline: boolean
) {
  return isCurrentPage
    ? `underline underline-offset-4 decoration-2 decoration-wavy ${
        useWhiteUnderline ? "decoration-base-100" : "decoration-primary"
      }`
    : "hover:no-underline";
}
