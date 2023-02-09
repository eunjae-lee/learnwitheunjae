<script lang="ts">
  import { renderRichText } from '@lwe/content';
  import { Github, Instagram, Mail, Twitter } from 'lucide-svelte';
  import type { AboutData } from './types';

  export let data: AboutData;
</script>

<div>
  <h1 class="text-secondary text-xl font-medium">
    {data.title}
  </h1>
  <p class="mt-8">
    <img class="w-48" src={data.image.filename} alt="Eunjae Lee" />
  </p>
  <div class="mt-8 flex flex-col gap-6 leading-relaxed font-light">
    {@html renderRichText(data.description)}
  </div>
  <div class="mt-8 text-base flex flex-col gap-2 sm:flex-row sm:gap-6 font-light">
    <a
      class="flex items-center gap-1 no-underline"
      rel="noreferrer"
      href={data.twitter.url}
      target="_blank"><Twitter size={20} /><span>Twitter</span></a
    >
    <a
      class="flex items-center gap-1 no-underline"
      rel="noreferrer"
      href={data.github.url}
      target="_blank"><Github size={20} /><span>GitHub</span></a
    >
    <a
      class="flex items-center gap-1 no-underline"
      rel="noreferrer"
      href={data.instagram.url}
      target="_blank"><Instagram size={20} /><span>Instagram</span></a
    >
    <a
      class="flex items-center gap-1 no-underline"
      rel="noreferrer"
      href={`mailto:${data.email}`}
      target="_blank"><Mail size={20} /><span>hey@learnwitheunjae.dev</span></a
    >
  </div>
</div>
