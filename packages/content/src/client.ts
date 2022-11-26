import RichTextResolver from "./richText";
import { type Story, type StoryContent } from "./types";

type PreviewCallback = (story: Story) => void;

type PreviewsCallback = (stories: Story[]) => void;

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

export async function enablePreviews(
  stories: Story[],
  callback: PreviewsCallback
) {
  stories.forEach((story, index) => {
    enablePreview(story.id, (newStory) => {
      stories[index] = newStory;
      callback(stories);
    });
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
