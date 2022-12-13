<script lang="ts">
  import { renderRichText } from "@lwe/content";
  import { ChevronsUpDown } from "lucide-svelte";
  import type { EpisodesTable } from "./types";

  export let data: EpisodesTable;

  let open = false;
</script>

<div>
  <h2>{data.title}</h2>
  <div class="rich-text my-6">
    {@html renderRichText(data.description)}
  </div>
  {#if open === false}
    <button
      class="btn btn-ghost -mt-4 -ml-4 gap-1"
      on:click={() => (open = true)}
      ><ChevronsUpDown size={14} /><span>모두 펼치기</span></button
    >
  {/if}
  {#each data.episodes as episode}
    <details {open} class="rich-text my-4">
      <summary>
        <p>{episode.title}</p>
      </summary>
      <div class="mt-4 mb-8 ml-6">
        {@html renderRichText(episode.description)}
      </div>
    </details>
  {/each}
</div>

<style>
  h2 {
    @apply text-secondary text-2xl font-medium;
  }
</style>
