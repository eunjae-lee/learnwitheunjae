<script>
  import "../app.css";
  import LogRocket from "logrocket";
  import { dev } from "$app/environment";
  import { invalidate } from "$app/navigation";
  import { subscribeToAuthStateChange } from "@lwe/db";
  import { onMount } from "svelte";
  import { IS_PREVIEW_MODE } from "@lwe/content";

  if (!dev) {
    LogRocket.init("22xiec/learn-with-eunjae");
  }

  onMount(() => {
    // https://supabase.com/docs/guides/with-sveltekit
    const unsubscriber = subscribeToAuthStateChange({
      onChange: () => {
        invalidate("supabase:auth");
      },
    });

    return unsubscriber;
  });
</script>

<slot />

{#if IS_PREVIEW_MODE}
  <script
    src="//app.storyblok.com/f/storyblok-v2-latest.js"
    type="text/javascript"
  >
  </script>
{/if}

<style>
  ::-moz-selection {
    /* Code for Firefox */
    color: #fbf4ef;
    background: #202d85;
  }

  ::selection {
    color: #fbf4ef;
    background: #202d85;
  }
</style>
