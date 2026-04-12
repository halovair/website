<script lang="ts">
  let submitted = false;
  let error = false;

  async function handleSubmit(event: SubmitEvent) {
    event.preventDefault();
    event.stopImmediatePropagation();
    const form = event.target as HTMLFormElement;

    try {
      const token = await (window as any).grecaptcha.execute(
        '6Lc3I78qAAAAAJaTilc9XuH6lEY5An82O3p0WUXH',
        { action: 'submit' }
      );

      const params = new URLSearchParams();
      params.append('EMAIL', (form.querySelector('#EMAIL') as HTMLInputElement).value);
      params.append('OPT_IN', '1');
      params.append('email_address_check', '');
      params.append('locale', 'en');
      params.append('g-recaptcha-response', token);

      await fetch(form.action, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: params,
        mode: 'no-cors',
      });

      submitted = true;
      form.reset();
    } catch (e) {
      error = true;
    }
  }
</script>

<div class="sib-form">
  <div id="sib-form-container" class="sib-form-container">

    {#if error}
      <div class="sib-form-message-panel" style="font-size:16px; text-align:left; font-family:Helvetica, sans-serif; color:#661d1d; background-color:#ffeded; border-radius:3px; border-color:#ff4949; max-width:540px;">
        <div class="sib-form-message-panel__text sib-form-message-panel__text--center">
          <span class="sib-form-message-panel__inner-text">Your subscription could not be saved. Please try again.</span>
        </div>
      </div>
    {/if}

    {#if submitted}
      <div class="sib-form-message-panel" style="font-size:16px; text-align:left; font-family:Helvetica, sans-serif; color:#085229; background-color:#e7faf0; border-radius:3px; border-color:#13ce66; max-width:540px;">
        <div class="sib-form-message-panel__text sib-form-message-panel__text--center">
          <span class="sib-form-message-panel__inner-text">Your subscription has been successful.</span>
        </div>
      </div>
    {/if}

    <div id="sib-container" class="sib-container--large sib-container--vertical">
      <form
        id="sib-form"
        method="POST"
        action="https://7937f353.sibforms.com/serve/MUIFAMievpJLyo6zAwqDbo8BN2jw2qs_JnNUm3LmegEjYZ1jNQiOXgBAm8dGyS9T_s3bvpadNZ3KfLYmdRRd-IdXDPMheC0UafZiO8Gifqn9C_uXVM17NeBFXs16MAK9r45UrSEeTg0Q1AMLNXQLqVx8qE9CGcylhjC8Z50YSLdfWgW2QuR3FTgCQX54ecrlyZ1q72nZmEEjnU3X"
        data-type="subscription"
        on:submit={handleSubmit}
      >
        <div style="padding: 6px 0;">
          <div class="sib-form-block form-title">
            <p>HALO VAIR Newsletter</p>
          </div>
        </div>
        <div style="padding: 6px 0;">
          <div class="sib-form-block form-subtitle">
            <p>(Monthly) Signup for news, upcoming gigs, media and more!</p>
          </div>
        </div>
        <div style="padding: 6px 0;">
          <div class="sib-input sib-form-block">
            <div class="form__entry entry_block">
              <div class="form__label-row">
                <label class="entry__label" for="EMAIL" data-required="*">Enter your email address to subscribe</label>
                <div class="entry__field">
                  <input class="input" type="text" id="EMAIL" name="EMAIL" autocomplete="off" placeholder="EMAIL" data-required="true" required />
                </div>
              </div>
              <!-- svelte-ignore a11y_label_has_associated_control -->
              <label class="entry__error entry__error--primary"></label>
            </div>
          </div>
        </div>
        <div style="padding: 6px 0;">
          <div class="sib-optin sib-form-block" data-required="true">
            <div class="form__entry entry_mcq">
              <div class="form__label-row">
                <div class="entry__choice">
                  <label>
                    <input type="checkbox" class="input_replaced" value="1" id="OPT_IN" name="OPT_IN" required />
                    <span class="checkbox checkbox_tick_positive"></span>
                    <span>I agree to receive your newsletters and accept the data privacy statement.</span>
                  </label>
                </div>
              </div>
              <!-- svelte-ignore a11y_label_has_associated_control -->
              <label class="entry__error entry__error--primary"></label>
            </div>
          </div>
        </div>
        <div style="padding: 6px 0;">
          <div class="g-recaptcha-v3" data-sitekey="6Lc3I78qAAAAAJaTilc9XuH6lEY5An82O3p0WUXH" style="display:none"></div>
        </div>
        <div style="padding: 6px 0;">
          <div class="sib-form-block">
            <button class="sib-form-block__button sib-form-block__button-with-loader" form="sib-form" type="submit">
              SUBSCRIBE
            </button>
          </div>
        </div>
        <input type="text" name="email_address_check" value="" style="display:none;">
        <input type="hidden" name="locale" value="en">
      </form>
    </div>
  </div>
</div>

<style>
  #sib-container input::placeholder {
    text-align: left;
    font-family: Futura, sans-serif;
    color: #666;
  }

  .sib-form {
    display: flex;
    justify-content: center;
    text-align: center;
    background-color: transparent;
  }

  .sib-container--large {
    padding: 20px;
    background-color: #1a1a1a !important;
    color: white;
    max-width: 540px;
    border-radius: 6px;
    border: 1px solid #b326ef !important;
  }

  .sib-form-block p,
  .sib-form-block label,
  .entry__label {
    color: #fff !important;
  }

  .form-title p {
    font-size: 26px !important;
    font-weight: 700 !important;
    margin: 0 0 2px !important;
    letter-spacing: 1px;
  }

  .form-subtitle p {
    font-size: 18px !important;
    margin: 0 !important;
    opacity: 0.65;
  }

  .entry__label {
    font-size: 16px !important;
    display: block;
    margin-bottom: 6px;
  }

  .input,
  input[type="text"]:not(.input--hidden) {
    width: 100%;
    padding: 10px;
    margin-bottom: 4px;
    background-color: #2a2a2a !important;
    border: 1px solid #444 !important;
    border-radius: 4px;
    color: #fff !important;
    box-sizing: border-box;
  }

  .sib-form-block__button {
    background-color: #b326ef !important;
    color: #ffffff !important;
    border: none !important;
    padding: 10px !important;
    width: 100%;
    border-radius: 4px !important;
    cursor: pointer;
    font-size: 14px;
    letter-spacing: 1px;
  }

  .sib-form-block__button:hover {
    background-color: #9a1fd4 !important;
  }

  @media (max-width: 600px) {
    .form-subtitle p {
      font-size: 11px !important;
      white-space: normal !important;
    }

    .sib-container--large {
      padding: 14px;
    }
  }
</style>
