<script>
  import Footer from "$lib/components/Footer.svelte";
  import Meta from "$lib/components/Meta.svelte";
  import NavBar from "../NavBar.svelte";
</script>

<Meta title="퐁당개발 | Learn with Eunjae" />

<NavBar />

<main class="inner-container my-16">
  <h1 class="text-secondary text-xl font-medium">퐁당개발</h1>
</main>

<Footer />

<style>
  .inner-container {
    min-height: calc(100vh - 18rem);
  }
</style>
