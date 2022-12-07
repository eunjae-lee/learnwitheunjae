import type { Image, Link, RichText } from "@lwe/content/src/types";

export type CourseSummary = {
  title: string;
  subtitle: string;
  image: Image;
  image_source_title: string;
  image_source_url: Link;
  description: RichText;
  show_subscription_box: boolean;
  subscription_slug: string;
  show_detail_button: boolean;
  detail_path: string;
};
