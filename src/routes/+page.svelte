<script>
  //componenten 
  import {Hero, place, Button} from '$lib'
  import Reviews from '$lib/components/Reviews.svelte';

  //images 
  import HeroHome from '$lib/assets/home-hero.jpg';
  import Ja from '$lib/assets/ja.jpg';
  

  // Data ophalen 
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
    <h2>Specialist in maatwerk deuren voor wonen en werken</h2>
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
        <h4>{deur.title}</h4>
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
    <h3>{industrieel.title}</h3>
    <p>{@html industrieel.body.replace(/\n/g, '<br>')}</p>
    <section class='button-wrapper'>
    <Button href="/projecten" variant="outline">Lees meer</Button>
  </section>
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

{#if service}
<section class="service-section">
  <figure class="service-image">
    <img src="{service.image}" alt={service.title} loading="lazy">
  </figure>
  <article class="service-content">
    <span class="label">{service.subtitle}</span>
    <h3>{service.title}</h3>
    <p>{@html service.body.replace(/\n/g, '<br>')}</p>
    <section class='button-wrapper'>
    <Button href="/projecten" variant="outline">Lees meer</Button>
  </section>
  </article>
</section>
{/if}

{#if werkwijze}
<section class="werkwijze-section">
  <article class="werkwijze-content">
    <span class="label">{werkwijze.subtitle}</span>
    <h3>{werkwijze.title}</h3>
    <p>{@html werkwijze.body.replace(/\n/g, '<br>')}</p>
    <section class='button-wrapper'>
    <Button href="/projecten" variant="outline">Lees meer</Button>
  </section>
  </article>
  <figure class="werkwijze-image">
    <img src="{werkwijze.image}" alt={werkwijze.title} loading="lazy">
  </figure>
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

.button-wrapper {
margin-top: 3rem;  
} 

/* ══════════════════════════════════════════
   HERO
══════════════════════════════════════════ */
.hero {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  border-bottom: 1px solid var(--neutral-700);
  box-shadow: 0 1px 3px var(--neutral-700);
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
  from { transform: scale(1.20); }
  to   { transform: scale(1.00); }
}

.hero::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(
    160deg,
    rgba(0, 0, 0, 0.63) 0%,
    rgba(0, 0, 0, 0.418) 60%,
    rgba(0, 0, 0, 0.697) 100%
  );
  z-index: 1;
}

.hero-text {
  position: absolute;
  top: 55%;
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
  font-size:  clamp(1.875rem, 1.602rem + 4vw, 6rem);;
  margin: 0;
  font-weight: var(--fw-light);
  color: var(--color-white);
}

.hero-text h2 {
  font-size: clamp(0.85rem, 2vw, 1.2rem);
  margin-top: 2rem;
  color: var(--color-white);
  letter-spacing: 0.2em;
  text-transform: uppercase;
}

/* ══════════════════════════════════════════
   INTRO
══════════════════════════════════════════ */
.intro-section {
  background-color: var(--color-white);
  display: flex;
  justify-content: center; /* horizontaal centreren */
  align-items: center;     /* verticale centrering content */
  padding: 4rem 2.5rem;   /* mobile: kleinere padding */
  text-align: left;
  margin-bottom: -8rem;
}
.intro-content {
  max-width: 650px;
  width: 100%;
}

/* Kop en paragraaf spacing */
.intro-content h2,
.intro-content p {
  margin: 0;
}

.intro-content h2 {
  margin-bottom: 1rem;
}

.intro-content p {
  margin-bottom: 2rem; /* mobile: minder ruimte onder p */
  max-width: 100%;
}

/* ==========================
   Tablet en Desktop
========================== */
@media (min-width: 600px) {
  .intro-section {
    padding: 5rem 2rem;
    margin-bottom: -13rem;
  }
  .intro-content p {
    margin-bottom: 2.5rem;
  }
}

@media (min-width: 1024px) {
  .intro-section {
    padding: 6rem 2rem;
    margin-bottom: -18rem;
  }
  .intro-content p {
    margin-bottom: 3rem;
  }
}

/* ══════════════════════════════════════════
   DEUREN GRID
══════════════════════════════════════════ */

/* ==========================
   Labels
========================== */
.label {
  display: block;
  font-family: var(--font-primary);
  font-size: 0.7rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--color-blue-dark);
  margin-bottom: 1rem;
  max-width: 300px;
}

/* ==========================
   Deuren Section
========================== */
.deuren-section {
  padding: 6rem 1.5rem 0; /* mobile-first: kleinere padding */
  background-color: var(--color-white);
}

/* Header */
.deuren-header {
  max-width: 1300px;
  margin: 0 auto 2.5rem;
  text-align: center;
}

/* ==========================
   Grid - Mobile First
========================== */
.deuren-grid {
  list-style: none;
  padding: 0;
  margin: 0 auto;
  max-width: 1300px;
  display: grid;
  grid-template-columns: 1fr; /* mobiel: 1 kolom */
  gap: 2rem;
}

/* ==========================
   Deur Card
========================== */
.deur-card {
  background: var(--color-white);
  overflow: hidden;
  border-radius: 6px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06), 0 4px 16px rgba(0, 0, 0, 0.05);
  transition: transform 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94),
              box-shadow 0.35s ease;
}

.deur-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 36px rgba(0, 0, 0, 0.12);
}

/* Image */
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

/* Content */
.deur-content {
  padding: 1.5rem 1.5rem 2rem; /* kleiner op mobiel */
}

.deur-content h4 {
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  font-size: 0.9rem;
}

.deur-content p {
  margin: 0;
  font-size: 0.85rem;
}

/* ==========================
   Tablet (≥600px)
========================== */
@media (min-width: 600px) {
  .deuren-section {
    padding: 10rem 2rem 0;
  }
  .deuren-grid {
    grid-template-columns: repeat(2, 1fr); /* 2 kolommen */
    gap: 2.5rem;
  }
  .deur-content {
    padding: 2rem 2rem 2.5rem;
  }
  .deur-content h4 {
    font-size: 1rem;
  }
  .deur-content p {
    font-size: 0.9rem;
  }
}

/* ==========================
   Desktop (≥1024px)
========================== */
@media (min-width: 1024px) {
  .deuren-section {
    padding: 15rem 2rem 0;
  }
  .deuren-grid {
    grid-template-columns: repeat(3, 1fr); /* 3 kolommen */
    gap: 3rem;
  }
  .deur-content h4 {
    font-size: 1.1rem;
  }
  .deur-content p {
    font-size: 1rem;
  }
}

/* ══════════════════════════════════════════
   INDUSTRIEEL
══════════════════════════════════════════ */
.industrieel-section {
  display: grid;
  grid-template-columns: 1fr;
  max-width: 100%;
  background: var(--color-white);
  /* Ruimte rondom sectie */
  margin: 5rem 0;
  /* Subtiele scheiding */
  border-top: 1px solid #efefed;
}

.industrieel-content {
  padding: 5rem 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 600px;
  margin: 0 auto;
}

.industrieel-content h3 {
  margin-bottom: 1.5rem;
  text-transform: uppercase;
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
  display: flex;
  flex-direction: column;
  align-items: center;  
  justify-content: center;     
  padding: 3rem 1.5rem;      
  background-color: var(--color-light-blue);
  text-align: left;
  box-shadow:
    inset 0 10px 20px rgba(0,0,0,0.15),   /* inner shadow boven */
    inset 0 -10px 20px rgba(0,0,0,0.15);  /* inner shadow onder */
}

/* ==========================
   Foto
========================== */
.perfecte-deur-image-full {
  width: 100%;  
  overflow: hidden;
  border-radius: 5px;
}

.perfecte-deur-image-full img {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
  /* Animatie toevoegen */
  animation: slow-zoom 10s ease-in-out infinite alternate;
}

/* ==========================
   Keyframes: langzaam in- en uitzoomen
========================== */
@keyframes slow-zoom {
  0% {
    transform: scale(1);     /* start normale grootte */
  }
  50% {
    transform: scale(1.05);  /* licht inzoomen */
  }
  100% {
    transform: scale(1);     /* terug naar normaal */
  }
}

/* ==========================
   Tekst
========================== */
.perfecte-deur-text {
  max-width: 700px;
}

.perfecte-deur-text h2 {
  margin-bottom: 1rem;
}

.perfecte-deur-text p {
  margin-bottom: 2rem;
}

/* ==========================
   Responsive
========================== */
@media (min-width: 600px) {
  .perfecte-deur-section {
    padding: 4rem 2rem;
  }
  .perfecte-deur-image-full {
    margin-bottom: 3rem;
  }
}

@media (min-width: 1024px) {
  .perfecte-deur-section {
    padding: 5rem 2rem;
  }
  .perfecte-deur-image-full {
    margin-bottom: 4rem;
  }
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

.service-content p {
  margin-bottom: 2.5rem;
}

/* ══════════════════════════════════════════
   werkwijzw
══════════════════════════════════════════ */
/* ══════════════════════════════════════════
   WERKWIJZE — zelfde styling als INDUSTRIEEL
══════════════════════════════════════════ */
.werkwijze-section {
  display: grid;
  grid-template-columns: 1fr;
  max-width: 100%;
  background: var(--color-white);
  margin: 5rem 0;
  border-top: 1px solid #efefed;
}

.werkwijze-content {
  padding: 5rem 2rem 0;   /* bottom = 0 zodat onderkant strak */
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 600px;
  margin: 0 auto;
}

.werkwijze-content h3 {
  margin-bottom: 1.5rem;
  text-transform: uppercase;
}

.werkwijze-image {
  margin: 0;
  min-height: 450px;
  overflow: hidden;
}

.werkwijze-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
}

/* RESPONSIVE — TABLET (768px+) */
@media (min-width: 768px) {
  .werkwijze-section {
    grid-template-columns: 1fr 1fr;  /* content + image */
    margin: 6rem 0;
  }

  .werkwijze-content {
    padding: 5rem 3rem 5rem 4rem;
    max-width: none;
    margin: 0;
  }
}

/* RESPONSIVE — DESKTOP (1024px+) */
@media (min-width: 1024px) {
  .werkwijze-content {
    padding: 7rem 5rem;
  }

  .werkwijze-image {
    min-height: 640px;
  }

  .werkwijze-section {
    margin: 8rem 0;
  }
}

/* RESPONSIVE — LARGE (1440px+) */
@media (min-width: 1440px) {
  .werkwijze-content {
    padding: 8rem 6rem 0;
    max-width: 680px;
  }

  .werkwijze-section {
    max-width: 1600px;
    margin-left: auto;
    margin-right: auto;
  }
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

  .video-wrapper {
    margin: 6rem auto;
  }
}

/* ══════════════════════════════════════════
   RESPONSIVE — DESKTOP (1024px+)
══════════════════════════════════════════ */
@media (min-width: 1024px) {

  .industrieel-content,
  .service-content {
    padding: 7rem 5rem;
  }

  .industrieel-image,
  .service-image {
    min-height: 640px;
  }

 


  .industrieel-section,
  .service-section {
    margin: 8rem 0;
  }

  .video-wrapper {
    margin: 8rem auto;
  }
}

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
   RESPONSIVE — LARGE (1440px+)
══════════════════════════════════════════ */
@media (min-width: 1440px) {
  .industrieel-content,
  .service-content {
    padding: 8rem 6rem 0;
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