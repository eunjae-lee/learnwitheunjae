<script lang="ts">
  import { renderRichText, storyblokEditable, type Story } from "@lwe/content";
  import type { AboutData, CourseDetailData } from "./types";
  import Table from "./_Table.svelte";
  import About from "./_About.svelte";
  import { Twitter } from "lucide-svelte";

  export let story: Story<CourseDetailData>;
  export let links: Story<AboutData>[];
  let blok = story.content;
  let about = links[0].content;
</script>

<section use:storyblokEditable={blok} class="flex flex-col gap-24">
  <div>
    <h1 class="text-secondary text-4xl font-medium">{blok.title}</h1>
    <p class="mt-4 text-xl font-medium opacity-75">{blok.short_description}</p>

    <div class="mt-8">
      <a
        class="btn btn-primary hover:no-underline btn-lg normal-case gap-2 py-4 h-[unset] leading-relaxed"
        href="https://twitter.com/messages/compose?recipient_id=1490226821903925248&text=%EC%8B%9C%EB%82%98%EB%B8%8C%EB%A1%9C%20%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%20%EC%82%AC%EC%A0%84%20%EA%B5%AC%EB%A7%A4%20%EC%8B%A0%EC%B2%AD%ED%95%A9%EB%8B%88%EB%8B%A4."
        target="_blank"
        rel="noopener noreferrer"
      >
        <Twitter size={18} />
        사전구매 신청하기 (@eunjae_lee_ko 으로 디엠)
      </a>
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

  <div>
    <a
      class="btn btn-primary hover:no-underline btn-lg normal-case gap-2 py-4 h-[unset] leading-relaxed"
      href="https://twitter.com/messages/compose?recipient_id=1490226821903925248&text=%EC%8B%9C%EB%82%98%EB%B8%8C%EB%A1%9C%20%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%20%EC%82%AC%EC%A0%84%20%EA%B5%AC%EB%A7%A4%20%EC%8B%A0%EC%B2%AD%ED%95%A9%EB%8B%88%EB%8B%A4."
      target="_blank"
      rel="noopener noreferrer"
    >
      <Twitter size={18} />
      사전구매 신청하기 (@eunjae_lee_ko 으로 디엠)
    </a>
  </div>

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
