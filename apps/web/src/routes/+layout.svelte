<script lang="ts">
  import '../app.css';
  import LogRocket from 'logrocket';
  import { dev } from '$app/environment';
  import { invalidate } from '$app/navigation';
  import { onMount } from 'svelte';
  import type { PageData } from './+layout';

  export let data: PageData;

  if (!dev) {
    LogRocket.init('22xiec/learn-with-eunjae');
  }
</script>

<div style="--theme-color: {data.themeColor}">
  <slot />
</div>

<style>
  :global(*)::-moz-selection {
    /* Code for Firefox */
    color: #fbf4ef;
    background: var(--theme-color);
  }

  :global(*)::selection {
    color: #fbf4ef;
    background: var(--theme-color);
  }
</style>
