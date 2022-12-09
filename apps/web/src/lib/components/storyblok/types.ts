import type { Image, Link, RichText, Table } from "@lwe/content/src/types";

export type CourseSummaryData = {
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

export type CourseDetailData = {
  title: string;
  short_description: string;
  long_description: RichText;
  questions: RichText;
  who_is_it_for: RichText;
  what_you_will_get: RichText;
  pricing_table: Table;
  description_after_pricing_table: RichText;
  faqs: Faq[];
  about: Link;
  show_subscription_box: boolean;
  subscription_slug: string;
};

export type Faq = {
  _uid: string;
  title: string;
  items: FaqItem[];
};

export type FaqItem = {
  _uid: string;
  question: RichText;
  answer: RichText;
};

export type AboutData = {
  title: string;
  image: Image;
  description: RichText;
  twitter: Link;
  github: Link;
  instagram: Link;
  email: string;
};
