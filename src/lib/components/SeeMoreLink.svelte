<script lang="ts">
  import { ArrowRight } from "lucide-svelte";

  export let href: string;
</script>

<a {href} class="text-primary text-sm font-medium inline-flex items-center"
  ><span>더 보기</span><ArrowRight size={16} /></a
>
