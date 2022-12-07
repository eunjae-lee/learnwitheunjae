<script lang="ts">
  import { renderRichText, storyblokEditable } from "@lwe/content";
  import type { Image, Link, RichText, Story } from "@lwe/content/src/types";

  export let story: Story<{
    no: number;
    title: string;
    description: string;
    short_description: string;
    long_description: string;
  }>;
  let blok = story.content;
</script>

<section use:storyblokEditable={blok}>
  <h2 class="text-lg font-medium flex items-center">
    {blok.no}. {blok.title}
  </h2>
  <p class="mt-2">{blok.description}</p>
</section>
