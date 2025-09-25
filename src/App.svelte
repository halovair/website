<script lang="ts">
  import Home from "./pages/Home.svelte";
  import Bio from "./pages/Bio.svelte";

  let currentPage = "home";

  // Handle hash changes
  function handleHashChange() {
    const hash = window.location.hash;

    if (hash === "#/bio") {
      currentPage = "bio";
    } else {
      currentPage = "home";
    }
  }

  // Listen for hash changes (when user clicks back/forward or types URL)
  window.addEventListener("hashchange", handleHashChange);

  // Set initial page based on current hash
  handleHashChange();
</script>

<main>
  {#if currentPage === "home"}
    <Home />
  {:else if currentPage === "bio"}
    <Bio />
  {/if}
</main>
