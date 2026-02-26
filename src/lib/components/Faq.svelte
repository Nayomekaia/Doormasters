<script>
    import { Button } from '$lib';
    import FaqItem from '$lib/components/FaqItem.svelte';
    export let data;
  </script>
  
  <section class="faq-section">
    <article class="intro">
      <h2>Veelgestelde vragen</h2>
      <p>
        Heb je een vraag over onze deuren, installatie of onderhoud? Hier vind je snel antwoord
        op veelgestelde vragen.Staat je vraag er niet bij? Neem gerust contact met ons op, wij helpen je graag.
      </p>
      <Button href="/contact" variant="outline">Contact</Button>
    </article>
  
    <section class="faq">
      {#each data.faq as item}
        <FaqItem
          vraag={item.vraag}
          andwoord={item.andwoord}
        />
      {/each}
    </section>
</section>
  
  <style>
  .faq-section {
    display: block;
    gap: 2rem;
    padding: 1em;
 
  }
  
  .intro,
  .faq {
    width: 100%;
    margin-bottom: 2rem;
  }
  
  /* Typography */
  .intro h2 {
    margin-bottom:3rem;
  }
  
  .intro p {
    margin-bottom: 3rem;
  }
  
  /* FAQ spacing */
  .faq {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  
  /* Desktop layout */
  @media (min-width: 768px) {
    .faq-section {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      gap: 5rem;
      margin: 5rem;
      padding: 3rem;

    }
  
    .intro {
      flex: 0 0 40%;
      margin-bottom: 0;
    }
  
    .faq {
      flex: 0 0 60%;
    }
  }
  

  </style>