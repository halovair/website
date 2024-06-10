<script lang="ts">
  import Router from "svelte-spa-router";
  import Home from "./pages/Home.svelte";
  import Bio from "./pages/Bio.svelte";

  const basepath = import.meta.env.VITE_BASE_URL || "/";

  const routes = {
    "/": Home,
    "/bio": Bio,
  };
</script>

<main>
  <Router {routes} {basepath} />
</main>
