<script lang="ts">
  import Footer from '$lib/components/Footer.svelte';
  import Meta from '$lib/components/Meta.svelte';
  import NavBar from '$lib/components/NavBar/NavBar.svelte';
  import { Github, Instagram, Mail, Twitter } from 'lucide-svelte';

  const twitter = 'https://twitter.com/eunjae_lee_ko';
  const instagram = 'https://instagram.com/eunjae.dev';
  const email = 'hey@learnwitheunjae.dev';
  const github = 'https://github.com/eunjae-lee';
</script>

<Meta title="소개" />

<NavBar />

<main class="narrow-inner-container my-16">
  <h1 class="text-secondary text-xl font-medium">안녕하세요, 이은재입니다 👋</h1>
  <p class="mt-8">
    <img class="w-48" src="/profile_ring.png" alt="Eunjae Lee" />
  </p>
  <div class="mt-8 flex flex-col gap-6 leading-relaxed font-light">
    <p>
      안녕하세요. 이은재입니다. 사람 한 명과 고양이 두 마리와 함께 살고 있어요. 집에서 멍 때리고
      냥이들 바라보는 걸 좋아하고, 저녁 식사 후에 한 시간 정도 산책하는 걸 즐깁니다. 시끄럽고 붐비는
      도심이 부담돼서 파리 인근 소도시에 살고 있고, 새 구경을 좋아하고, 채소를 키우는 취미가 있어요.
    </p>
    <p>
      좀 더 개발 관련 얘길 하자면, 2022년 11월부터 Storyblok 이라는 Headless CMS 서비스를 만드는
      곳에서 개발자 유저들을 위한 extension platform 을 만들고 있어요.
    </p>
    <p>
      2019년에 Algolia 라는 클라우드 기반의 검색 솔루션 회사에 입사하기 위해 프랑스로 이주했어요. 그
      회사에서 InstantSearch 라는 오픈소스 UI 라이브러리를 만드는 일을 했어요. Vanilla JavaScript,
      React, Vue.js, Angular 총 네 가지 버전으로 라이브러리를 제공하기 위해 공통 로직을 따로
      관리하고 각 flavor 는 최소한의 wrapper 이도록 하는 작업에 시간을 가장 많이 썼어요. 그 외에도
      업무적으로 여러 오픈 소스 프로젝트에 참여했어요.
    </p>
    <p>
      그전에는 밸류포션이라는 스타트업을 위해 한국과 싱가폴에서 풀스택으로 3년 정도 일했고, 그
      전에는 카카오와 다음 커뮤니케이션에서 4-5년간 프론트엔드 대부분 + 안드로이드 조금 다뤘어요.
    </p>
  </div>
  <div class="mt-8 text-base flex flex-col gap-2 sm:flex-row sm:gap-6 font-light">
    <a class="flex items-center gap-1 no-underline" rel="noreferrer" href={twitter} target="_blank"
      ><Twitter size={20} /><span>Twitter</span></a
    >
    <a class="flex items-center gap-1 no-underline" rel="noreferrer" href={github} target="_blank"
      ><Github size={20} /><span>GitHub</span></a
    >
    <a
      class="flex items-center gap-1 no-underline"
      rel="noreferrer"
      href={instagram}
      target="_blank"><Instagram size={20} /><span>Instagram</span></a
    >
    <a
      class="flex items-center gap-1 no-underline"
      rel="noreferrer"
      href={`mailto:${email}`}
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
