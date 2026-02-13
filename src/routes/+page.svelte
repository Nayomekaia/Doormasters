<script>
    import {Hero, place} from '$lib';
  import heroVideo from '$lib/assets/hero.gif';
  export let data;
  let home = data.home;

  // Filter sections
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

<!-- Hero Section -->
<section class="hero">
  <img src={heroVideo} alt="Doormasters hero" class="hero-image"> 
  <header class="hero-text">
    <h1>DOORMASTERS</h1>
    <h2>MEESTERS IN DEUREN</h2>
  </header>
</section>

<!-- Intro Section -->
{#if intro}
<section class="intro-section">
  <article class="intro-content">
    <h2>{intro.title}</h2>
    <p>{@html intro.body.replace(/\n/g, '<br>')}</p>
  </article>
</section>
{/if}

<!-- Deuren Grid Section -->
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

<!-- Industrieel Section -->
{#if industrieel}
<section class="industrieel-section">
  <article class="industrieel-content">
    <span class="label">{industrieel.subtitle}</span>
    <h2>{industrieel.title}</h2>
    <p>{@html industrieel.body.replace(/\n/g, '<br>')}</p>
  </article>
  <figure class="industrieel-image">
    <img src="{place}" alt={industrieel.title} loading="lazy">
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
    <img src="{place}" alt={service.title} loading="lazy">
  </figure>
  <article class="service-content">
    <span class="label">SERVICE</span>
    <h2>{service.title}</h2>
    <p>{@html service.body.replace(/\n/g, '<br>')}</p>
    <a href="/service" class="cta-link">LEES MEER</a>
  </article>
</section>
{/if}

<!-- Werkwijze Section -->
{#if werkwijze}
<section class="werkwijze-section">
  <article class="werkwijze-content">
    <span class="label">{werkwijze.subtitle}</span>
    <h2>{werkwijze.title}</h2>
    <p>{werkwijze.body}</p>
  </article>
  <figure class="werkwijze-image">
    <img src="{place}" alt={werkwijze.title} loading="lazy">
  </figure>
  <aside class="werkwijze-steps">
    <ol>
      <li>
        <strong>1. VRAAG EEN MAATWERKOFFERTE</strong>
      </li>
      <li>
        <strong>2. PERSOONLIJK ADVIES OP LOCATIE</strong>
      </li>
      <li>
        <strong>3. OFFERTE OP MAAT</strong>
      </li>
      <li>
        <strong>4. PROFESSIONELE INSTALLATIE</strong>
      </li>
      <li>
        <strong>5. NAZORG & ONDERHOUD</strong>
        <p>Onze samenwerking stopt niet bij de oplevering. We bieden regelmatig onderhoud, 24/7 service en langdurige garantie. Doormasters blijft uw vaste partner voor elke vraag.</p>
      </li>
    </ol>
  </aside>
</section>
{/if}

<!-- Projecten Section -->
{#if projecten}
<section class="projecten-section">
  <header class="projecten-header">
    <h2>{projecten.title}</h2>
    <p>{projecten.body}</p>
  </header>
  
  <ul class="projecten-grid">
    <li class="project-card">
      <figure class="project-image">
        <img src="{place}" alt="Project 1" loading="lazy">
      </figure>
    </li>
    <li class="project-card">
      <figure class="project-image">
        <img src="{place}" alt="Project 2" loading="lazy">
      </figure>
    </li>
    <li class="project-card">
      <figure class="project-image">
        <img src="{place}" alt="Project 3" loading="lazy">
      </figure>
    </li>
  </ul>
  
  <footer class="projecten-footer">
    <p>Bekijk de projecten inclusief inspiratie.</p>
    <a href="/projecten" class="cta-button">BEKIJK HIER</a>
  </footer>
</section>
{/if}

<!-- Video CTA Section -->
{#if video && video.video}
<section class="video-cta-section">
  <figure class="video-cta-image">
    <img src="{place}" alt="Doormasters monteur" loading="lazy">
  </figure>
  <aside class="video-cta-bubble">
    <p>Vraag nu je offerte aan</p>
  </aside>
</section>
{/if}


<style>
  /* HERO */
  .hero {
    position: relative;
    width: 100%;
    height: 100vh;
    max-height: 900px;
    overflow: hidden;
  }

  .hero-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .hero-text {
    position: absolute;
    top: 80%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  }

  .hero-text h1 {
    font-size: clamp(2.5rem, 8vw, 5rem);
    font-family: var(--font-secondary);
    font-weight: var(--fw-light);
    color: var(--color-white);
    margin: 0;
    letter-spacing: 0.1em;
  }

  .hero-text h2 {
    font-size: clamp(1rem, 3vw, 1.5rem);
    font-family: var(--font-secondary);
    color: var(--color-white);
    margin: 0.5rem 0 0;
    letter-spacing: 0.2em;
  }

  /* INTRO */
  .intro-section {
    padding: 8rem 2rem;
    background-color: #ffffff;
    text-align: center;
  }

  .intro-content {
    max-width: 900px;
    margin: 0 auto;
  }

  .intro-content h2 {
    font-size: clamp(1.75rem, 4vw, 2.5rem);
    font-weight: 600;
    line-height: 1.3;
    margin-bottom: 2rem;
    color: #0a0a0a;
  }

  .intro-content p {
    font-size: 1.0625rem;
    line-height: 1.8;
    color: #404040;
  }

  /* LABEL */
  .label {
    display: block;
    font-size: 0.75rem;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: #737373;
    margin-bottom: 1rem;
  }

  /* DEUREN GRID */
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
    color: #0a0a0a;
  }

  .deur-content p {
    font-size: 1rem;
    line-height: 1.7;
    color: #525252;
  }

  /* INDUSTRIEEL SECTION */
  .industrieel-section {
    display: grid;
    grid-template-columns: 1fr;
    max-width: 1400px;
    margin: 0 auto;
  }

  .industrieel-content {
    padding: 4rem 2rem;
    background-color: #ffffff;
  }

  .industrieel-content h2 {
    font-size: clamp(1.75rem, 4vw, 2.25rem);
    font-weight: 600;
    line-height: 1.3;
    margin-bottom: 1.5rem;
    color: #0a0a0a;
  }

  .industrieel-content p {
    font-size: 1.0625rem;
    line-height: 1.8;
    color: #404040;
  }

  .industrieel-image {
    margin: 0;
    min-height: 400px;
  }

  .industrieel-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  /* PERFECTE DEUR SECTION - Full width */
  .perfecte-deur-section {
    background-color: #fafafa;
    padding: 0;
  }

  .perfecte-deur-image-full {
    margin: 0;
    width: 100%;
    height: 60vh;
    max-height: 600px;
  }

  .perfecte-deur-image-full img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .perfecte-deur-text {
    padding: 4rem 2rem;
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
  }

  .perfecte-deur-text h2 {
    font-size: clamp(1.75rem, 4vw, 2.25rem);
    font-weight: 600;
    line-height: 1.3;
    margin-bottom: 1.5rem;
    color: #0a0a0a;
  }

  .perfecte-deur-text p {
    font-size: 1.0625rem;
    line-height: 1.8;
    color: #404040;
  }

  /* SERVICE SECTION - Image left, text right */
  .service-section {
    display: grid;
    grid-template-columns: 1fr;
    background-color: #ffffff;
  }

  .service-image {
    margin: 0;
    min-height: 400px;
  }

  .service-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .service-content {
    padding: 4rem 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .service-content h2 {
    font-size: clamp(1.5rem, 3vw, 2rem);
    font-weight: 600;
    line-height: 1.3;
    margin-bottom: 1.5rem;
    color: #0a0a0a;
  }

  .service-content p {
    font-size: 1rem;
    line-height: 1.7;
    color: #404040;
    margin-bottom: 2rem;
  }

  .cta-link {
    display: inline-block;
    padding: 0.75rem 2rem;
    border: 1px solid #0a0a0a;
    color: #0a0a0a;
    text-decoration: none;
    font-size: 0.875rem;
    letter-spacing: 0.1em;
    transition: all 0.3s ease;
    align-self: flex-start;
  }

  .cta-link:hover {
    background-color: #0a0a0a;
    color: #ffffff;
  }

  /* WERKWIJZE SECTION */
  .werkwijze-section {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-areas:
      "content"
      "image"
      "steps";
    background-color: #fafafa;
  }

  .werkwijze-content {
    grid-area: content;
    padding: 4rem 2rem;
    background-color: #ffffff;
  }

  .werkwijze-content h2 {
    font-size: clamp(1.75rem, 4vw, 2.25rem);
    font-weight: 600;
    line-height: 1.3;
    margin-bottom: 1.5rem;
    color: #0a0a0a;
  }

  .werkwijze-content p {
    font-size: 1.0625rem;
    line-height: 1.8;
    color: #404040;
  }

  .werkwijze-image {
    grid-area: image;
    margin: 0;
    min-height: 400px;
  }

  .werkwijze-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .werkwijze-steps {
    grid-area: steps;
    padding: 4rem 2rem;
    background-color: #ffffff;
  }

  .werkwijze-steps ol {
    list-style: none;
    padding: 0;
    margin: 0;
    max-width: 600px;
  }

  .werkwijze-steps li {
    padding: 1.5rem 0;
    border-bottom: 1px solid #e5e5e5;
  }

  .werkwijze-steps li:last-child {
    border-bottom: none;
  }

  .werkwijze-steps strong {
    display: block;
    font-size: 0.875rem;
    font-weight: 600;
    letter-spacing: 0.05em;
    color: #0a0a0a;
    margin-bottom: 0.5rem;
  }

  .werkwijze-steps p {
    font-size: 0.9375rem;
    line-height: 1.6;
    color: #525252;
    margin: 0.5rem 0 0;
  }

  /* PROJECTEN SECTION */
  .projecten-section {
    padding: 6rem 2rem;
    background-color: #fafafa;
  }

  .projecten-header {
    max-width: 900px;
    margin: 0 auto 4rem;
    text-align: center;
  }

  .projecten-header h2 {
    font-size: clamp(1.75rem, 4vw, 2.5rem);
    font-weight: 600;
    line-height: 1.3;
    margin-bottom: 1rem;
    color: #0a0a0a;
  }

  .projecten-header p {
    font-size: 1.0625rem;
    line-height: 1.7;
    color: #525252;
  }

  .projecten-grid {
    list-style: none;
    padding: 0;
    margin: 0 auto 4rem;
    max-width: 1400px;
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .project-card {
    aspect-ratio: 4/3;
    overflow: hidden;
  }

  .project-image {
    margin: 0;
    height: 100%;
  }

  .project-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .projecten-footer {
    text-align: center;
    max-width: 600px;
    margin: 0 auto;
  }

  .projecten-footer p {
    font-size: 1rem;
    color: #525252;
    margin-bottom: 2rem;
  }

  .cta-button {
    display: inline-block;
    padding: 1rem 3rem;
    background-color: #0a0a0a;
    color: #ffffff;
    text-decoration: none;
    font-size: 0.875rem;
    letter-spacing: 0.1em;
    transition: all 0.3s ease;
  }

  .cta-button:hover {
    background-color: #2a2a2a;
  }

  /* VIDEO CTA SECTION */
  .video-cta-section {
    position: relative;
    height: 70vh;
    max-height: 800px;
    overflow: hidden;
  }

  .video-cta-image {
    margin: 0;
    width: 100%;
    height: 100%;
  }

  .video-cta-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .video-cta-bubble {
    position: absolute;
    bottom: 8%;
    right: 5%;
    background-color: #1e3a8a;
    color: #ffffff;
    padding: 1.5rem 2rem;
    border-radius: 50px;
    font-size: 1.125rem;
    font-weight: 600;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  }

  .video-cta-bubble p {
    margin: 0;
  }

  /* TABLET */
  @media (min-width: 768px) {
    .intro-section {
      padding: 10rem 3rem;
    }

    .deuren-grid {
      grid-template-columns: repeat(3, 1fr);
    }

    .industrieel-section {
      grid-template-columns: 1fr 1fr;
    }

    .service-section {
      grid-template-columns: 1fr 1fr;
    }

    .werkwijze-section {
      grid-template-columns: 1fr 1fr;
      grid-template-areas:
        "content image"
        "steps steps";
    }

    .werkwijze-steps {
      padding: 4rem 3rem;
    }

    .projecten-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  /* DESKTOP */
  @media (min-width: 1024px) {
    .intro-section {
      padding: 12rem 4rem;
    }

    .industrieel-content,
    .service-content,
    .werkwijze-content {
      padding: 6rem 4rem;
    }

    .industrieel-image,
    .service-image,
    .werkwijze-image {
      min-height: 600px;
    }

    .perfecte-deur-text {
      padding: 6rem 4rem;
    }

    .werkwijze-section {
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-areas: "content image steps";
    }

    .projecten-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }
</style>