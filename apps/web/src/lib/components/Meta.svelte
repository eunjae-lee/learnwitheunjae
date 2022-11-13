<script lang="ts">
  import { page } from "$app/stores";

  export let title: string;
  export let description: string | undefined = undefined;

  let url = $page.url.href;
  let safariThemeColor = $page.url.pathname === "/" ? "#de4500" : "#202d85";
  let ogImage = "https://og.learnwitheunjae.dev/api/og?type=root";
</script>

<svelte:head>
  <title>{title}</title>
  {#if description}
    <meta name="description" content={description} />
    <meta property="og:description" content={description} />
    <meta name="twitter:description" content={description} />
  {/if}

  <meta name="theme-color" content={safariThemeColor} />
  <meta name="author" content="Eunjae Lee" />

  <meta property="og:url" content={url} />
  <meta property="og:type" content="website" />
  <meta property="og:title" content={title} />
  <meta property="og:image" content={ogImage} />

  <meta name="twitter:card" content="summary_large_image" />
  <meta property="twitter:url" content={url} />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:image" content={ogImage} />
</svelte:head>
