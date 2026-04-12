# Homepage Layout Redesign

**Date:** 2026-04-11  
**Status:** Approved

## Summary

Clean up the homepage below the music video. Replace the scrolling newsletter iframe with the native `BrevoForm` component, and give the Bandcamp embed and newsletter section better visual structure.

## Current State

`src/pages/Home.svelte` currently renders (in order):
1. Logo
2. Nav bar (social icons + Bio link)
3. Tagline text
4. YouTube video (full width, responsive)
5. Bandcamp embed — fixed `350x442px` iframe, left-aligned by default
6. Newsletter — `540x621px` iframe pointed at Brevo's hosted form page, `scrolling="auto"` causes an internal scrollbar

## Target Layout

Same top section (logo, nav, tagline, video — unchanged).

Below the video:

### 1. Bandcamp section
- Centered horizontally
- Small uppercase label "LISTEN" above the embed
- Same Bandcamp iframe widget (no change to the embed src)

### 2. Newsletter section
- Full-width dark panel below Bandcamp
- Deep purple/black gradient background to match site aesthetic
- Uppercase heading: **"STAY IN THE LOOP"**
- Subtitle: **"Get updates on new music & shows"**
- Replace the Brevo iframe with `<BrevoForm />` — already imported in `Home.svelte`, already has working POST action to Brevo's API endpoint

## Changes Required

### `src/pages/Home.svelte`
- Remove the `<div class="newsletter-wrapper">` iframe block
- Remove the unused `BrevoForm` and `Mailerlite` imports (or keep `BrevoForm` — it will now be used)
- Add a `LISTEN` label above the Bandcamp container
- Center the `.bandcamp-container`
- Add a `.newsletter-section` wrapper around `<BrevoForm />` with dark gradient styling

### No changes to
- `src/lib/BrevoForm.svelte` — works as-is
- Bandcamp iframe src
- YouTube iframe src
- Logo, nav, tagline, footer

## Brevo Functionality

`BrevoForm.svelte` submits via `method="POST"` to `https://7937f353.sibforms.com/serve/MUIFAO7o...`. This is identical to what the iframe was loading. Functionality is preserved.
