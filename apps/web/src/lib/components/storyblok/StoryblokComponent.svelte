<script>
  // @ts-nocheck

  import { components } from "./_componentsMap";

  export let story;
</script>

<svelte:component
  this={components[story.content.component]}
  {story}
  {...$$restProps}
/>
