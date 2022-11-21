<script>
  import Footer from "$lib/components/Footer.svelte";
  import Discord from "$lib/components/icons/Discord.svelte";
  import Meta from "$lib/components/Meta.svelte";
  import { ArrowRight } from "lucide-svelte";
  import NavBar from "$lib/components/NavBar/NavBar.svelte";
</script>

<Meta title="커뮤니티" />

<NavBar />

<main class="narrow-inner-container my-16">
  <h1 class="text-secondary text-xl font-medium">커뮤니티</h1>
  <div class="mt-8">
    <p>
      Learn with Eunjae 는 여러분이 저와 함께 무언가를 배워가는 공간이지만,
      한편으로는 저 한 명에 의존되는 것보단 서로가 서로를 응원하고 같이
      공부해나가는 형태가 되면 좋겠다고 생각해요.
    </p>
    <p class="mt-6">
      당연히 저 혼자만의 노력으론 안되고, 그럴 의지가 있는 분들이 모여서 같이
      힘을 모으면 가능할 수도 있지 않을까, 하는 기대와 궁금한 마음을 갖고
      있습니다.
    </p>
  </div>
  <p class="mt-8">
    <a
      class="inline-flex items-center"
      rel="noreferrer"
      href="https://discord.gg/d94Z8V5wB2"
      target="_blank"
      ><Discord /><span class="ml-2 text-secondary"
        >Discord 서버에 참여하기</span
      ><ArrowRight class="ml-1 text-secondary" size={16} /></a
    >
  </p>
</main>

<Footer />

<style>
  .narrow-inner-container {
    min-height: calc(100vh - 22rem);
  }
</style>
