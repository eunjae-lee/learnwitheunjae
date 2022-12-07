<script lang="ts">
  import { renderRichText, storyblokEditable } from "@lwe/content";
  import type { Story } from "@lwe/content/src/types";
  import type { AboutData } from "./types";
  import Comp from "./_About.svelte";

  export let story: Story<AboutData>;
  let blok = story.content;
</script>

<div use:storyblokEditable={blok}>
  <Comp data={blok} />
</div>
