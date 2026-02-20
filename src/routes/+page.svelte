<script>
  import {Hero, place, Button} from '$lib'
  import Reviews from '$lib/components/Reviews.svelte';
  import HeroHome from '$lib/assets/home-hero.jpg';
  import Ja from '$lib/assets/ja.jpg';
  export let data;
  let home = data.home;

  const intro = home.find(item => item.section_key === 'intro');
  const deuren = home.filter(item => item.section_key === 'soort deuren');
  const industrieel = home.find(item => item.section_key === 'Industriële deuren ');
  const perfecteDeur = home.find(item => item.section_key === 'De perfecte deur,');
  const service = home.find(item => item.section_key === 'Service en onderhoud');
  const werkwijze = home.find(item => item.section_key === 'werkwijze');
  const projecten = home.find(item => item.section_key === 'Projecten en referenties\n');
  const toekomst = home.find(item => item.section_key === ' Bouwen aan de toekomst');
  const video = home.find(item => item.section_key === 'video');
</script>

<svelte:head>
  <title>Doormasters | Meesters in Deuren</title>
</svelte:head>

<section class="hero">
  <img src={HeroHome} alt="Doormasters hero" class="hero-image"> 
  <header class="hero-text">
    <h1>DOORMASTERS</h1>
    <h2>MEESTERS IN DEUREN</h2>
  </header>
</section>

{#if intro}
<section class="intro-section">
  <article class="intro-content">
    <h2>{intro.title}</h2>
    <p>{@html intro.body.replace(/\n/g, '<br>')}</p>
  </article>
</section>
{/if}

{#if deuren.length > 0}
<section class="deuren-section">
  <header class="deuren-header">
    <span class="label">{deuren[0].subtitle}</span>
  </header>
  
  <ul class="deuren-grid">
    {#each deuren as deur}
    <li class="deur-card">
      <figure class="deur-image">
        <img src="{deur.image}" alt={deur.title} loading="lazy">
      </figure>
      <article class="deur-content">
        <h3>{deur.title}</h3>
        <p>{deur.body}</p>
      </article>
    </li>
    {/each}
  </ul>
</section>
{/if}

<!-- Industrieel Section -->
{#if industrieel}
<section class="industrieel-section">
  <article class="industrieel-content">
    <span class="label">{industrieel.subtitle}</span>
    <h2>{industrieel.title}</h2>
    <p>{@html industrieel.body.replace(/\n/g, '<br>')}</p>
  </article>
  <figure class="industrieel-image">
    <img src="{industrieel.image}" alt={industrieel.title} loading="lazy">
  </figure>
</section>
{/if}

<!-- Perfecte Deur Section - Full width image + text -->
{#if perfecteDeur}
<section class="perfecte-deur-section">
  <figure class="perfecte-deur-image-full">
    <img src="{place}" alt={perfecteDeur.title} loading="lazy">
  </figure>
  <article class="perfecte-deur-text">
    <h2>{perfecteDeur.title}</h2>
    <p>{perfecteDeur.body}</p>
  </article>
</section>
{/if}


<!-- Service Section - Image left, text right -->
{#if service}
<section class="service-section">
  <figure class="service-image">
    <img src="{service.image}" alt={service.title} loading="lazy">
  </figure>
  <article class="service-content">
    <span class="label">SERVICE</span>
    <h2>{service.title}</h2>
    <p>{@html service.body.replace(/\n/g, '<br>')}</p>

  </article>
</section>
{/if}

{#if video}
  <div class="video-wrapper">
    <iframe
      width="100%"
      height="500"
      src="{video.video}?autoplay=1&mute=1&rel=0&controls=1"
      title="{video.title}"
      allowfullscreen
    ></iframe>
  </div>
{/if}

<img class="image-last" src={Ja} alt="ja">

<Reviews />

<style>
/* ============================================
   DOORMASTERS — HOMEPAGE STYLES
   ============================================ */

/* ── IMAGE LAST ── */
.image-last {
  margin-top: 0;
  max-width: 100%;
  height: 60vh;
  object-fit: cover;
  display: block;
  width: 100%;
}

/* ══════════════════════════════════════════
   HERO
══════════════════════════════════════════ */
.hero {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transform: scale(1.03);
  animation: heroZoom 8s ease-out forwards;
}

@keyframes heroZoom {
  from { transform: scale(1.08); }
  to   { transform: scale(1.00); }
}

.hero::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(
    160deg,
    rgba(0, 0, 0, 0.55) 0%,
    rgba(0, 0, 0, 0.25) 60%,
    rgba(0, 0, 0, 0.45) 100%
  );
  z-index: 1;
}

.hero-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 2;
  animation: heroFadeUp 1s ease-out 0.3s both;
}

@keyframes heroFadeUp {
  from { opacity: 0; transform: translate(-50%, calc(-50% + 20px)); }
  to   { opacity: 1; transform: translate(-50%, -50%); }
}

.hero-text h1 {
  font-family: var(--font-secondary);
  font-size: clamp(3rem, 8vw, 6.5rem);
  margin: 0;
  color: white;
  letter-spacing: 0.12em;
  font-weight: 700;
  line-height: 1;
}

.hero-text h2 {
  font-size: clamp(0.85rem, 2vw, 1.2rem);
  margin-top: 1rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.85);
  letter-spacing: 0.3em;
  text-transform: uppercase;
}

/* ══════════════════════════════════════════
   LABEL (gedeeld)
══════════════════════════════════════════ */
.label {
  display: block;
  font-family: var(--font-primary);
  font-size: 0.7rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--color-blue-dark);
  margin-bottom: 1rem;
}

/* ══════════════════════════════════════════
   INTRO
══════════════════════════════════════════ */
.intro-section {
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8rem 2rem;
}

.intro-content {
  max-width: 860px;
  width: 100%;
}

.intro-content h2 {
  max-width: 580px;
  margin-bottom: 2rem;
  font-size: clamp(1.8rem, 3.5vw, 2.6rem);
  line-height: 1.25;
  font-weight: 700;
  letter-spacing: -0.01em;
}

.intro-content p {
  max-width: 600px;
  font-size: 1.0625rem;
  line-height: 1.85;
  color: #444;
}

/* ══════════════════════════════════════════
   DEUREN GRID
══════════════════════════════════════════ */
.deuren-section {
  padding: 7rem 2rem;
  background-color: #f7f7f5;
  /* Ruimte boven en onder de sectie */
  margin: 5rem 0;
}

.deuren-header {
  max-width: 1300px;
  margin: 0 auto 3.5rem;
  text-align: center;
}

.deuren-grid {
  list-style: none;
  padding: 0;
  margin: 0 auto;
  max-width: 1300px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.75rem;
}

.deur-card {
  background: #ffffff;
  overflow: hidden;
  border-radius: 3px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06), 0 4px 16px rgba(0, 0, 0, 0.05);
  transition: transform 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94),
              box-shadow 0.35s ease;
}

.deur-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 36px rgba(0, 0, 0, 0.12);
}

.deur-image {
  margin: 0;
  aspect-ratio: 16 / 10;
  overflow: hidden;
}

.deur-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
  transition: transform 0.5s ease;
}

.deur-card:hover .deur-image img {
  transform: scale(1.04);
}

.deur-content {
  padding: 2rem 2rem 2.5rem;
}

.deur-content h3 {
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
  letter-spacing: 0.01em;
  text-transform: uppercase;
}

.deur-content p {
  font-size: 0.9375rem;
  line-height: 1.75;
  color: #555;
  margin: 0;
}

/* ══════════════════════════════════════════
   INDUSTRIEEL
══════════════════════════════════════════ */
.industrieel-section {
  display: grid;
  grid-template-columns: 1fr;
  max-width: 100%;
  background: #fff;
  /* Ruimte rondom sectie */
  margin: 5rem 0;
  /* Subtiele scheiding */
  border-top: 1px solid #efefed;
  border-bottom: 1px solid #efefed;
}

.industrieel-content {
  padding: 5rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 600px;
  margin: 0 auto;
}

.industrieel-content h2 {
  margin-bottom: 1.5rem;
  font-size: clamp(1.6rem, 3vw, 2.2rem);
  font-weight: 700;
  line-height: 1.3;
}

.industrieel-content p {
  font-size: 1rem;
  line-height: 1.85;
  color: #444;
}

.industrieel-image {
  margin: 0;
  min-height: 450px;
  overflow: hidden;
}

.industrieel-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
}

/* ══════════════════════════════════════════
   PERFECTE DEUR — full width
══════════════════════════════════════════ */
.perfecte-deur-section {
  background-color: #f7f7f5;
  margin: 5rem 0;
}

.perfecte-deur-image-full {
  width: 100%;
  height: 55vh;
  max-height: 680px;
  overflow: hidden;
  margin: 0;
}

.perfecte-deur-image-full img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
}

.perfecte-deur-text {
  padding: 5rem 2rem;
  max-width: 800px;
  margin: 0 auto;
  text-align: left;
}

.perfecte-deur-text h2 {
  margin-bottom: 1.5rem;
  font-size: clamp(1.8rem, 3.5vw, 2.6rem);
  font-weight: 700;
  line-height: 1.25;
  letter-spacing: -0.01em;
}

.perfecte-deur-text p {
  font-size: 1rem;
  line-height: 1.85;
  color: #444;
  max-width: 620px;
}

/* ══════════════════════════════════════════
   SERVICE
══════════════════════════════════════════ */
.service-section {
  display: grid;
  grid-template-columns: 1fr;
  background: #fff;
  /* Ruimte rondom sectie */
  margin: 5rem 0;
  border-top: 1px solid #efefed;
  border-bottom: 1px solid #efefed;
}

.service-image {
  margin: 0;
  min-height: 420px;
  overflow: hidden;
}

.service-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
}

.service-content {
  padding: 5rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 560px;
  margin: 0 auto;
}

.service-content h2 {
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 700;
  line-height: 1.3;
  margin-bottom: 1.5rem;
  letter-spacing: -0.01em;
}

.service-content p {
  font-size: 1rem;
  line-height: 1.85;
  color: #444;
  margin-bottom: 2.5rem;
}

/* ══════════════════════════════════════════
   VIDEO
══════════════════════════════════════════ */
.video-wrapper {
  margin: 5rem auto;
  max-width: 1200px;
  padding: 0 2rem;
}

.video-wrapper iframe {
  display: block;
  width: 100%;
  border-radius: 3px;
  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.12);
}

/* ══════════════════════════════════════════
   RESPONSIVE — TABLET (768px+)
══════════════════════════════════════════ */
@media (min-width: 768px) {
  .intro-section {
    padding: 11rem 3rem;
  }

  .deuren-grid {
    grid-template-columns: repeat(3, 1fr);
  }

  .deuren-section {
    margin: 6rem 0;
  }

  .industrieel-section {
    grid-template-columns: 1fr 1fr;
    max-width: 100%;
    margin: 6rem 0;
  }

  .industrieel-content {
    padding: 5rem 3rem 5rem 4rem;
    max-width: none;
    margin: 0;
  }

  .service-section {
    grid-template-columns: 1fr 1fr;
    margin: 6rem 0;
  }

  .service-content {
    padding: 5rem 4rem 5rem 4rem;
    max-width: none;
    margin: 0;
  }

  .perfecte-deur-section {
    margin: 6rem 0;
  }

  .perfecte-deur-image-full {
    height: 65vh;
  }

  .video-wrapper {
    margin: 6rem auto;
  }
}

/* ══════════════════════════════════════════
   RESPONSIVE — DESKTOP (1024px+)
══════════════════════════════════════════ */
@media (min-width: 1024px) {
  .intro-section {
    padding: 13rem 5rem;
  }

  .industrieel-content,
  .service-content {
    padding: 7rem 5rem;
  }

  .industrieel-image,
  .service-image {
    min-height: 640px;
  }

  .perfecte-deur-text {
    padding: 7rem 5rem;
  }

  .perfecte-deur-image-full {
    height: 75vh;
    max-height: 800px;
  }

  .deuren-section {
    padding: 8rem 3rem;
    margin: 8rem 0;
  }

  .industrieel-section,
  .service-section,
  .perfecte-deur-section {
    margin: 8rem 0;
  }

  .video-wrapper {
    margin: 8rem auto;
  }
}

/* ══════════════════════════════════════════
   RESPONSIVE — LARGE (1440px+)
══════════════════════════════════════════ */
@media (min-width: 1440px) {
  .industrieel-content,
  .service-content {
    padding: 8rem 6rem;
    max-width: 680px;
  }

  .industrieel-section,
  .service-section {
    max-width: 1600px;
    margin-left: auto;
    margin-right: auto;
  }
}

</style>