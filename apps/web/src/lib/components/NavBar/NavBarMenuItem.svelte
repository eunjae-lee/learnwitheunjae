<script lang="ts">
  import { page } from "$app/stores";
  import { type MenuItem, getClassForMenuItem } from "./NavBar";

  export let item: MenuItem;
  export let isSecondary: boolean;
  export let active: boolean;
</script>

<a
  href={item.href}
  class={`flex gap-2 ${getClassForMenuItem(
    item.href === $page.url.pathname,
    isSecondary
  )}`}
  class:active
>
  {#if item.icon}
    <svelte:component this={item.icon} size={16} />
  {/if}
  {item.shortLabel || item.label}
</a>
