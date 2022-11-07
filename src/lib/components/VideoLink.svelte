<script lang="ts">
  import ThumbnailPlaceholder from "./ThumbnailPlaceholder.svelte";

  export let href: string = "/";
  export let title: string = "Rust 배워보기 Rust 배워보기Rust 배워보기";
  export let descrption: string =
    "이번 에피소드에서는 요즘 웹 생태계 중에 툴링 스페이스에 깊이 들어오고 있는 Rust 를 한번 배워봅니다. 이번 에피소드에서는 요즘 웹 생태계 중에 툴링 스페이스에 깊이 들어오고 있는 Rust 를 한번 배워봅니다.";
</script>

<a {href} {title}>
  <ThumbnailPlaceholder />
  <p class="mt-3 text-lg line-clamp-1">
    {title}
  </p>
  <p class="mt-2 font-light line-clamp-3">
    {descrption}
  </p>
</a>
