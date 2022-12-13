<script lang="ts">
  import { renderRichText, storyblokEditable, type Story } from "@lwe/content";
  import type { AboutData, CourseDetailData } from "./types";
  import Table from "./_Table.svelte";
  import About from "./_About.svelte";
  import SubscriptionBox from "../SubscriptionBox.svelte";
  import EpisodesTable from "./_EpisodesTable.svelte";

  export let story: Story<CourseDetailData>;
  export let links: Story<AboutData>[];
  let blok = story.content;
  let about = links[0].content;
</script>

<section
  use:storyblokEditable={blok}
  class="course-detail flex flex-col gap-24"
>
  <div>
    <h1 class="text-secondary text-4xl font-medium">{blok.title}</h1>
    <p class="mt-4 text-xl font-medium opacity-75">{blok.short_description}</p>

    <div class="mt-8 max-w-md">
      {#if blok.show_subscription_box}
        <SubscriptionBox
          title={`${blok.title} 소식 받기`}
          slug={blok.subscription_slug}
        />
      {/if}
    </div>
  </div>

  <div class="rich-text">
    {@html renderRichText(blok.long_description)}
  </div>

  <div>
    <h2>혹시,</h2>
    <div class="rich-text mt-6">
      {@html renderRichText(blok.questions)}
    </div>
  </div>

  <div>
    <h2>어떤 분들을 위한 강의냐면,</h2>
    <div class="rich-text mt-6">
      {@html renderRichText(blok.who_is_it_for)}
    </div>
  </div>

  <div>
    <h2>강의로 얻으실 수 있는 것</h2>
    <div class="rich-text mt-6">
      {@html renderRichText(blok.what_you_will_get)}
    </div>
  </div>

  <div class="flex flex-col gap-24">
    {#each blok.episodes_table as episodes_table}
      <EpisodesTable data={episodes_table} />
    {/each}
  </div>

  <div>
    <h2>강의 가격</h2>
    <div class="mt-6">
      <Table data={blok.pricing_table} />
    </div>
  </div>

  <div>
    <div class="rich-text mt-6">
      {@html renderRichText(blok.description_after_pricing_table)}
    </div>
  </div>

  {#each blok.faqs as faq (faq._uid)}
    <div>
      <h2>
        {faq.title}
      </h2>
      <div class="mt-4 flex flex-col gap-4">
        {#each faq.items as item (item._uid)}
          <details>
            <summary>
              {@html renderRichText(item.question)}
            </summary>
            <div class="my-2">
              {@html renderRichText(item.answer)}
            </div>
          </details>
        {/each}
      </div>
    </div>
  {/each}

  {#if blok.show_subscription_box}
    <div class="max-w-md">
      <SubscriptionBox
        title={`${blok.title} 소식 받기`}
        slug={blok.subscription_slug}
      />
    </div>
  {/if}

  <div class="mt-16"><About data={about} /></div>
</section>

<style>
  .course-detail :global(h2),
  .course-detail :global(.rich-text h2) {
    @apply text-secondary text-2xl font-medium;
  }

  .course-detail :global(.rich-text) {
    @apply text-lg font-light leading-relaxed;
  }
  .course-detail :global(.rich-text p) {
    @apply mt-4;
  }
  .course-detail :global(.rich-text p:first-child) {
    @apply mt-0;
  }
  .course-detail :global(.rich-text li) {
    @apply ml-5 sm:ml-0;
  }
  .course-detail :global(.rich-text ul > li) {
    @apply list-circle mt-4;
  }
  .course-detail :global(.rich-text ol > li) {
    @apply list-decimal mt-4;
  }
  .course-detail :global(details) {
    @apply leading-relaxed;
  }
  .course-detail :global(details a) {
    @apply text-primary;
  }
  .course-detail :global(summary) {
    @apply cursor-pointer font-medium;
  }
  .course-detail :global(summary > p) {
    @apply inline-block ml-2;
  }
  .course-detail :global(summary + div) {
    @apply font-light;
  }
  .course-detail :global(summary + div > p) {
    @apply mt-4;
  }

  .course-detail :global(pre) {
    @apply bg-gray-800 text-gray-400 rounded-md text-sm py-2 px-4 inline-block;
  }

  .course-detail :global(p > code) {
    @apply border border-primary text-primary text-sm rounded-md py-1 px-2 font-normal;
  }
</style>
