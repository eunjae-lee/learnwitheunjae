<script lang="ts">
  const year = new Date().getFullYear();
</script>

<div class="bg-primary p-8 text-xs text-base-100 font-light">
  <div class="ml-[20%] flex sm:flex-col sm:ml-[0] sm:items-center sm:gap-6">
    <div class="grow flex flex-col gap-2 sm:gap-4 sm:flex-row">
      <a href="/">About</a>
      <a href="/">Blog</a>
      <a href="/">Speak</a>
      <a href="/">Contact</a>
    </div>
    <div class="grow flex flex-col gap-2 sm:gap-4 sm:flex-row">
      <a href="/">Twitter</a>
      <a href="/">GitHub</a>
      <a href="/">Instagram</a>
      <a href="/">RSS Feed</a>
    </div>
  </div>
  <p class="mt-6 text-center">© {year} Eunjae Lee. All rights reserved.</p>
</div>
