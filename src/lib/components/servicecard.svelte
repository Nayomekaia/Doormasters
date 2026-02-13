<script>
    // Je kunt hier data doorgeven als props indien nodig
    export let reasons = [
      {
        number: "1",
        title: "Altijd maatwerkoplossingen",
        description: "Onze deuren worden volledig afgestemd op afmetingen, toepassing, gebruiksdoeleinde en afwerking.",
        image: "{placeholder}"
      },
      {
        number: "2",
        title: "24-uurs storingsdienst",
        description: "Wij zijn dag en nacht bereikbaar voor spoedgevallen en bieden directe ondersteuning bij technische problemen.",
        image: "{placeholder}"
      },
      {
        number: "3",
        title: "Ervaren en gecertificeerde monteurs",
        description: "Onze specialisten beschikken over relevante certificeringen en jarenlange praktijkervaring.",
        image: "{placeholder}"
      },
      {
        number: "4",
        title: "Korte levertijden",
        description: "Dankzij strakke planning en efficiënte productieprocessen kunnen wij snel leveren en monteren.",
        image: "{placeholder}"
      },
      {
        number: "5",
        title: "Geavanceerde technologie",
        description: "Onze oplossingen zijn geschikt voor elektrische bediening en integratie met smart home-systemen.",
        image: "{placeholder}"
      }
    ];
  </script>
  
  <section class="waarom-section">
    <header class="waarom-header">
      <h2>Waarom kiezen voor Doormasters?</h2>
      <p>Mensen kiezen voor Doormasters omdat wij het in één keer goed doen. Van advies en opmeten tot montage en aftercare werken wij met vakmanschap en maatwerk. Zo zorgen we ervoor dat jouw deur perfect past, er strak uitziet en jarenlang betrouwbaar functioneert.</p>
    </header>
  
    <ul class="reasons-grid">
      {#each reasons as reason, index}
        <li class="reason-card">
          <span class="reason-number" aria-hidden="true">{reason.number}</span>
          <article class="reason-content">
            <h3>{reason.title}</h3>
            <p>{reason.description}</p>
            <figure class="reason-image">
              <img src={reason.image} alt={reason.title} loading="lazy">
            </figure>
          </article>
        </li>
      {/each}
    </ul>
  
    <aside class="toekomst-text">
      <h3>Bij Doormasters bouwen we voor de toekomst</h3>
    </aside>
  </section>
  
  <style>
  .waarom-section {
    padding: 6rem 2rem;
    background-color: #ffffff;
  }
  
  /* HEADER */
  .waarom-header {
    max-width: 900px;
    margin: 0 auto 5rem;
    text-align: center;
  }
  
  .waarom-header h2 {
    font-size: clamp(2rem, 5vw, 3rem);
    font-weight: 600;
    line-height: 1.2;
    margin-bottom: 1.5rem;
    color: #0a0a0a;
  }
  
  .waarom-header p {
    font-size: 1.0625rem;
    line-height: 1.7;
    color: #525252;
  }
  
  /* REASONS GRID */
  .reasons-grid {
    list-style: none;
    padding: 0;
    margin: 0 auto;
    max-width: 1400px;
    display: grid;
    grid-template-columns: 1fr;
    gap: 8rem 3rem;
  }
  
  .reason-card {
    position: relative;
    background-color: transparent;
  }
  
  .reason-number {
    position: absolute;
    top: -3rem;
    left: -1.5rem;
    font-size: clamp(14rem, 25vw, 22rem);
    font-weight: 700;
    line-height: 0.8;
    color: #1e3a8a;
    z-index: 0;
    pointer-events: none;
  }
  
  .reason-content {
    position: relative;
    border: 2px solid #d4d4d4;
    border-radius: 8px;
    padding: 2rem;
    background-color: #ffffff;
    min-height: 400px;
    display: flex;
    flex-direction: column;
    z-index: 1;
    margin-top: 7rem;
  }
  
  .reason-content h3 {
    font-size: 1.25rem;
    font-weight: 600;
    line-height: 1.3;
    margin-bottom: 1rem;
    color: #0a0a0a;
  }
  
  .reason-content p {
    font-size: 0.9375rem;
    line-height: 1.6;
    color: #525252;
    margin-bottom: 1.5rem;
    flex-grow: 1;
  }
  
  .reason-image {
    margin: 0;
    width: 100%;
    aspect-ratio: 16/10;
    overflow: hidden;
    border-radius: 4px;
  }
  
  .reason-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
  
  /* TOEKOMST TEXT */
  .toekomst-text {
    margin-top: 8rem;
    text-align: right;
    max-width: 1400px;
    margin-left: auto;
    margin-right: auto;
    padding: 0 2rem;
  }
  
  .toekomst-text h3 {
    font-size: clamp(1.75rem, 4vw, 2.5rem);
    font-weight: 600;
    line-height: 1.3;
    color: #1e3a8a;
    max-width: 600px;
    margin-left: auto;
  }
  
  /* TABLET */
  @media (min-width: 768px) {
    .waarom-section {
      padding: 8rem 3rem;
    }
  
    .reasons-grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 10rem 4rem;
    }
  
    .reason-number {
      top: -4rem;
      left: -2.5rem;
      font-size: 20rem;
    }
  
    .reason-content {
      margin-top: 9rem;
      padding: 2.5rem;
    }
  
    .reason-content h3 {
      font-size: 1.375rem;
    }
  
    .toekomst-text {
      margin-top: 10rem;
    }
  }
  
  /* DESKTOP */
  @media (min-width: 1024px) {
    .waarom-section {
      padding: 10rem 4rem;
    }
  
    .reasons-grid {
      grid-template-columns: repeat(3, 1fr);
      gap: 12rem 3rem;
    }
  
    .reason-number {
      top: -5rem;
      left: -3rem;
      font-size: 26rem;
    }
  
    .reason-content {
      margin-top: 11rem;
      padding: 2.5rem;
    }
  
    .reason-content h3 {
      font-size: 1.5rem;
    }
  
    .reason-content p {
      font-size: 1rem;
    }
  }
  
  /* LARGE DESKTOP */
  @media (min-width: 1400px) {
    .reason-number {
      top: -6rem;
      left: -3.5rem;
      font-size: 30rem;
    }
  
    .reason-content {
      margin-top: 13rem;
    }
  }
  
  /* PRINT */
  @media print {
    .reason-card {
      page-break-inside: avoid;
    }
  
    .reason-number {
      position: static;
      font-size: 6rem;
    }
  
    .reason-content {
      margin-top: 2rem;
    }
  
    .reasons-grid {
      grid-template-columns: 1fr;
      gap: 3rem;
    }
  }

  </style>