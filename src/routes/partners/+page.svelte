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
    <section class="intro-inner">
      <h2>{intro?.title || ''}</h2>
      <p class="intro-text">
        {@html (intro?.content || '').replace(/\n/g, '<br>')}
      </p>
  
      <section class="card-grid">
        {#each intro?.images || [] as imageUrl, i}
          <section class="card">
            <img src={imageUrl} alt={`Intro foto ${i + 1}`} />
          </section>
        {/each}
      </section>
    </section>
  </section>
  
  <section id="partner" class="partner-section">
    <article class="partner-text">
      <h2>{partnerWorden?.title || ''}</h2>
      <p>{@html (partnerWorden?.content || '').replace(/\n/g, '<br>')}</p>
    </article>
  
    <section class="partner-image">
      <img src={partnerWorden?.imageUrl} alt="Partner worden bij Doormasters" />
    </section>
  </section>
  
  <section id="quote" class="quote-section">
    <section class="quote-inner">
      <h4>
        Wil jij partner worden bij Doormasters voor garagedeuren en deuroplossingen?
        Neem dan direct contact met ons op en ontdek de mogelijkheden voor een professioneel partnerschap.
      </h4>
      <section class="quote-button">
        <Button variant="silver" href="/contact">CONTACT</Button>
      </section>
    </section>
  </section>
  
  <style>
    p {
      color: var(--color-blue-dark);
    }
  
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
  
    .quote-section {
      padding: clamp(4rem, 8vw, 7rem) 1.5rem;
      background: var(--color-light-blue);
      margin-top: 3rem;
    }
  
    .quote-inner {
      max-width: 700px; 
      width: 100%;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
    }
  
    .quote-inner h4 {
      color: var(--color-blue-dark);
      text-align: left;
      font-weight: var(--fw-medium);
      line-height: 1.4;
      margin: 0 0 2.5rem 0;
    }
  
    .quote-button {
      display: flex;
      justify-content: center;
      margin-top: 2rem;
    }
  
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
  
      .card-grid {
        gap: 2rem;
      }
  
      .partner-section {
        grid-template-columns: 1fr 1fr;
      }
  
      .partner-text {
        padding: 4rem 3rem;
      }
  
      .partner-image {
        min-height: 450px;
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
    }
  </style>