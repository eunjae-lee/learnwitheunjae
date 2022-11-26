<script lang="ts">
  import { page } from "$app/stores";

  export let title: string;
  export let description: string | undefined = undefined;

  const isRoot = $page.url.pathname === "/";
  let fullTitle = isRoot ? title : `${title} | Learn with Eunjae`;
  let url = $page.url.href;
  let ogImage = `https://og.learnwitheunjae.dev/api/og?${
    isRoot
      ? "type=root"
      : `title=${encodeURIComponent(title)}&description=${
          description ? encodeURIComponent(description) : ""
        }`
  }`;
</script>

<svelte:head>
  <title>{fullTitle}</title>
  {#if description}
    <meta name="description" content={description} />
    <meta property="og:description" content={description} />
    <meta name="twitter:description" content={description} />
  {/if}

  <meta name="theme-color" content={$page.data.themeColor} />
  <meta name="author" content="Eunjae Lee" />

  <meta property="og:url" content={url} />
  <meta property="og:type" content="website" />
  <meta property="og:title" content={fullTitle} />
  <meta property="og:image" content={ogImage} />

  <meta name="twitter:card" content="summary_large_image" />
  <meta property="twitter:url" content={url} />
  <meta name="twitter:title" content={fullTitle} />
  <meta name="twitter:image" content={ogImage} />
</svelte:head>
