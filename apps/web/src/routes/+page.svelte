<script lang="ts">
  import Hero from './Hero.svelte';
  import NavBar from '$lib/components/NavBar/NavBar.svelte';
  import VideoLink from '$lib/components/VideoLink.svelte';
  import SeeMoreLink from '$lib/components/SeeMoreLink.svelte';
  import Bio from '$lib/components/Bio.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import Meta from '$lib/components/Meta.svelte';
  import { PODIA_HOST } from '../config';
</script>

<Meta title="Learn with Eunjae" />

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

  <div class="flex flex-col gap-24">
    <section>
      <h2 class="text-secondary text-xl font-medium">시나브로 자바스크립트</h2>
      <p class="font-medium opacity-75">
        다양한 주제를 바닥부터 개발해 보며 튼튼한 기반과 자신감을 쌓아보세요.
      </p>
      <div class="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-16">
        <div class="basis-1/2">
          <img
            class="w-full rounded-md"
            src="https://a.storyblok.com/f/184407/500x605/4121c30060/js_meme.jpg"
            alt="시나브로 자바스크립트"
          />
          <p class="mt-1 opacity-50 text-xs text-right">
            <a
              rel="noreferrer"
              target="_blank"
              href="https://imgflip.com/memegenerator/187078587/Skipping-Stairs"
              >이미지 출처: imgflip</a
            >
          </p>
        </div>
        <div class="basis-1/2">
          <div class="flex flex-col gap-4 font-light leading-relaxed">
            <p>
              React 나 Vue.js 등의 프론트엔드 프레임워크를 가지고 개발을 하지만, JavaScript 자체는
              너무 모르고 있다는 느낌이 드시나요? 개발을 하다 보면, 막히는 부분이 많은데, 내가 뭘
              몰라서 막히는지조차 모르는 경우가 있죠.
            </p>
            <p>
              이 강의는 다양한 미니 프로젝트를 통해 JavaScript 를 다양하게 사용해 보고, 프레임워크
              없이 구현하려면 어떻게 하는지 보다 깊이 이해하게 도와줍니다. 다양한 예제를 차근차근
              하나씩 따라가다 보면, 어느새 JavaScript 를 폭넓게 사용해 본 경험을 얻게 되고, 그게
              자신감에 큰 도움을 줄 거예요.
            </p>
          </div>
          <div class="mt-8 sm:mt-6 flex flex-col gap-8">
            <div class="flex justify-end">
              <a
                class="w-full btn btn-primary hover:no-underline gap-1"
                href="https://sinabrojs.dev"
                ><span>자세한 강좌 소개</span><svg
                  width="16"
                  height="16"
                  stroke="currentColor"
                  stroke-width="2"
                  class="lucide-icon lucide lucide-arrow-right "
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  ><line x1="5" y1="12" x2="19" y2="12" /> <polyline points="12 5 19 12 12 19" />
                </svg></a
              >
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
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
    <ol class="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-x-16 sm:gap-y-12">
      <li>
        <a target="_blank" rel="noreferrer" href={`${PODIA_HOST}/new-job`} title="이직 이야기">
          <p class="mt-3 text-lg line-clamp-1">이직 이야기</p>
          <p class="mt-2 font-light line-clamp-3">
            프랑스 회사를 다니다가 미국 회사로의 이직을 결심한 계기와 과정, 그리고 그 결과를 자세히
            풀어 소개합니다.
          </p>
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href={`${PODIA_HOST}/in-paris`}
          title="파리에 사는 개발자"
        >
          <p class="mt-3 text-lg line-clamp-1">파리에 사는 개발자</p>
          <p class="mt-2 font-light line-clamp-3">
            2019년 ~ 2022년에 프랑스의 Algolia라는 회사에서 근무했습니다. 이 회사에 이력서를 넣은
            계기와, 이사 오기까지의 과정, 그리고 여러 배운 점과 제 생각을 공유하고자 합니다.
          </p>
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href={`${PODIA_HOST}/solo-hackathon`}
          title="SaaS, 처음부터 끝까지 라이브로 개발하기"
        >
          <p class="mt-3 text-lg line-clamp-1">SaaS, 처음부터 끝까지 라이브로 개발하기</p>
          <p class="mt-2 font-light line-clamp-3">
            프로젝트 설계부터 런칭까지, SaaS 프로젝트를 만들어가는 모든 과정을 소개합니다. 나홀로
            해커톤 형태로 진행되는 개발 실황을 통째로 보여드립니다.
          </p>
        </a>
      </li>
      <li>
        <a href="/spn" title="사이드 프로젝트 뉴스레터">
          <p class="mt-3 text-lg line-clamp-1">사이드 프로젝트 뉴스레터</p>
          <p class="mt-2 font-light line-clamp-3">
            사이드 프로젝트 뉴스레터는 비정기적으로 발행됩니다. 사이드 프로젝트를 좋아하시거나,
            좋아하고 싶으신 분들에게 관련 소식을 전해드려요.
          </p>
        </a>
      </li>
    </ol>
  </section>

  <Bio />

  <div class="h-1" />
</main>

<Footer />
