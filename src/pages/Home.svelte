<script>
  import HaloVairLogo from "../assets/hv_logo.webp";
  import SocialMediaIcons from "../lib/Social_Media_Icons.svelte";
  import Mailerlite from "../lib/Mailerlite.svelte";
  import BrevoForm from "../lib/BrevoForm.svelte";
  import { link } from "svelte-spa-router";
  const basepath = import.meta.env.VITE_BASE_URL || "/";
</script>

<div class="main-container">
  <a href="/">
    <img src={HaloVairLogo} class="logo" alt="Vite Logo" />
  </a>
  <div class="nav-wrapper">
    <SocialMediaIcons />
    <div class="vertical-line"></div>
    <div class="link-wrapper">
      <a class="link-wrapper-text" href="/bio">Bio & Press</a>
    </div>
  </div>
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

  <!-- <div class="spotify-container">
    <iframe
      title="Spotify"
      style="border-radius:12px"
      src="https://open.spotify.com/embed/artist/4qjr6ECyk3yhokw8onrIAu?utm_source=generator"
      width="100%"
      height="500"
      frameBorder="0"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    ></iframe>
  </div> -->
  <div class="bandcamp-container">
    <iframe
      title="Halo Vair Bandcamp Player"
      style="border: 0; width: 350px; height: 470px;"
      src="https://bandcamp.com/EmbeddedPlayer/album=615285866/size=large/bgcol=ffffff/linkcol=7137dc/tracklist=false/transparent=true/"
      seamless><a href="https://halovair.bandcamp.com/album/synonym">Synonym by Halo Vair</a></iframe
    >
  </div>

  <div class="newsletter-wrapper">
    <iframe
      title="Halo Vair Newsletter Form"
      width="540"
      height="621"
      src="https://7937f353.sibforms.com/serve/MUIFANWlkBkpxXL2QJGZIaE2x9k1Xtpogpnw7kOE90tFEQyhCQ5OzAKiNC-fJp_qdnr7t-Boc_hcrBJaKViaE7O_TfSu3Fg2lCMg8OcC3AQBGr53RtClsCDVMdhx1yxcGwmeznSgkGfi4z7CoqaBlu69C0tVGS-XV1GMN2pUP1NxclrjLo91d07u6AnFsQwx8HyDg-7dZAI9JvMh"
      frameborder="0"
      scrolling="auto"
      allowfullscreen
      style="display: block;margin-left: auto;margin-right: auto;max-width: 100%;"
    ></iframe>
  </div>

  <div class="footer">
    <span>Halo Vair {new Date().getFullYear()} © - All Rights Reserved </span>
  </div>

  <div class="background"></div>
</div>

<style>
  .newsletter-wrapper {
    margin: 80px 0;
  }
  .footer {
    margin-top: 100px;
    margin-bottom: 20px;
  }
  .main-container {
    padding: 40px;
  }
  .link-wrapper-text {
    color: white;
    font-size: 24px;
    padding-top: 10px;
  }
  .link-wrapper-text:hover {
    color: #b326ef;
  }
  .link-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .nav-wrapper {
    display: flex;
    justify-content: center;
    align-self: center;
  }

  .vertical-line {
    border-left: 2px solid white;
    padding: 5px;
    margin: 0 20px;
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
    background-image: url("../assets/bk_no_gradient.webp");
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
    height: 500px;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }

  @media (max-width: 1000px) {
    .logo {
      height: 50vw;
    }
  }

  @media (max-width: 700px) {
    .nav-wrapper {
      flex-direction: column;
    }
    .vertical-line {
      display: none;
    }
  }
</style>
