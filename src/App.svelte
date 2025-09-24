<script lang="ts">
  import Home from "./pages/Home.svelte";
  import Bio from "./pages/Bio.svelte";

  let currentPage = "home";

  // Simple page switching functions
  function showHome() {
    currentPage = "home";
    window.history.pushState({}, "", "/");
  }

  function showBio() {
    currentPage = "bio";
    window.history.pushState({}, "", "/bio");
  }

  // Handle browser back/forward buttons
  window.addEventListener("popstate", () => {
    if (window.location.pathname === "/bio") {
      currentPage = "bio";
    } else {
      currentPage = "home";
    }
  });

  // Set initial page based on URL
  if (window.location.pathname === "/bio") {
    currentPage = "bio";
  }
</script>

<main>
  {#if currentPage === "home"}
    <Home />
  {:else if currentPage === "bio"}
    <Bio />
  {/if}
</main>
