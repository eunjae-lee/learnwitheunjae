<script lang="ts">
  import type { Table } from "@lwe/content";

  export let data: Table;

  let numColumns = data.thead.length;
</script>

<div class={`grid grid-cols-${numColumns} gap-x-4 gap-y-2`}>
  {#each data.thead as head}
    <div class="text-secondary text-lg font-medium">
      {head.value}
    </div>
  {/each}

  {#each data.tbody as body}
    {#each body.body as bodyItem}
      <div class="font-light">{bodyItem.value}</div>
    {/each}
  {/each}
</div>
