<script lang="ts">
  import { page } from "$app/stores";
</script>

<div class="w-screen h-screen flex justify-center items-center">
  {#if $page.status === 404}
    <p>There is no fancy 404 page yet.</p>
  {:else}
    <p>Something went wrong. Sorry, I'll look into it.</p>
  {/if}
</div>
