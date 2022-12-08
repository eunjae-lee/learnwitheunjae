import { PUBLIC_APP_ENVIRONMENT } from "$env/static/public";
import { env } from "$env/dynamic/public";
import { ApiError, type Link, type Story } from "./types";

type Fetch = typeof fetch;

type StoryOptions = Record<string, string | number | boolean>;

type LoadStoryParams = {
  slug: string;
  fetch: Fetch;
  options?: StoryOptions;
};

type LoadStoriesParams = {
  slugs: string[];
  fetch: Fetch;
  options?: StoryOptions;
};

export const IS_PREVIEW_MODE = PUBLIC_APP_ENVIRONMENT !== "production";

async function request({ fetch, path }: { fetch: Fetch; path: string }) {
  const accessToken = env.PUBLIC_STORYBLOK_API_KEY;
  const version = IS_PREVIEW_MODE ? "draft" : "published";
  const url =
    `https://api.storyblok.com${path}` +
    (path.includes("?") ? "&" : "?") +
    `token=${accessToken}&version=${version}`;
  const response = await fetch(url, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  if (response.status !== 200) {
    throw new ApiError(
      `${path} failed with ${response.status}(${response.statusText})`,
      {
        status: response.status,
      }
    );
  }
  return await response.json();
}

export async function loadStory({ slug, fetch, options }: LoadStoryParams) {
  const extraParams = convertObjectToQueryParams(options || {});

  return (await request({
    fetch,
    path: `/v2/cdn/stories/${slug}?${extraParams}`,
  })) as {
    story: Story;
    links: Link[];
  };
}

export async function loadStories({
  slugs,
  fetch,
  options,
}: LoadStoriesParams) {
  const slugsParams = `by_slugs=${slugs
    .map(encodeURIComponent)
    .join(encodeURIComponent(","))}`;
  const extraParams = convertObjectToQueryParams(options || {});

  return (await request({
    fetch,
    path: `/v2/cdn/stories?${slugsParams}&${extraParams}`,
  })) as {
    stories: Story[];
  };
}

function convertObjectToQueryParams(params: StoryOptions) {
  return Object.keys(params)
    .map((key) => [key, encodeURIComponent(params[key])].join("="))
    .join("&");
}
