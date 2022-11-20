<script lang="ts">
  import { page } from "$app/stores";
  import { type MenuItem, getClassForMenuItem } from "./NavBar";

  const currentPathname = $page.url.pathname;

  export let item: MenuItem;
  export let isSecondary: boolean;
  export let active: boolean;
</script>

<a
  href={item.href}
  on:click={(event) => {
    if (item.onClick) {
      event.preventDefault();
      item.onClick();
    }
  }}
  class={`flex gap-2 ${getClassForMenuItem(
    item.href === currentPathname,
    isSecondary
  )}`}
  class:active
>
  {#if item.icon}
    <svelte:component this={item.icon} size={16} />
  {/if}
  {item.shortLabel || item.label}
</a>
