<script>
  import "../app.css";
  import LogRocket from "logrocket";
  import { dev } from "$app/environment";

  if (!dev) {
    LogRocket.init("22xiec/learn-with-eunjae");
  }

  const title = "Learn with Eunjae";
  const excerpt = "";
  const url = "https://learnwitheunjae.dev";
  const ogImage = "https://og.learnwitheunjae.dev/api/og?type=root";
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={excerpt} />
  <meta name="author" content="Eunjae Lee" />

  <!-- Facebook Meta Tags -->
  <meta property="og:url" content={url} />
  <meta property="og:type" content="website" />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={excerpt} />
  <meta property="og:image" content={ogImage} />

  <!-- Twitter Meta Tags -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta property="twitter:url" content={url} />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={excerpt} />
  <meta name="twitter:image" content={ogImage} />
</svelte:head>

<slot />
