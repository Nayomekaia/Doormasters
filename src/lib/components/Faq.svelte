<script>
  import { Button } from '$lib';
  import FaqItem from '$lib/components/FaqItem.svelte';
  export let data;

  // Index van het openstaande FAQ-item
  let openIndex = data.faq.length - 1; // standaard laatste open

  // Wordt aangeroepen als een FAQ-item wordt getoggled
  function handleToggle(index) {
    // Als het item al open is, sluiten we het
    if (openIndex === index) {
      openIndex = -1; // of laat het altijd open als je wilt
    } else {
      openIndex = index;
    }
  }
</script>

<section class="faq-section">
  <article class="intro">
    <h2>Veelgestelde vragen</h2>
    <p>
      Heeft u een vraag over onze deuren, installatie of onderhoud? Hier vindt u snel antwoord
      op veelgestelde vragen. Staat uw vraag er niet bij? Neem gerust contact met ons op, wij helpen u graag.
    </p>
    <Button href="/contact" variant="outline">Contact</Button>
  </article>

  <section class="faq">
    {#each data.faq as item, i}
      <FaqItem
        vraag={item.vraag}
        andwoord={item.andwoord}
        open={i === openIndex}
        onToggle={() => handleToggle(i)}
      />
    {/each}
  </section>
</section>

<style>
.faq-section {
  display: block;
  gap: 2rem;
  padding: 3rem;
  margin: 5rem;
}

.intro,
.faq {
  width: 100%;
  margin-bottom: 2rem;
}

/* Typography */
.intro h2 {
  margin-bottom: 3rem;
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