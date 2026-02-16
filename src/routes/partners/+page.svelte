<script>
  import Button from '$lib/atoms/Button.svelte';
  import {Hero} from '$lib';
  import { onMount } from 'svelte'; 
  import Reviews from '$lib/components/Reviews.svelte';
  
  export let data;
  const { hero, intro, partnerWorden, partnerLogin } = data;

  let introVisible = false;
  let partnerVisible = false;
  let quoteVisible = false;

  onMount(() => {
      const observerOptions = {
          threshold: 0.15,
          rootMargin: '0px 0px -50px 0px'
      };

      const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  const id = entry.target.id;
                  if (id === 'intro') introVisible = true;
                  if (id === 'partner') partnerVisible = true;
                  if (id === 'quote') quoteVisible = true;
              }
          });
      }, observerOptions);

      const introEl = document.getElementById('intro');
      const partnerEl = document.getElementById('partner');
      const quoteEl = document.getElementById('quote');
      
      if (introEl) observer.observe(introEl);
      if (partnerEl) observer.observe(partnerEl);
      if (quoteEl) observer.observe(quoteEl);

      return () => observer.disconnect();
  });
</script>

<svelte:head>
  <title>Partners | Doormasters</title>
</svelte:head>

<Hero 
  title="PARTNERS" 
  description="Word partner bij Doormasters en versterk uw aanbod in garagedeuren en deuroplossingen. Bij Doormasters is het mogelijk om partner te worden als dealer of installateur in de deurenbranche. Wij werken samen met professionals die kiezen voor kwaliteit, betrouwbaarheid en service, en bieden ondersteuning bij levering, montage en techniek. Samen bouwen we aan duurzame en hoogwaardige deurprojecten."
  image={hero.imageUrl}
/>

  <section id="intro" class="intro-section" class:animate-in={introVisible}>
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

  <section id="partner" class="partner-section" class:animate-in={partnerVisible}>
      <article class="partner-text">
          <h2>{partnerWorden?.title || ''}</h2>
          <p>{@html (partnerWorden?.content || '').replace(/\n/g, '<br>')}</p>
      </article>

      <div class="partner-image">
        <img src={partnerWorden?.imageUrl} alt="Partner worden bij Doormasters" />
    </div>
  </section>

  <section id="quote" class="quote-section" class:animate-in={quoteVisible}>
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

  /* SCROLL ANIMATIES */
  .intro-section,
  .partner-section,
  .quote-section {
      opacity: 0;
      transform: translateY(30px);
      transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  }

  .intro-section.animate-in,
  .partner-section.animate-in,
  .quote-section.animate-in {
      opacity: 1;
      transform: translateY(0);
  }

  .card {
      opacity: 0;
      transform: translateY(20px);
      transition: opacity 0.5s ease-out 0.2s, transform 0.5s ease-out 0.2s;
  }

  .animate-in .card {
      opacity: 1;
      transform: translateY(0);
  }

  .animate-in .card:nth-child(1) { transition-delay: 0.1s; }
  .animate-in .card:nth-child(2) { transition-delay: 0.2s; }
  .animate-in .card:nth-child(3) { transition-delay: 0.3s; }

  /* INTRO SECTION - Gecentreerd met links uitgelijnde tekst */
  .intro-section {
      padding: 4rem 1.5rem;
      background: var(--color-light-blue);
      border-bottom: 1px solid var(--color-white);
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

  /* CARD GRID */
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
      transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .card:hover {
      transform: translateY(-4px);
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
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

  /* Accessibility */
  @media (prefers-reduced-motion: reduce) {
      .intro-section,
      .partner-section,
      .quote-section,
      .card {
          opacity: 1;
          transform: none;
          transition: none;
      }
  }

  /* TABLET */
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

  /* DESKTOP */
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

  /* PRINT */
  @media print {
      .intro-section,
      .partner-section,
      .quote-section,
      .card {
          opacity: 1;
          transform: none;
      }

      .quote-section {
          background: var(--color-white);
      }

      .quote-inner h3 {
          color: var(--color-dark-blue);
      }
  }
</style>