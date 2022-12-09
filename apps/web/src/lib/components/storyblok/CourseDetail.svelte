<script lang="ts">
  import { renderRichText, storyblokEditable, type Story } from "@lwe/content";
  import type { AboutData, CourseDetailData } from "./types";
  import Table from "./_Table.svelte";
  import About from "./_About.svelte";
  import SubscriptionBox from "../SubscriptionBox.svelte";

  export let story: Story<CourseDetailData>;
  export let links: Story<AboutData>[];
  let blok = story.content;
  let about = links[0].content;
</script>

<section use:storyblokEditable={blok} class="flex flex-col gap-24">
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
            <div>
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
  h2,
  .rich-text :global(h2) {
    @apply text-secondary text-2xl font-medium;
  }

  .rich-text {
    @apply text-lg font-light leading-relaxed;
  }
  .rich-text :global(p) {
    @apply mt-4;
  }
  .rich-text :global(p):first-child {
    @apply mt-0;
  }
  .rich-text :global(li) {
    @apply ml-5 sm:ml-0;
  }
  .rich-text :global(ul > li) {
    @apply list-circle mt-4;
  }
  .rich-text :global(ol > li) {
    @apply list-decimal mt-4;
  }
  :global(details) {
    @apply leading-relaxed;
  }
  :global(details a) {
    @apply text-primary;
  }
  :global(summary) {
    @apply cursor-pointer font-medium;
  }
  :global(summary > p) {
    @apply inline-block ml-2;
  }
  :global(summary + div) {
    @apply my-2 font-light;
  }
  :global(summary + div > p) {
    @apply mt-4;
  }
</style>
