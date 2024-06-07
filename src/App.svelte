<script lang="ts">
  import HaloVairLogo from "./assets/hv_logo.webp";
  import SocialMediaIcons from "./lib/Social_Media_Icons.svelte";
  import Mailerlite from "./lib/Mailerlite.svelte";
</script>

<main>
  <div>
    <img src={HaloVairLogo} class="logo" alt="Vite Logo" />
  </div>
  <div><SocialMediaIcons /></div>
  <p>Quality, spaced out, wall-of-sound Rock from GTA/Toronto, Canada</p>

  <div class="video-container">
    <iframe
      width="5120"
      height="315"
      src="https://www.youtube.com/embed/MZRogU-LTgk?si=WnCKT6ms8aR9tMlH"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen
    ></iframe>
  </div>

  <div class="spotify-container">
    <iframe
      title="Spotify"
      style="border-radius:12px"
      src="https://open.spotify.com/embed/artist/4qjr6ECyk3yhokw8onrIAu?utm_source=generator"
      width="100%"
      height="500"
      frameBorder="0"
      allowfullscreen=""
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    ></iframe>
  </div>
  <div>
    <Mailerlite />
  </div>

  <div class="footer">
    <span>Halo Vair {new Date().getFullYear()} © - All Rights Reserved </span>
  </div>

  <div class="background"></div>
</main>

<style>


  .footer {
    margin-top: 100px;
  }

  .spotify-container {
    margin-top: 100px;
  }
  .video-container {
    margin-top: 100px;
    position: relative;
    padding-bottom: 56.25%; /* 16:9 */
    height: 0;
  }
  .video-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .background {
    background-image: url("./assets/bk_no_gradient.webp");
    width: 100%;
    height: 780px;
    position: absolute;
    top: 0;
    z-index: -1;
    left: 0;
    background-size: cover;
    -webkit-mask-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 1)), to(rgba(0, 0, 0, 0)));
    mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
  }

  .logo {
    height: 50vw;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
</style>
