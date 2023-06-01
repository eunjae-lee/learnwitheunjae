<script lang="ts">
  import { storyblokEditable } from '@lwe/content';
  import type { Story } from '@lwe/content/src/types';
  import type { CourseSummaryData } from './types';
  import CourseSummary from './_CourseSummary.svelte';

  export let story: Story<{
    course_summaries: CourseSummaryData[];
  }>;
  let blok = story.content;
  let courseSummaries = story.content.course_summaries.filter((summary) => !summary.hide);
</script>

<div use:storyblokEditable={blok} class="flex flex-col gap-24">
  {#each courseSummaries as summary (summary.title)}
    <CourseSummary {summary} />
  {/each}
</div>
