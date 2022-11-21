import { PUBLIC_APP_ENVIRONMENT } from "$env/static/public";
import { env } from "$env/dynamic/public";
import RichTextResolver from "./richText";
import { ApiError, type Story, type StoryContent } from "./types";

type Fetch = typeof fetch;

type LoadStoryParams = {
  slug: string;
  fetch: Fetch;
};

type LoadStoriesParams = {
  slugs: string[];
  fetch: Fetch;
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

export async function loadStory({ slug, fetch }: LoadStoryParams) {
  return (await request({ fetch, path: `/v2/cdn/stories/${slug}` })) as {
    story: Story;
  };
}

export async function loadStories({ slugs, fetch }: LoadStoriesParams) {
  return (await request({
    fetch,
    path: `/v2/cdn/stories?by_slugs=${slugs
      .map(encodeURIComponent)
      .join(encodeURIComponent(","))}`,
  })) as {
    stories: Story[];
  };
}

type PreviewCallback = (story: Story) => void;

export async function enablePreview(
  storyId: number,
  callback: PreviewCallback
) {
  // @ts-expect-error bridge is not typed
  const { StoryblokBridge, location } = window;
  const storyblokInstance = new StoryblokBridge();

  storyblokInstance.on(["input", "published", "change"], (event) => {
    if (event.action === "input" && event.story.id === storyId) {
      callback(event.story);
    } else if (
      (event.action === "change" || event.action === "published") &&
      event.storyId === storyId
    ) {
      location.reload();
    }
  });
}

export function renderRichText(data) {
  return new RichTextResolver().render(data);
}

const sbEdit = (blok: StoryContent) => {
  if (typeof blok !== "object" || typeof blok._editable === "undefined") {
    return {};
  }

  const options = JSON.parse(
    blok._editable.replace(/^<!--#storyblok#/, "").replace(/-->$/, "")
  );

  return {
    "data-blok-c": JSON.stringify(options),
    "data-blok-uid": options.id + "-" + options.uid,
  };
};

export const storyblokEditable = (node: HTMLElement, value: StoryContent) => {
  const updateDom = (value: StoryContent) => {
    const options = sbEdit(value);
    if (options["data-blok-c"]) {
      node.setAttribute("data-blok-c", options["data-blok-c"]);
      node.setAttribute("data-blok-uid", options["data-blok-uid"]);
      node.classList.add("storyblok__outline");
    }
  };

  updateDom(value); // when is mounted

  return {
    update(newValue: StoryContent) {
      // when value changes
      updateDom(newValue);
    },
  };
};
