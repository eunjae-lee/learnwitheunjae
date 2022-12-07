<script lang="ts">
  import { storyblokEditable } from "@lwe/content";
  import type { Story } from "@lwe/content/src/types";
  import type { CourseSummaryData } from "./types";
  import CourseSummary from "./CourseSummary.svelte";

  export let story: Story<{
    course_summaries: CourseSummaryData[];
  }>;
  let blok = story.content;
</script>

<div use:storyblokEditable={blok} class="flex flex-col gap-24">
  {#each blok.course_summaries as summary (summary.title)}
    <CourseSummary {summary} />
  {/each}
</div>
