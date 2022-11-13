<script>
  import { ArrowRight } from "lucide-svelte";
</script>

<div class="flex justify-center">
  <div class="flex flex-col gap-8 sm:flex-row sm:max-w-xl sm:items-center">
    <div class="flex justify-center sm:shrink-0">
      <img
        class="rounded-full w-48 border-primary border-8"
        src="/profile.jpeg"
        alt="Eunjae Lee"
      />
    </div>
    <div class="flex flex-col gap-3">
      <p class="text-xl">안녕하세요, 이은재입니다 👋</p>
      <p class="font-light leading-relaxed">
        현재 프랑스에 거주하고 있는 웹 개발자입니다. 프랑스에 살면서 행복한 삶을
        위한 밸런스에 대해 많은 고민을 하며 지내고 있습니다.
      </p>
      <a
        href="/about"
        class="text-primary text-sm font-medium inline-flex items-center justify-end"
        ><span>소개 더보기</span><ArrowRight size={16} /></a
      >
    </div>
  </div>
</div>
