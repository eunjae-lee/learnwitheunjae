import type { XOR } from "ts-xor";

export type MenuItem = {
  label: string;
  shortLabel?: string;
  icon?: ConstructorOfATypedSvelteComponent;
} & XOR<{ href: string }, { onClick: () => void }>;

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
