interface ApiErrorOptions extends ErrorOptions {
  status: number;
}

export class ApiError extends Error {
  status: number;
  constructor(message: string, options: ApiErrorOptions) {
    super(message, { cause: options?.cause });
    this.status = options.status;
  }
}

export interface StoryContent {
  _uid: string;
  component: string;
  _editable: string;
}

export interface Story<ExtraContent = Record<string, never>> {
  name: string;
  created_at: Date;
  published_at: Date;
  id: number;
  uuid: string;
  content: StoryContent & ExtraContent;
  slug: string;
  full_slug: string;
  sort_by_date: null;
  position: number;
  tag_list: any[];
  is_startpage: boolean;
  parent_id: null;
  meta_data: null;
  group_id: string;
  first_published_at: Date;
  release_id: null;
  lang: string;
  path: null;
  alternates: any[];
  default_full_slug: null;
  translated_slugs: null;
}

export interface RichText {
  type: "doc";
  content: RichTextContent[];
}

export interface RichTextContent {
  type: string;
  content: Array<{
    text: string;
    type: string;
  }>;
}

export interface Image {
  id: number;
  alt: string;
  name: string;
  focus: string;
  title: string;
  filename: string;
  copyright: string;
  fieldtype: string;
  is_external_url: boolean;
}

export interface Link {
  id: string;
  url: string;
  linktype: string;
  fieldtype: string;
  cached_url: string;
}
