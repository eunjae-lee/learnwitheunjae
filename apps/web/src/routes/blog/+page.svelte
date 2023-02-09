<script>
  import Footer from '$lib/components/Footer.svelte';
  import Meta from '$lib/components/Meta.svelte';
  import NavBar from '$lib/components/NavBar/NavBar.svelte';

  export let data;
  const { posts } = data;
</script>

<Meta title="블로그" />

<NavBar />

<main class="narrow-inner-container my-16">
  <h1>
    <span class="text-secondary text-xl font-medium">블로그</span>
  </h1>

  <ol class="mt-16">
    {#each posts as post}
      <li>
        <a href={`/blog/${post.slug}`} title={post.metadata.title}>
          <p class="mt-3 text-xl line-clamp-1">{post.metadata.title}</p>
          <p class="mt-3 opacity-75 line-clamp-3 font-light">{post.metadata.excerpt}</p>
        </a>
      </li>
    {/each}
  </ol>
</main>

<Footer />

<style>
  ul.desc {
    @apply mt-2;
  }
  ul.desc > li {
    @apply ml-5 list-disc font-light leading-loose;
  }

  .narrow-inner-container {
    min-height: calc(100vh - 22rem);
  }
</style>
