<script lang="ts">
  import { page } from "$app/stores";

  let is404 = $page.error!.message === "Error: 404";
</script>

<div class="w-screen h-screen flex justify-center items-center">
  {#if is404}
    <p>There is no pretty 404 page yet.</p>
  {:else}
    <p>Something went wrong. Sorry, I'll look into it.</p>
  {/if}
</div>
