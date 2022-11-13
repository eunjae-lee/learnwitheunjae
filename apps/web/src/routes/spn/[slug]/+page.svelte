<script lang="ts">
  type Data = {
    content: import("svelte").ComponentType;
    metadata: {
      title: string;
    };
  };

  export let data: Data;
</script>

<svelte:component this={data.content} />
