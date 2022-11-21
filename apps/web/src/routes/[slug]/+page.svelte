<script lang="ts">
  import Footer from "$lib/components/Footer.svelte";
  import Meta from "$lib/components/Meta.svelte";
  import NavBar from "$lib/components/NavBar/NavBar.svelte";
  import { IS_PREVIEW_MODE, enablePreview } from "@lwe/content";
  import StoryblokComponent from "$lib/components/storyblok";
  import { onMount } from "svelte";

  export let data: any;

  onMount(() => {
    if (IS_PREVIEW_MODE) {
      enablePreview(data.story.id, (newStory) => (data.story = newStory));
    }
  });
</script>

<Meta title={data.story.name} />

<NavBar />

<main class="inner-container my-16">
  <StoryblokComponent story={data.story} />
</main>

<Footer />

<style>
  .inner-container {
    min-height: calc(100vh - 18rem);
  }
</style>
