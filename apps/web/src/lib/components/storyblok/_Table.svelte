<script lang="ts">
  import type { Table } from "@lwe/content";

  export let data: Table;
  let numColumns = data.thead.length;
</script>

<div class={`flex flex-col gap-8 sm:flex-row sm:gap-16`}>
  {#each Array(numColumns) as _, i}
    <div class="flex flex-col gap-3">
      <div class="text-secondary text-lg font-medium">
        {data.thead[i].value}
      </div>
      {#each data.tbody as body}
        <div class="font-light">{body.body[i].value}</div>
      {/each}
    </div>
  {/each}
</div>
