<script lang="ts">
  import Footer from "$lib/components/Footer.svelte";
  import Meta from "$lib/components/Meta.svelte";
  import NavBar from "$lib/components/NavBar/NavBar.svelte";
  import StoryblokComponent from "$lib/components/storyblok/StoryblokComponent.svelte";
  import { enablePreview, IS_PREVIEW_MODE, type Story } from "@lwe/content";
  import { onMount } from "svelte";

  export let data: {
    story: Story;
  };

  onMount(() => {
    if (IS_PREVIEW_MODE) {
      enablePreview(data.story, (newStory) => {
        data.story = newStory;
      });
    }
  });
</script>

<Meta title="소개" />

<NavBar />

<main class="narrow-inner-container my-16">
  {#key data.story.id}
    <StoryblokComponent story={data.story} />
  {/key}
</main>

<Footer />

<style>
  .narrow-inner-container {
    min-height: calc(100vh - 22rem);
  }
</style>
