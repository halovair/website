<script>
  // Include any script logic if necessary
  const newsletterForm = document.getElementById("newsletterForm");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", function (event) {
      alert("Thank you for subscribing!"); // Displays a message
    });
  }
</script>

<div class="sib-form">
  <div id="sib-form-container" class="sib-form-container">
    <!-- Error Message -->
    <div id="error-message" class="sib-form-message-panel">
      <span class="sib-form-message-panel__inner-text"> Your subscription could not be saved. Please try again. </span>
    </div>

    <!-- Success Message -->
    <div id="success-message" class="sib-form-message-panel">
      <span class="sib-form-message-panel__inner-text"> Your subscription has been successful. </span>
    </div>

    <div id="sib-container" class="sib-container--large sib-container--vertical">
      <form
        id="sib-form"
        method="POST"
        action="https://7937f353.sibforms.com/serve/MUIFAO7oTGQRaePEbQNbW0Ye6P-gz7tjJcc3XdRopx2wT3ysRiMv0XJNMrbD3yLllyYkQhihxA-YUel_Fr-XLabFfvPmaY5IO9eGieflA8LkJZ6c9Jclrel8aS5tN6hkhARrg2iYch1pyq59FJ0t6cq_AlK1JCmSwukn7n737_Z9rv9PCP7tOo1DNNbLjzswRzPEddRsYdA-tHaZ"
        data-type="subscription"
      >
        <!-- Newsletter Title -->
        <div class="sib-form-block">
          <p>HALO VAIR Newsletter</p>
        </div>

        <!-- Description -->
        <div class="sib-form-block">
          <p>Subscribe to our newsletter and stay updated.</p>
        </div>

        <!-- Email Input -->
        <div class="sib-input sib-form-block">
          <div>
            <input type="email" id="email" name="email" placeholder="Enter your email" /><br />
          </div>

          <br class="entry__specification" />
        </div>

        <!-- Opt-in Checkbox -->
        <div class="sib-optin sib-form-block">
          <label>
            <input type="checkbox" id="OPT_IN" name="OPT_IN" required />
            I agree to receive your newsletters and accept the data privacy statement.<br /><br />
          </label>
        </div>

        <!-- Submit Button -->
        <div class="sib-form-block">
          <button type="submit"> Subscribe </button>
        </div>
      </form>
    </div>
  </div>
</div>

<style>
  @font-face {
    font-display: block;
    font-family: Roboto;
    src:
      url(https://assets.brevo.com/font/Roboto/Latin/normal/normal/7529907e9eaf8ebb5220c5f9850e3811.woff2)
        format("woff2"),
      url(https://assets.brevo.com/font/Roboto/Latin/normal/normal/25c678feafdc175a70922a116c9be3e7.woff) format("woff");
  }

  @font-face {
    font-display: fallback;
    font-family: Roboto;
    font-weight: 600;
    src:
      url(https://assets.brevo.com/font/Roboto/Latin/medium/normal/6e9caeeafb1f3491be3e32744bc30440.woff2)
        format("woff2"),
      url(https://assets.brevo.com/font/Roboto/Latin/medium/normal/71501f0d8d5aa95960f6475d5487d4c2.woff) format("woff");
  }

  @font-face {
    font-display: fallback;
    font-family: Roboto;
    font-weight: 700;
    src:
      url(https://assets.brevo.com/font/Roboto/Latin/bold/normal/3ef7cf158f310cf752d5ad08cd0e7e60.woff2) format("woff2"),
      url(https://assets.brevo.com/font/Roboto/Latin/bold/normal/ece3a1d82f18b60bcce0211725c476aa.woff) format("woff");
  }

  #sib-container input::placeholder,
  #sib-container textarea::placeholder {
    text-align: left;
    font-family: Futura, sans-serif;
    color: #c0ccda;
  }

  #sib-container a {
    text-decoration: underline;
    color: #2bb2fc;
  }

  input[type="email"] {
    width: 100%; /* Makes the input full-width */
    padding: 10px; /* Adds padding for better usability */
    margin-bottom: 10px; /* Adds spacing between the input and button */
    border: 1px solid #ccc; /* Adds a border */
    border-radius: 4px; /* Optional: rounds corners */
    box-sizing: border-box; /* Ensures padding doesn't increase the width */
  }
  .sib-form {
    align-items: center;
    display: flex;
    justify-content: center;
    text-align: center;
    background-color: transparent;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }

  .sib-form-container {
    color: black; /* Set text color to black */
  }

  .sib-container--large {
    padding: 20px;
    background-color: white; /* Plain white background */
    color: black; /* Ensure all text is black */
    max-width: 540px;
    border-radius: 3px;
    border: 1px solid #c0ccd9;
  }

  .sib-form-block p,
  .sib-form-block label,
  .sib-text-form-block p,
  .sib-form-message-panel__inner-text {
    color: black !important; /* Enforce black text globally */
  }

  button {
    background-color: #3e4857; /* Dark button background */
    color: #ffffff; /* White button text */
  }
</style>
