<script lang="ts">
  import Article from '$lib/components/Article.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import Meta from '$lib/components/Meta.svelte';
  import NavBar from '$lib/components/NavBar/NavBar.svelte';
  import type { Metadata } from '../+page';

  type Data = {
    content: import('svelte').ComponentType;
    metadata: Metadata;
  };

  export let data: Data;
</script>

<Meta title="사이드 프로젝트 뉴스레터" />

<NavBar />

<main class="inner-container my-16">
  <a href="/spn" class="text-sm">사이드 프로젝트 뉴스레터</a>

  <h1 class="mt-4 text-secondary text-xl font-medium">{data.metadata.title}</h1>

  <div class="mt-8">
    <Article content={data.content} />
  </div>
</main>
