<script lang="ts">
  import { signIn } from "@lwe/db";
  import { onMount } from "svelte";

  export let data: {
    redirectTo: string;
  };

  onMount(() => {
    signIn(data.redirectTo);
  });
</script>
