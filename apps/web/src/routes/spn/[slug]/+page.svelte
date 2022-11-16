<script lang="ts">
  import Footer from "$lib/components/Footer.svelte";
  import Meta from "$lib/components/Meta.svelte";
  import NavBar from "../../NavBar.svelte";
  import type { Metadata } from "../+page";
  import "./prism-one-dark.css";

  type Data = {
    content: import("svelte").ComponentType;
    metadata: Metadata;
  };

  export let data: Data;
</script>

<Meta title="사이드 프로젝트 뉴스레터" />

<NavBar />

<main class="inner-container my-16">
  <a href="/spn" class="text-sm">사이드 프로젝트 뉴스레터</a>

  <h1 class="mt-4 text-secondary text-xl font-medium">{data.metadata.title}</h1>

  <article class="mt-8">
    <svelte:component this={data.content} />
  </article>
</main>

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

  article :global(blockquote) {
    @apply my-6 border-l-8 pl-3 border-primary;
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
