<script>
  import { Hero, Button } from '$lib';
  import Working from '$lib/assets/working.png';
  
  export let data;

  // Haal de juiste property uit data
  let werkwijze = data.werkwijze;
</script>

<svelte:head>
  <title>Werkwijze| Doormasters</title>
</svelte:head>

<Hero
  title="ONZE AANPAK"
  description="Doormasters biedt professionele service, onderhoud en slimme oplossingen voor garagedeuren. Van advies en montage tot onderhoud en storingsoplossing, wij staan voor vakmanschap, betrouwbaarheid en snelle service."
  image={Working}
/>


<main>
  {#each werkwijze as item, index (item.id)}
    {@const isEven = index % 2 === 0}
    
    {#if index === 0}
      <!-- Intro sectie: text only -->
      <section class="intro-section">
        <div class="intro-content">
          <h2>{item.title}</h2>
          {#if item.subtitle}
            <h3>{item.subtitle}</h3>
          {/if}
          <div class="intro-text">
            <p>{@html item.content.replace(/\n/g, '<br>')}</p>
          </div>
        </div>
      </section>
      <div class="button-wrapper" style="display: flex; justify-content: center; margin-top: -4rem; margin-bottom: 4rem">
        <Button href="/offerte" variant="silver" mobileOnly={true}> OFFERTE</Button>
      </div>
    {:else}
      <!-- Andere secties: nummer + content + image -->
      <section class="service-section" class:reverse={!isEven}>
        <div class="section-container">
          <div class="number-column">
            <div class="number-display" aria-hidden="true">{index}</div>
          </div>
          
          <div class="content-column">
            <div class="content-box">
              <h2>{item.title}</h2>
              {#if item.subtitle}
                <h3>{item.subtitle}</h3>
              {/if}
              <p>{@html item.content.replace(/\n/g, '<br>')}</p>
            </div>
          </div>
          
          <div class="image-column">
            {#if item.image}
              <img 
                src={item.image}
                alt={item.title}
                loading="lazy"
                width="800"
                height="600"
              />
            {/if}
          </div>
        </div>
      </section>
    {/if}
  {/each}

  <section class="closing-section">
    <h2>Bij Doormasters bouwen we voor de toekomst</h2>
  </section>
</main>


<style>

  /* INTRO SECTIE */
  .intro-section {
    background-color: var(--color-white);
    padding: 0;
    margin: 0;
  }

  .intro-content {
    max-width: 900px;
    margin: 0 auto;
    padding: 5rem 2rem;
  }

  .intro-content h2 {
    margin-bottom: 1.5rem;
    color: var(--color-blue-dark);
  }

  .intro-content h3 {
    margin-bottom: 2rem;
    color: var(--color-blue-dark);
  }

  .intro-text {
    padding-top: 2rem;
    border-top: 1px solid var(--neutral-300);
  }

  .intro-text p {
    color: var(--color-blue-dark);
  }

  /* SERVICE SECTIES */
  .service-section {
    background-color: var(--color-white);
    padding: 0;
  }

  .section-container {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-areas:
      "number"
      "content"
      "image";
    max-width: 1600px;
    margin: 0 auto;
  }

  .number-column {
    grid-area: number;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 3rem 2rem 0;
  }

  .number-display {
    font-size: 8rem;
    line-height: 1;
    color: var(--color-blue-dark);
    opacity: 1;
    font-weight: var(--fw-bold);
  }

  .content-column {
    grid-area: content;
    padding: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .content-box {
    max-width: 650px;
    width: 100%;
  }

  .content-box h2 {
    color: var(--color-blue-dark);
  }

  .content-box h3 {
    color: var(--color-blue-dark);
  }

  .content-box p {
    color: var(--color-blue-dark);
  }

  .image-column {
    grid-area: image;
    position: relative;
    min-height: 400px;
    overflow: hidden;
  }

  .image-column img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  h2 {
    margin-bottom: 1rem;
    color: var(--color-blue-dark);
  }

  h3 {
    margin-bottom: 1.5rem;
    color: var(--color-blue-dark);
  }

  p {
    line-height: 1.8;
    color: var(--color-blue-dark);
  }

  /* TABLET: 2 kolommen */
  @media (min-width: 768px) {
    .intro-content {
      padding: 6rem 3rem;
      max-width: 1000px;
    }

    .section-container {
      grid-template-columns: auto 1fr 1fr;
      grid-template-areas: "number content image";
      min-height: 500px;
    }

    .service-section.reverse .section-container {
      grid-template-areas: "number image content";
    }

    .number-column {
      padding: 4rem 2rem;
      min-width: 200px;
    }

    .number-display {
      font-size: 12rem;
    }

    .content-column {
      padding: 4rem 3rem;
    }

    .content-box {
      max-width: 700px;
    }

    .image-column {
      min-height: 500px;
    }
  }

  /* DESKTOP: 3 kolommen optimaal */
  @media (min-width: 1024px) {
    .intro-content {
      padding: 8rem 4rem;
      max-width: 1100px;
    }

    .section-container {
      grid-template-columns: 280px 1fr 1fr;
      min-height: 600px;
    }

    .number-column {
      padding: 5rem 3rem;
    }

    .number-display {
      font-size: 16rem;
    }

    .content-column {
      padding: 5rem 4rem;
    }

    .content-box {
      max-width: 750px;
    }

    .image-column {
      min-height: 600px;
    }
  }

  /* GROTE SCHERMEN: meer ruimte */
  @media (min-width: 1400px) {
    .intro-content {
      max-width: 1200px;
    }

    .section-container {
      grid-template-columns: 320px 1fr 1.2fr;
      min-height: 700px;
    }

    .number-display {
      font-size: 18rem;
    }

    .content-column {
      padding: 6rem 5rem;
    }

    .content-box {
      max-width: 800px;
    }

    .image-column {
      min-height: 700px;
    }
  }

  /* CLOSING SECTIE */
  .closing-section {
    padding: 6rem 2rem;
    text-align: center;
    background-color: var(--color-white);
  }

  .closing-section h2 {
    max-width: 800px;
    margin: 0 auto;
    color: var(--color-blue-dark);
  }

  @media (min-width: 768px) {
    .closing-section {
      padding: 8rem 3rem;
      text-align: right;
    }

    .closing-section h2 {
      margin: 0 0 0 auto;
      max-width: 900px;
    }
  }

  /* HIGH CONTRAST */
  @media (prefers-contrast: high) {
    .number-display {
      opacity: 1;
    }
  }

  /* PRINT */
  @media print {
    .service-section {
      page-break-inside: avoid;
    }

    .section-container {
      grid-template-columns: 1fr !important;
      grid-template-areas: 
        "content"
        "image" !important;
      min-height: auto !important;
    }

    .number-column {
      display: none;
    }

    .image-column {
      min-height: 300px;
    }
  }
</style>