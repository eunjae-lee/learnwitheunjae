<script>
  import Footer from "$lib/components/Footer.svelte";
  import Meta from "$lib/components/Meta.svelte";
  import NavBar from "$lib/components/NavBar/NavBar.svelte";

  export let data;
  const { posts } = data;
</script>

<Meta title="사이드 프로젝트 뉴스레터" />

<NavBar />

<main class="inner-container my-16">
  <h1>
    <span class="text-secondary text-xl font-medium"
      >사이드 프로젝트 뉴스레터</span
    ><span class="ml-2 text-xs bg-accent text-secondary py-1 px-2 rounded-md"
      >시즌1 종료</span
    >
  </h1>

  <p class="mt-4 font-light">
    비정기적으로 발행되는 뉴스레터입니다. 사이드 프로젝트를 좋아하시거나,
    좋아하고 싶으신 분들에게 관련 소식을 전해드려요. 저의 개인적인 목표는 다양한
    사이드 프로젝트로 부수입을 만드는 것이고, 그 과정에서 제가 접하는 좋은
    정보나 제 경험을 공유하려 합니다.
  </p>

  <h2 class="mt-8 text-lg">제공되는 것</h2>

  <ul class="desc">
    <li>
      해외 인디 해커들 사이에서 벌어지는 흥미로운 트윗이나 소식을 전합니다.
    </li>
    <li>사이드 프로젝트를 만드는데 도움이 되는 다양한 서비스를 소개합니다.</li>
    <li>
      제가 진행하는 사이드 프로젝트에 대한 소식(기술 스택, 신규 유저, 매출 등)에
      대해 나눠요.
    </li>
    <li>
      부수입(passive income, 수동적인 수입)을 만드는 게 제 목적이라, 유료인
      사이드 프로젝트에 대한 이야기가 많아요.
    </li>
  </ul>

  <h2 class="mt-8 text-lg">제공되지 않는 것</h2>

  <ul class="desc">
    <li>여러분이 수익 내는 사이드 프로젝트 만드는 걸 제가 보장할 순 없어요.</li>
    <li>기술적으로 깊이 있는 내용을 다루는 일이 흔하진 않을 것 같아요.</li>
    <li>
      제가 해온 사이드 프로젝트들이 큰 성공을 거둔 건 아니라, "성공" 사례는 아직
      못 들려 드립니다.
    </li>
  </ul>

  <h2 class="mt-8 text-lg">이런 분에겐 안맞아요</h2>

  <ul class="desc">
    <li>
      오픈 소스 기여만이 훌륭한 사이드 프로젝트이며, 수익을 내려는 행위는 좋지
      못하다고 생각하시는 분 한테는 이 뉴스레터가 별로일 거예요.
    </li>
    <li>
      제가 해외 소식 등을 많이 전할 건데, 아무래도 제가 다 일일이 번역해서
      보내드릴 수 없기 때문에, 영어에 대한 강한 거부감이 있으시면 제가 도와드릴
      수 없어요. 게다가 제가 한글로 적는 문장에 굳이 번역하지 않은 채 영어
      표현을 그대로 적는 일도 많은데, 그런 게 거북하신 분들은 어쩔 수가 없어요.
      억지로 부자연스러운 번역을 하는 게 어렵기도 하고, 영어권에서 쓰이는 표현을
      그대로 알려드리고 싶거든요.
    </li>
  </ul>

  <h2 class="mt-16 text-secondary text-lg font-medium">글 목록</h2>
  <ol class="mt-4">
    {#each posts as post}
      <li>
        <a href={`/spn/${post.slug}`} title={post.metadata.title}>
          <p class="mt-3 line-clamp-1">{post.metadata.title}</p>
        </a>
      </li>
    {/each}
  </ol>
</main>

<Footer />

<style>
  ul.desc {
    @apply mt-2;
  }
  ul.desc > li {
    @apply ml-5 list-disc font-light leading-loose;
  }
</style>
