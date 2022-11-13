<script lang="ts">
  import { page } from "$app/stores";
  const year = new Date().getFullYear();

  const isSecondary = $page.url.pathname !== "/";
</script>

<div
  class:bg-primary={!isSecondary}
  class:bg-secondary={isSecondary}
  class="bg-primary p-8 text-xs text-base-100 font-light"
>
  <div class="ml-[20%] flex sm:flex-col sm:ml-[0] sm:items-center sm:gap-6">
    <div class="grow flex flex-col gap-2 sm:gap-4 sm:flex-row">
      <a href="/community">Community</a>
      <a href="/about">About</a>
      <!-- <a href="/">Blog</a>
      <a href="/">Speak</a> -->
    </div>
    <div class="grow flex flex-col gap-2 sm:gap-4 sm:flex-row">
      <a rel="noreferrer" href="https://twitter.com/learnwitheunjae">Twitter</a>
      <a rel="noreferrer" href="https://github.com/eunjae-lee/learnwitheunjae"
        >GitHub</a
      >
      <a rel="noreferrer" href="https://instagram.com/eunjae.dev">Instagram</a>
      <!-- <a href="/">RSS Feed</a> -->
    </div>
  </div>
  <p class="mt-6 text-center">© {year} Eunjae Lee. All rights reserved.</p>
</div>
