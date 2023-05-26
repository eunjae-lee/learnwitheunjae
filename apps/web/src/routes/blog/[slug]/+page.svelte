<script lang="ts">
  import Footer from '$lib/components/Footer.svelte';
  import Meta from '$lib/components/Meta.svelte';
  import NavBar from '$lib/components/NavBar/NavBar.svelte';
  import type { Metadata } from '../+page';
  import Article from '$lib/components/Article.svelte';
  import SubscriptionBox from '$lib/components/SubscriptionBox.svelte';

  type Data = {
    content: import('svelte').ComponentType;
    metadata: Metadata;
  };

  export let data: Data;
</script>

<Meta title={data.metadata.title} />

<NavBar />

<main class="narrow-inner-container my-16">
  <h1 class="mt-8 text-secondary text-xl font-medium">{data.metadata.title}</h1>

  <p class="mt-2 text-xs font-light">{new Date(data.metadata.createdAt).toLocaleDateString()}</p>

  <div class="mt-8">
    <Article content={data.content} />
  </div>

  <hr class="my-24 border-t border-gray-300" />

  <div class="mb-8">
    <p class="font-light leading-loose">
      <span class="text-primary font-medium">시나브로 자바스크립트</span>는, 자바스크립트 생태계의
      구성 요소를 이해하고, 프레임워크 없이 바닥부터 다양한 토픽을 구현해보면서 이해도를 높이고,
      어떤 프레임워크를 쉽게 이해할 수 있는 기반과 자신감을 다져주는 것을 목표로 합니다.
    </p>
    <div class="mt-4">
      <SubscriptionBox
        title={`이메일 주소를 남겨주시면 런칭 소식을 전해드리겠습니다.`}
        slug={'sinabro-js'}
      />
    </div>
  </div>
</main>
