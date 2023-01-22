<script lang="ts">
  import Footer from '$lib/components/Footer.svelte';
  import Meta from '$lib/components/Meta.svelte';
  import NavBar from '$lib/components/NavBar/NavBar.svelte';
  import type { Metadata } from '../+page';
  import Article from '$lib/components/Article.svelte';

  type Data = {
    content: import('svelte').ComponentType;
    metadata: Metadata;
  };

  export let data: Data;
</script>

<Meta title={data.metadata.title} />

<NavBar />

<main class="narrow-inner-container my-16">
  <h1 class="mt-8 text-secondary text-xl font-medium">{data.metadata.title}</h1>

  <div class="mt-8">
    <Article content={data.content} />
  </div>
</main>
