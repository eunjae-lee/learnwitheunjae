<script lang="ts">
  import { renderRichText } from "@lwe/content";
  import { ArrowRight } from "lucide-svelte";
  import SubscriptionBox from "../SubscriptionBox.svelte";
  import type { CourseSummaryData } from "./types";

  export let summary: CourseSummaryData;
</script>

<section>
  <h2 class="text-secondary text-xl font-medium">{summary.title}</h2>
  <p class="font-medium opacity-75">{summary.subtitle}</p>
  <div class="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-16">
    <div class="basis-1/2">
      <img
        class="w-full rounded-md"
        src={summary.image.filename}
        alt={summary.title}
      />
      <p class="mt-1 opacity-50 text-xs text-right">
        <a rel="noreferrer" target="_blank" href={summary.image_source_url.url}
          >이미지 출처: {summary.image_source_title}</a
        >
      </p>
    </div>
    <div class="basis-1/2">
      <div class="flex flex-col gap-4 font-light leading-relaxed">
        {@html renderRichText(summary.description)}
      </div>
      <div class="mt-8 sm:mt-6 flex flex-col gap-8">
        {#if summary.show_subscription_box}
          <SubscriptionBox
            title={`${summary.title} 런칭 소식 받기`}
            slug={summary.subscription_slug}
            useOutlineButton={summary.show_detail_button}
          />
        {/if}
        {#if summary.show_detail_button}
          <div class="flex justify-end">
            <a
              class="w-full btn btn-primary hover:no-underline gap-1"
              href={summary.detail_path}
              ><span>자세한 강좌 소개</span><ArrowRight size={16} /></a
            >
          </div>
        {/if}
      </div>
    </div>
  </div>
</section>
