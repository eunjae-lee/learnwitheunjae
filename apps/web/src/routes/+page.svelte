<script lang="ts">
  import Hero from "./Hero.svelte";
  import NavBar from "$lib/components/NavBar/NavBar.svelte";
  import VideoLink from "$lib/components/VideoLink.svelte";
  import SeeMoreLink from "$lib/components/SeeMoreLink.svelte";
  import Bio from "$lib/components/Bio.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import Meta from "$lib/components/Meta.svelte";
  import { type Story, IS_PREVIEW_MODE, enablePreview } from "@lwe/content";
  import StoryblokComponent from "$lib/components/storyblok";
  import { onMount } from "svelte";

  const slugs = ["sinabro-js", "pd"];

  export let data: {
    storyMap: Record<string, Story>;
  };

  onMount(() => {
    if (IS_PREVIEW_MODE) {
      slugs.forEach((slug) => {
        enablePreview(
          data.storyMap[slug].id,
          (newStory) => (data.storyMap[slug] = newStory)
        );
      });
    }
  });
</script>

<Meta title="Learn with Eunaje" />

<Hero />
<NavBar />

<main class="inner-container mt-16 flex flex-col gap-24">
  <!-- <section>
    <h2 class="text-secondary text-xl font-medium">퐁당개발</h2>
    <div class="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-16">
      <div class="basis-1/2"><VideoLink /></div>
      <div class="basis-1/2">
        <p class="text-primary text-lg">지난 에피소드</p>
        <ol class="mt-4 flex flex-col gap-2">
          <li><a href="/">Deno 배워보기</a></li>
          <li><a href="/">State Machine 과 XState 맛보기</a></li>
          <li><a href="/">Turborepo 로 모노리포 맛보기</a></li>
          <li><a href="/">Next 13 엔 뭐가 달라졌나요</a></li>
        </ol>
        <div class="mt-4 flex justify-end"><SeeMoreLink href="/" /></div>

        <SubscriptionBox title="퐁당개발 소식 받기" slug="pd" />
      </div>
    </div>
  </section> -->

  {#each slugs as slug (slug)}
    <StoryblokComponent story={data.storyMap[slug]} />
  {/each}
  <!-- <UpgradeJSIntroduction /> -->

  <!-- <PDIntroduction /> -->

  <!-- <section>
    <h2 class="text-secondary text-xl font-medium">한 입 거리</h2>
    <div class="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-16">
      <div class="basis-1/2"><VideoLink /></div>
      <div class="basis-1/2">
        <p class="text-primary text-lg">지난 여러 입</p>
        <ol class="mt-4 flex flex-col gap-2">
          <li><a href="/">Deno 배워보기</a></li>
          <li><a href="/">State Machine 과 XState 맛보기</a></li>
          <li><a href="/">Turborepo 로 모노리포 맛보기</a></li>
          <li><a href="/">Next 13 엔 뭐가 달라졌나요</a></li>
        </ol>
        <div class="mt-4 flex justify-end"><SeeMoreLink href="/" /></div>
      </div>
    </div>
  </section> -->

  <section>
    <h2 class="text-secondary text-xl font-medium">모든 강좌</h2>
    <ol
      class="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-x-16 sm:gap-y-12"
    >
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://courses.eunjae.dev/new-job"
          title="이직 이야기"
        >
          <p class="mt-3 text-lg line-clamp-1">이직 이야기</p>
          <p class="mt-2 font-light line-clamp-3">
            프랑스 회사를 다니다가 미국 회사로의 이직을 결심한 계기와 과정,
            그리고 그 결과를 자세히 풀어 소개합니다.
          </p>
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://courses.eunjae.dev/in-paris"
          title="파리에 사는 개발자"
        >
          <p class="mt-3 text-lg line-clamp-1">파리에 사는 개발자</p>
          <p class="mt-2 font-light line-clamp-3">
            2019년 ~ 2022년에 프랑스의 Algolia라는 회사에서 근무했습니다. 이
            회사에 이력서를 넣은 계기와, 이사 오기까지의 과정, 그리고 여러 배운
            점과 제 생각을 공유하고자 합니다.
          </p>
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://courses.eunjae.dev/solo-hackathon"
          title="SaaS, 처음부터 끝까지 라이브로 개발하기"
        >
          <p class="mt-3 text-lg line-clamp-1">
            SaaS, 처음부터 끝까지 라이브로 개발하기
          </p>
          <p class="mt-2 font-light line-clamp-3">
            프로젝트 설계부터 런칭까지, SaaS 프로젝트를 만들어가는 모든 과정을
            소개합니다. 나홀로 해커톤 형태로 진행되는 개발 실황을 통째로
            보여드립니다.
          </p>
        </a>
      </li>
      <li>
        <a href="/spn" title="사이드 프로젝트 뉴스레터">
          <p class="mt-3 text-lg line-clamp-1">사이드 프로젝트 뉴스레터</p>
          <p class="mt-2 font-light line-clamp-3">
            사이드 프로젝트 뉴스레터는 비정기적으로 발행됩니다. 사이드
            프로젝트를 좋아하시거나, 좋아하고 싶으신 분들에게 관련 소식을
            전해드려요.
          </p>
        </a>
      </li>
    </ol>
  </section>

  <Bio />

  <div class="h-1" />
</main>

<Footer />

<style>
  ::-moz-selection {
    /* Code for Firefox */
    color: #fbf4ef;
    background: #de4500;
  }

  ::selection {
    color: #fbf4ef;
    background: #de4500;
  }
</style>
