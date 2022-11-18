<script lang="ts">
  import SubscriptionBox from "$lib/components/SubscriptionBox.svelte";
</script>

<section>
  <h2 class="text-secondary text-xl font-medium">퐁당개발</h2>
  <div class="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-16">
    <div class="basis-1/2">
      <img
        class="rounded-md"
        src="/know_nothing.png"
        alt="Keep calm and know nothing"
      />
      <p class="mt-1 opacity-50 text-xs text-right">
        <a
          rel="noreferrer"
          target="_blank"
          href="https://twitter.com/dylan_nea/status/673704671052242948"
          >이미지 출처: 트위터</a
        >
      </p>
    </div>
    <div class="basis-1/2">
      <div class="flex flex-col gap-4 font-light leading-relaxed">
        <p>
          웹 생태계에는 새로운 기술이 매일매일 등장하고, 배워야 할 것 같은 게
          너무나 많아요. 하지만 당연하게도 우리는 모든 걸 배울 수 없고, 그럴
          필요도 없다고 생각해요.
        </p>
        <p>
          저 또한 궁금하게 여기는 기술 / 언어 / 프레임워크 / 라이브러리 등이
          있지만, 마음 한편에만 간직해두고 어느 정도 결심이 생길 때 조금씩
          공부를 해보게 되는 것 같아요.
        </p>
        <p>
          퐁당개발은 라이브 스트리밍 쇼로써, 제가 하나의 주제를 정하고 60-90여
          분간 새로운 기술을 혼자 공부해가는 과정을 여러분들께 그대로 보여드리는
          컨텐츠입니다. 저 혼자 하기도 하고, 어떨 때는 누군가를 초청해서 그분께
          배워보는 시간을 가지려 해요.
        </p>
      </div>
      <SubscriptionBox title="퐁당개발 런칭 소식 받기" slug="pd" />
    </div>
  </div>
</section>
