export type MenuItem = {
  label: string;
  href: string;
  shortLabel?: string;
  icon?: ConstructorOfATypedSvelteComponent;
};

export function getClassForMenuItem(
  isCurrentPage: boolean,
  isSecondary: boolean
) {
  return isCurrentPage
    ? `underline underline-offset-4 decoration-2 decoration-wavy ${
        isSecondary ? "decoration-base-100" : "decoration-primary"
      }`
    : "hover:no-underline";
}
