<script>
  import Footer from "$lib/components/Footer.svelte";
  import Meta from "$lib/components/Meta.svelte";
  import SubscriptionBox from "$lib/components/SubscriptionBox.svelte";
  import NavBar from "../NavBar.svelte";
</script>

<Meta title="차근차근 JavaScript" />

<NavBar />

<main class="inner-container my-16">
  <h1 class="text-secondary text-xl font-medium">차근차근 JavaScript</h1>

  <section>
    <div class="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-16">
      <div class="basis-1/2">
        <img
          class="rounded-md"
          src="/js_meme.jpeg"
          alt="자바스크립트 업그레이드"
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
            React 나 Vue.js 등의 프론트엔드 프레임워크를 가지고 개발을 하지만,
            JavaScript 자체는 너무 모르고 있다는 느낌이 드시나요? 개발을 하다
            보면, 막히는 부분이 많은데, 내가 뭘 몰라서 막히는지조차 모르는
            경우가 있죠.
          </p>
          <p>
            이 강의는 다양한 미니 프로젝트를 통해 JavaScript 를 다양하게 사용해
            보고, 프레임워크 없이 구현하려면 어떻게 하는지 보다 깊이 이해하게
            도와줍니다. 다양한 예제를 차근차근 하나씩 따라가다 보면, 어느새
            JavaScript 를 폭넓게 사용해 본 경험을 얻게 되고, 그게 자신감에 큰
            도움을 줄 거예요.
          </p>
          <p>
            강의는 현재 준비 중이며, 이메일을 남겨주시면 런칭 소식을
            전해드리겠습니다.
          </p>
        </div>
        <SubscriptionBox
          title="차근차근 JavaScript 런칭 소식 받기"
          slug="upgrade-js"
        />
      </div>
    </div>
  </section>
</main>

<Footer />

<style>
  .inner-container {
    min-height: calc(100vh - 18rem);
  }
</style>
