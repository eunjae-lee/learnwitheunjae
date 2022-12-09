<script lang="ts">
  import Footer from "$lib/components/Footer.svelte";
  import Meta from "$lib/components/Meta.svelte";
  import NavBar from "$lib/components/NavBar/NavBar.svelte";
  import {
    IS_PREVIEW_MODE,
    type Story,
    enablePreview,
    type Link,
  } from "@lwe/content";
  import StoryblokComponent from "$lib/components/storyblok";
  import { onMount } from "svelte";

  export let data: {
    story: Story;
    links: Link[];
  };

  onMount(() => {
    if (IS_PREVIEW_MODE) {
      enablePreview(data.story, (newStory) => {
        data.story = newStory;
      });
    }
  });
</script>

<Meta
  title={data.story.name}
  description={data.story.content.short_description}
/>

<NavBar />

<main class="inner-container my-16">
  {#key data.story.id}
    <StoryblokComponent story={data.story} links={data.links} />
  {/key}
</main>

<Footer />

<style>
  .inner-container {
    min-height: calc(100vh - 18rem);
  }
</style>
