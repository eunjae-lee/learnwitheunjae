import RichTextResolver from "./richText";
import type { Story, StoryContent } from "./types";

type PreviewCallback = (story: Story) => void;

type PreviewsCallback = (stories: Story[]) => void;

export async function enablePreview(story: Story, callback: PreviewCallback) {
  // @ts-expect-error bridge is not typed
  const { StoryblokBridge, location } = window;
  const storyblokInstance = new StoryblokBridge();

  storyblokInstance.on(["input", "published", "change"], (event: any) => {
    if (event.action === "input" && event.story.id === story.id) {
      callback(event.story);
    } else if (
      (event.action === "change" || event.action === "published") &&
      event.storyId === story.id
    ) {
      location.reload();
    }
  });
}

export async function enablePreviews(
  stories: Story[],
  callback: PreviewsCallback
) {
  stories.forEach((story, index) => {
    enablePreview(story, (newStory) => {
      stories[index] = newStory;
      callback(stories);
    });
  });
}

export function renderRichText(data: any) {
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
