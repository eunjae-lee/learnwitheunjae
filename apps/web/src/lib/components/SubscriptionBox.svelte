<script lang="ts">
  import { subscribeToEmailList } from "$lib/subscription";
  import { CheckCircle, Loader2, XCircle } from "lucide-svelte";

  export let title: string;
  export let slug: string;

  let state: "init" | "subscribing" | "subscribed" | "error" = "init";
  let email: string;
  let error: string | undefined;

  async function onSubmit() {
    state = "subscribing";
    error = undefined;
    const result = await subscribeToEmailList({ slug, email });
    state = result.success ? "subscribed" : "error";
    error = result.error;
  }
</script>

<form class="mt-8 sm:mt-6 form-control" on:submit|preventDefault={onSubmit}>
  <label class="label" for="js-course-email">
    <span class="label-text text-primary">{title}</span>
  </label>
  <div class="flex gap-2">
    <input
      type="text"
      placeholder="이메일 주소"
      name="js-course-email"
      class="input input-primary input-bordered w-full"
      bind:value={email}
    />
    {#if state === "init" || state === "subscribing"}
      <button
        disabled={state !== "init"}
        class="w-28 btn btn-primary font-medium"
      >
        {#if state === "init"}
          소식 받기
        {:else if state === "subscribing"}
          <Loader2 size={16} class="animate-spin" /><span class="ml-1"
            >구독 중</span
          >
        {/if}
      </button>
    {/if}
  </div>

  {#if state === "subscribed"}
    <p class="mt-2 mx-2 flex items-center gap-1 text-primary">
      <CheckCircle size={16} />
      <span>구독해주셔서 감사합니다.</span>
    </p>
  {:else if state === "error"}
    {#if error === "already_subscribed"}
      <div class="mt-2 alert bg-primary text-base-100 shadow-lg">
        <div>
          <XCircle size={16} />
          <span>이미 구독하셨습니다.</span>
        </div>
      </div>
    {:else}
      <div class="mt-2 alert alert-error shadow-lg">
        <div>
          <XCircle size={16} />
          <span>구독하지 못했습니다.</span>
        </div>
      </div>
      <p class="mt-2 mx-2">
        발생한 에러는 방금 기록하였으며, 최대한 빨리 고치도록 하겠습니다.
      </p>
    {/if}
  {/if}
</form>
