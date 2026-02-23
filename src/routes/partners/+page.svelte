<script>
    import Button from '$lib/atoms/Button.svelte';
    import { Hero } from '$lib';
    import Reviews from '$lib/components/Reviews.svelte';
    
    export let data;
    const { hero, intro, partnerWorden, partnerLogin } = data;
  </script>
  
  <svelte:head>
    <title>Partners | Doormasters</title>
  </svelte:head>
  
  <Hero 
    title="PARTNERS" 
    description="Word partner bij Doormasters en versterk uw aanbod in garagedeuren en deuroplossingen. Bij Doormasters is het mogelijk om partner te worden als dealer of installateur in de deurenbranche. Wij werken samen met professionals die kiezen voor kwaliteit, betrouwbaarheid en service, en bieden ondersteuning bij levering, montage en techniek. Samen bouwen we aan duurzame en hoogwaardige deurprojecten."
    image={hero.imageUrl}
  />
  
  <section id="intro" class="intro-section">
      <div class="intro-inner">
          <h2>{intro?.title || ''}</h2>
          <p class="intro-text">
              {@html (intro?.content || '').replace(/\n/g, '<br>')}
          </p>
  
          <div class="card-grid">
            {#each intro?.images || [] as imageUrl, i}
              <div class="card">
                <img src={imageUrl} alt={`Intro foto ${i + 1}`} />
              </div>
            {/each}
          </div>
      </div>
  </section>
  
  <section id="partner" class="partner-section">
      <article class="partner-text">
          <h2>{partnerWorden?.title || ''}</h2>
          <p>{@html (partnerWorden?.content || '').replace(/\n/g, '<br>')}</p>
      </article>
  
      <div class="partner-image">
        <img src={partnerWorden?.imageUrl} alt="Partner worden bij Doormasters" />
    </div>
  </section>
  
  <section id="quote" class="quote-section">
      <div class="quote-inner">
          <h3>
              Wil jij partner worden bij Doormasters voor garagedeuren en deuroplossingen?
              Neem dan direct contact met ons op en ontdek de mogelijkheden voor een professioneel partnerschap.
          </h3>
          <div class="quote-button">
              <Button variant="silver" href="/contact">CONTACT</Button>
          </div>
      </div>
  </section>
  
  <style>
    p {
      color: var(--color-blue-dark);
    }
  
    /* Intro Section */
    .intro-section {
        padding: 4rem 1.5rem;
        background: var(--color-light-blue);
        border-bottom: 1px solid var(--neutral-900);
        box-shadow: 0 2px 5px var(--neutral-900);
    }
  
    .intro-inner {
        max-width: 1100px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
  
    .intro-inner h2 {
        line-height: 1.2;
        margin-bottom: 1rem;
        color: var(--color-blue-dark);
        text-align: left;
        width: 100%;
        max-width: 700px;
    }
  
    .intro-text {
        max-width: 700px;
        margin: 0 0 2.5rem 0;
        color: var(--color-dark-blue);
        text-align: left;
        width: 100%;
    }
  
    /* Card Grid */
    .card-grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: 1.5rem;
        width: 100%;
    }
  
    .card {
        width: 100%;
        height: 220px;
        border-radius: 8px;
        overflow: hidden;
        background: var(--color-white);
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
    }
  
    .card img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
    }
  
    /* Partner Section */
    .partner-section {
        display: grid;
        grid-template-columns: 1fr;
        min-height: 450px;
        border-bottom: 1px solid var(--neutral-900);
        box-shadow: 0 2px 5px var(--neutral-900);
    }
  
    .partner-text {
        padding: 3rem 1.5rem;
        background: var(--color-white);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
  
    .partner-text h2 {
        margin-bottom: 1rem;
        color: var(--color-blue-dark);
        letter-spacing: -0.02em;
        text-align: left;
        width: 100%;
        max-width: 600px;
    }
  
    .partner-text p {
        color: var(--color-dark-blue);
        text-align: left;
        max-width: 600px;
        width: 100%;
    }
  
    .partner-image {
        position: relative;
        min-height: 350px;
        background: var(--color-white);
    }
  
    .partner-image img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: absolute;
        inset: 0;
        display: block;
    }
  
    /* Quote Section */
    .quote-section {
        padding: 7rem 1.5rem;
        background: var(--color-light-blue);
    }
  
    .quote-inner {
        max-width: 900px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
  
    .quote-inner h3 {
        color: var(--color-blue-dark);
        margin: 0 0 3rem 0;
        text-align: left;
        width: 100%;
        max-width: 800px;
        font-weight: var(--fw-medium);
    }
  
    .quote-button {
        text-align: center;
        width: 100%;
    }
  
    /* Responsive */
    @media (min-width: 640px) {
        .card-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
        }
  
        .card {
            height: 240px;
        }
    }
  
    @media (min-width: 768px) {
        .intro-section {
            padding: 5rem 2rem;
        }
  
        .intro-inner h2 {
            margin-bottom: 1.25rem;
        }
  
        .intro-text {
            margin-bottom: 3rem;
        }
  
        .card-grid {
            gap: 2rem;
        }
  
        .partner-section {
            grid-template-columns: 1fr 1fr;
        }
  
        .partner-text {
            padding: 4rem 3rem;
        }
  
        .partner-text h2 {
            margin-bottom: 1.25rem;
        }
  
        .partner-image {
            min-height: 450px;
        }
  
        .quote-section {
            padding: 7rem 2rem;
        }
  
        .quote-inner h3 {
            margin-bottom: 2.5rem;
        }
    }
  
    @media (min-width: 1024px) {
        .intro-section {
            padding: 6rem 3rem;
        }
  
        .intro-inner {
            max-width: 1200px;
        }
  
        .card-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 2rem;
        }
  
        .card {
            height: 260px;
        }
  
        .partner-text {
            padding: 5rem 4rem;
        }
  
        .partner-image {
            min-height: 500px;
        }
  
        .quote-section {
            padding: 8rem 3rem;
        }
  
        .quote-inner {
            max-width: 1000px;
        }
  
        .quote-inner h3 {
            margin-bottom: 3rem;
        }
    }
  
    @media print {
        .quote-section {
            background: var(--color-white);
        }
  
        .quote-inner h3 {
            color: var(--color-dark-blue);
        }
    }
  </style>