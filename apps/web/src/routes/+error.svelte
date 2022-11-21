<script lang="ts">
  import { page } from "$app/stores";

  let is404 = $page.error!.message === "Error: 404";
</script>

<div class="w-screen h-screen flex justify-center items-center">
  {#if is404}
    <p>There is no pretty 404 page yet.</p>
  {/if}
</div>
