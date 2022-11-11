<script>
  import Footer from "$lib/components/Footer.svelte";
  import NavBar from "../NavBar.svelte";
</script>

<NavBar />

<main class="inner-container mt-16 flex flex-col gap-24" />

<Footer />

<style>
  .inner-container {
    min-height: calc(100vh - 18rem);
  }
</style>
