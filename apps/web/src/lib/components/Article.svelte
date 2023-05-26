<script lang="ts">
  import '$lib/prism-one-dark.css';

  export let content: import('svelte').ComponentType;
</script>

<article>
  <svelte:component this={content} />
</article>

<style>
  article {
    @apply font-light;
  }

  article :global(h2) {
    @apply text-lg text-secondary my-8;
  }

  article :global(a) {
    @apply text-primary;
  }

  article :global(*) {
    @apply my-4 leading-loose;
  }

  article :global(p > code) {
    @apply border border-orange-300 text-sm py-1 px-2 rounded-md text-gray-700;
  }

  article :global(p > a) {
    @apply break-all;
  }

  article :global(blockquote) {
    @apply my-6 border-l-8 pl-3 border-primary;
  }
  
  article :global(ol > li) {
    @apply list-decimal ml-5 my-0;
  }

  article :global(ol > li > ol) {
    @apply my-0;
  }

  article :global(ul > li) {
    @apply list-disc ml-5 my-0;
  }

  article :global(ul > li > ul) {
    @apply my-0;
  }

  article :global(strong) {
    @apply font-medium;
  }

  article :global(hr) {
    @apply border-collapse border-primary opacity-25 my-6;
  }
</style>
