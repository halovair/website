<script>
  import HaloVairLogo from "../assets/hv_logo.webp";
  const basepath = import.meta.env.VITE_BASE_URL || "/";
  import VZSolo1 from "../assets/VZ_solo1.jpg";
  import VZSolo2 from "../assets/VZ_solo2.jpg";
  import VZLive1 from "../assets/VZ_live1.jpg";
  import VZLive2 from "../assets/VZ_live2.jpg";
</script>

<a href={basepath}>
  <img src={HaloVairLogo} class="logo" alt="Vite Logo" />
</a>

<main class="bio-container">
  <a class="link-wrapper-text" href={basepath}>Go Back</a>
  <h1>Bio</h1>
  <p>
    In a Toronto home studio, Halo Vair materializes at the intersection of obsession and revelation. Victor Zohni's
    singular project operates like a prism, taking the white light of neo-psychedelic tradition and fracturing it into
    something entirely new.
  </p>

  <p>
    What emerges is neither purely vintage nor entirely modern, but something that lives in the spaces between.
    Atmospheric, driving, hypnotic.
  </p>

  <p class="smaller-text">
    The latest single "People of the Sky" sees Zohni reimagining Sloan's Canadian classic through a neo-psychedelic
    lens. Canadians covering Canadians, filtered through decades of sonic evolution and studio obsession.
  </p>

  <p>For official EPK, please email Halo Vair at halovair@gmail.com</p>
  <br /><br /><br />

  <img class="img-center" src={VZSolo1} alt="Victor Zohni" title="Victor Zohni" />
  <p class="img-caption">Victor Zohni. Credit: Elijah Shark</p>

    <img class="img-center" src={VZSolo2} alt="Victor Zohni" title="Victor Zohni" />
  <p class="img-caption">Victor Zohni. Credit: Elijah Shark</p>

      <img class="img-center" src={VZLive1} alt="Victor Zohni" title="Victor Zohni" />
  <p class="img-caption">Halo Vair Live @ Horseshoe Tavern. Credit: Adam Altomare</p>

      <img class="img-center" src={VZLive2} alt="Victor Zohni" title="Victor Zohni" />
  <p class="img-caption">Halo Vair Live @ Horseshoe Tavern. Credit: Adam Altomare</p>

  <img class="img-center" src="https://i.imgur.com/6ZXzJwJ.jpg" alt="Halo Vair Live" title="Live lineup of Halo Vair" />

  <p class="">2023 Live lineup of Halo Vair. Credit: David Belenski</p>
  <p class="img-caption">From left to right: Vas Palantzas, Victor Zohni, Aaron Keogh</p>

  <img class="img-center" src="https://i.imgur.com/wXfC8W7.jpg" alt="Halo Vair Live" title="Live lineup of Halo Vair" />

  <p class="img-caption">2023 Live lineup of Halo Vair. Credit: David Belenski</p>

  <img class="img-center" src="https://i.imgur.com/IsdSRXN.jpg" alt="Halo Vair Live" title="Live lineup of Halo Vair" />

  <p class="img-caption">2023 Live lineup of Halo Vair. Credit: David Belenski</p>


  <br /> <br /> <br />

  <img
    class="img-center"
    src="https://images.squarespace-cdn.com/content/v1/629f99cac1f5b75bdaa22ec1/1684524781173-0R38ZZL76TLQY5D9RGO1/sro-9-1539.jpg?format=2500w"
    alt="Halo Vair Live"
    title="Halo Vair"
  />

  <p class="img-caption">
    Halo Vair live @ The Piston (Smoking Room Only Showcase). Credit: Dylan Weller @dylanwellerphotography
  </p>

  <img
    class="img-center"
    src="https://images.squarespace-cdn.com/content/v1/629f99cac1f5b75bdaa22ec1/1684524801388-81A8RLVVGGMOB6DXQ8HO/sro-9-1577.jpg?format=2500w"
    alt="Halo Vair Live"
    title="Halo Vair"
  />

  <p class="img-caption">
    Victor Zohni @ The Piston (Smoking Room Only Showcase). Credit: Dylan Weller @dylanwellerphotography
  </p>

  <img
    class="img-center"
    src="https://images.squarespace-cdn.com/content/v1/629f99cac1f5b75bdaa22ec1/1684524858524-RB8KJ53GM2KUQBHV7W2U/sro-9-1696.jpg?format=2500w"
    alt="Halo Vair Live"
    title="Halo Vair"
  />

  <p class="">Halo Vair live @ The Piston (Smoking Room Only Showcase). Credit: Dylan Weller @dylanwellerphotography</p>
  <a class="link-wrapper-text" href="https://www.smokingroomonly.ca/sro-9">View all Photos from Piston Show here </a>
  <br /> <br /> <br />

  <img class="img-center" src="https://i.imgur.com/GJAAxVB.jpg" alt="Halo Vair Live" title="Live lineup of Halo Vair" />

  <p class="">2018 Live lineup of Halo Vair. Credit: John Jacques</p>
  <p class="img-caption">From left to right: Vasili Arnokouros, Victor Zohni, Vas Palantzas</p>

  <img class="img-center" src="https://i.imgur.com/nM0x651.png" alt="Halo Vair Live" title="Halo Vair" />

  <p class="img-caption">Halo Vair live @ Living Colour in Toronto. Credit: MG Ommert</p>



  <a class="link-wrapper-text" href={basepath}>Go Back</a>
</main>

<div class="footer">
  <span>Halo Vair {new Date().getFullYear()} © - All Rights Reserved </span>
</div>

<div class="background"></div>

<style>
  .link-wrapper-text {
    color: cyan;
    font-size: 24px;
    padding-top: 10px;
  }
  .link-wrapper-text:hover {
    color: #b326ef;
  }

  .img-caption {
    margin-bottom: 100px;
  }
  span {
    padding: 20px;
    font-size: 18px;
  }
  p {
    text-align: left;
  }

  .bio-container {
    margin-top: 140px;
    max-width: 1300px;
    padding: 40px;
  }

  .footer {
    margin-top: 100px;
    margin-bottom: 20px;
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
    margin-top: 40px;
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
