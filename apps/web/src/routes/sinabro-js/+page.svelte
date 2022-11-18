<script>
  import Footer from "$lib/components/Footer.svelte";
  import Meta from "$lib/components/Meta.svelte";
  import NavBar from "../NavBar.svelte";
  import Introduction from "./Introduction.svelte";
</script>

<Meta title="차근차근 JavaScript" />

<NavBar />

<main class="inner-container my-16">
  <Introduction />
</main>

<Footer />

<style>
  .inner-container {
    min-height: calc(100vh - 18rem);
  }
</style>
