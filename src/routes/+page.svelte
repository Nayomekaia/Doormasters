<script>
  import {Hero, place} from '$lib'
  import HeroHome from '$lib/assets/home-hero.jpg';
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
        <img src="{place}" alt={deur.title} loading="lazy">
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

<style>

/* RESET FIX */
:global(body) {
  margin: 0;
}

/* HERO */
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
}

.hero-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 2;
}

.hero-text h1 {
  font-family: var(--font-secondary);
  font-size: clamp(2.5rem, 6vw, 5rem);
  margin: 0;
  color: white;
  letter-spacing: 3px;
}

.hero-text h2 {
  font-size: clamp(1rem, 2.5vw, 1.8rem);
  margin-top: 0.5rem;
  font-weight: 400;
  color: white;
}

.hero::after {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.3);
}

/* INTRO */
.intro-section {
  background-color: #ffffff;

  /* Zorgt dat alles in het midden van het scherm staat */
  display: flex;
  justify-content: center;   /* horizontaal centreren */
  align-items: center;       /* verticaal centreren */
  min-height: 100vh;         /* volledige schermhoogte */
}

.intro-content {
  max-width: 900px;
  width: 100%;
  
  /* Dit zorgt dat de tekst links blijft */
  text-align: left;
}

.intro-content h2 {
  max-width: 600px;
  margin-bottom: 2rem;
}

.intro-content p {
  max-width: 600px;
}

/* LABEL */
.label {
  display: block;
  font-family: var(--font-primary);
  font-size: 0.75rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--color-blue-dark);
  margin-bottom: 1rem;
}

/* DEUREN */
.deuren-section {
  padding: 6rem 2rem;
  background-color: #fafafa;
}

.deuren-header {
  max-width: 1400px;
  margin: 0 auto 4rem;
  text-align: center;
}

.deuren-grid {
  list-style: none;
  padding: 0;
  margin: 0 auto;
  max-width: 1400px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

.deur-card {
  background: #ffffff;
  overflow: hidden;
  border-radius: 5px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
  }
}

.deur-image {
  margin: 0;
  aspect-ratio: 4/3;
  overflow: hidden;
}

.deur-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.deur-content {
  padding: 2rem;
}

.deur-content h3 {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.deur-content p {
  font-size: 1rem;
  line-height: 1.7;
}

/* RESPONSIVE */
@media (min-width: 768px) {
  .intro-section {
    padding: 10rem 3rem;
  }

  .deuren-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 1024px) {
  .intro-section {
    padding: 12rem 4rem;
  }
}

</style>