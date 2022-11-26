<script lang="ts">
  import Footer from "$lib/components/Footer.svelte";
  import Meta from "$lib/components/Meta.svelte";
  import NavBar from "$lib/components/NavBar/NavBar.svelte";
  import { IS_PREVIEW_MODE, type Story, enablePreviews } from "@lwe/content";
  import StoryblokComponent from "$lib/components/storyblok";
  import { onMount } from "svelte";

  export let data: {
    stories: Story[];
    full_slug: string;
  };

  $: course = data.stories.find(
    (story) => story.full_slug === data.full_slug
  ) as Story;

  $: episodes = data.stories
    .filter((story) => story.full_slug !== data.full_slug)
    .sort((a, b) => a.content.no - b.content.no);

  onMount(() => {
    if (IS_PREVIEW_MODE) {
      enablePreviews(data.stories, (newStories) => {
        data.stories = newStories;
      });
    }
  });
</script>

<Meta title={course.name} />

<NavBar />

<main class="inner-container my-16">
  {#key course.id}
    <StoryblokComponent story={course} />
  {/key}
  {#if false && episodes.length > 0}
    <section class="mt-16">
      <p class="text-secondary text-lg font-medium">에피소드</p>
      <div class="mt-4 flex flex-col gap-4">
        {#each episodes as episode (episode.id)}
          <StoryblokComponent story={episode} />
        {/each}
      </div>
    </section>
  {/if}
</main>

<Footer />

<style>
  .inner-container {
    min-height: calc(100vh - 18rem);
  }
</style>
