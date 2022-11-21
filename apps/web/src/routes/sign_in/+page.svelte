<script lang="ts">
  import { signIn } from "@lwe/db";
  import { onMount } from "svelte";

  onMount(() => {
    signIn();
  });
</script>
