<script lang="ts">
  import { page } from "$app/stores";
  import { type MenuItem, getClassForMenuItem } from "./NavBar";

  export let item: MenuItem;
  export let useWhiteUnderline: boolean;
</script>

<a
  href={item.href}
  class={"flex gap-1 text-sm font-light btn btn-ghost normal-case " +
    getClassForMenuItem(item.href === $page.url.pathname, useWhiteUnderline)}
>
  {#if item.icon}
    <svelte:component this={item.icon} size={16} />
  {/if}
  {item.label}
</a>
