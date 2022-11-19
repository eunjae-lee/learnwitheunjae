<script>
  import Footer from "$lib/components/Footer.svelte";
  import Meta from "$lib/components/Meta.svelte";
  import { Github, Instagram, Mail, Twitter } from "lucide-svelte";
  import NavBar from "../NavBar.svelte";
</script>

<Meta title="소개" />

<NavBar />

<main class="narrow-inner-container my-16">
  <h1 class="text-secondary text-xl font-medium">
    안녕하세요, 이은재입니다 👋
  </h1>
  <p class="mt-8">
    <img
      class="rounded-full w-48 border-primary border-8"
      src="/profile.jpg"
      alt="Eunjae Lee"
    />
  </p>
  <div class="mt-8">
    <p>
      저는 웹 개발을 하고 있어요. 이런저런 일들을 하다 보니 자연스레 Full-stack
      이 되었지만, 항상 Frontend 쪽에 관심이 더 많이 가 있는 것 같아요.
    </p>
    <p class="mt-6">
      한국에서 직장 생활을 하다가, 우연한 기회에 싱가포르로 이주하게 되어 2년을
      살았고, 또 다른 우연한 기회로 2019년에 프랑스까지 오게 되었네요.
    </p>
    <p class="mt-6">
      웹 개발 관련해서 많은 것들에 관심을 갖고 새로운 것들을 즐겁게 시도해 보는
      편이에요. 그래서 다양한 사이드 프로젝트를 만들기도 하고, 강좌도 만들고
      있습니다.
    </p>
  </div>
  <div class="mt-8 text-base flex flex-col gap-2 sm:flex-row sm:gap-6">
    <a
      class="flex items-center gap-1 no-underline"
      rel="noreferrer"
      href="https://twitter.com/eunjae_lee_ko"
      target="_blank"><Twitter size={20} /><span>Twitter</span></a
    >
    <a
      class="flex items-center gap-1 no-underline"
      rel="noreferrer"
      href="https://github.com/eunjae-lee"
      target="_blank"><Github size={20} /><span>GitHub</span></a
    >
    <a
      class="flex items-center gap-1 no-underline"
      rel="noreferrer"
      href="https://instagram.com/eunjae.dev"
      target="_blank"><Instagram size={20} /><span>Instagram</span></a
    >
    <a
      class="flex items-center gap-1 no-underline"
      rel="noreferrer"
      href="mailto:hey@learnwitheunjae.dev"
      target="_blank"><Mail size={20} /><span>hey@learnwitheunjae.dev</span></a
    >
  </div>
</main>

<Footer />

<style>
  .narrow-inner-container {
    min-height: calc(100vh - 22rem);
  }
</style>
