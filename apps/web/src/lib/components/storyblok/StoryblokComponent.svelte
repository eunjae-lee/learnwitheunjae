<script>
  // @ts-nocheck

  import { components } from "./_componentsMap";

  export let story;
  export let blok;
</script>

<svelte:component
  this={components[blok.component]}
  {blok}
  {story}
  {...$$restProps}
/>
