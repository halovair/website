<script>
    import HaloVairLogo from "../assets/hv_logo.webp";
    import SocialMediaIcons from "../lib/Social_Media_Icons.svelte";
    import Mailerlite from "../lib/Mailerlite.svelte";
    import { link } from "svelte-spa-router";
  </script>
  
  <a href="/">
    <img src={HaloVairLogo} class="logo" alt="Vite Logo" />
  </a>


  
  <div class="footer">
    <span>Halo Vair {new Date().getFullYear()} © - All Rights Reserved </span>
  </div>
  
  <div class="background"></div>
  
  <style>
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
  </style>
  