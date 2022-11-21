<script lang="ts">
  import { renderRichText, storyblokEditable } from "@lwe/content";
  import type { Image, Link, RichText, Story } from "@lwe/content/src/types";
  import SubscriptionBox from "../SubscriptionBox.svelte";

  export let story: Story<{
    image: Image;
    image_source_title: string;
    image_source_url: Link;
    description: RichText;
    preparing: boolean;
  }>;
  export let blok: typeof story["content"];
</script>

<section use:storyblokEditable={blok}>
  <h2 class="text-secondary text-xl font-medium">{blok.title}</h2>
  <div class="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-16">
    <div class="basis-1/2">
      <img
        class="w-full rounded-md"
        src={blok.image.filename}
        alt={blok.title}
      />
      <p class="mt-1 opacity-50 text-xs text-right">
        <a rel="noreferrer" target="_blank" href={blok.image_source_url.url}
          >이미지 출처: {blok.image_source_title}</a
        >
      </p>
    </div>
    <div class="basis-1/2">
      <div class="flex flex-col gap-4 font-light leading-relaxed">
        {@html renderRichText(blok.description)}
      </div>
      {#if blok.preparing}
        <SubscriptionBox
          title={`${blok.title} 런칭 소식 받기`}
          slug={story.slug}
        />
      {/if}
    </div>
  </div>
</section>
