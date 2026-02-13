<script>
    import Button from '$lib/atoms/Button.svelte';
    import {Hero, place} from '$lib';
    export let data;
    const { sections } = data;
</script>

<svelte:head>
	<title>Partners | Doormasters </title>
</svelte:head>

<Hero title="PARTNERS" 
description="Word partner bij Doormasters en versterk uw aanbod in garagedeuren en deuroplossingen. Bij Doormasters is het mogelijk om partner te worden als dealer of installateur in de deurenbranche. Wij werken samen met professionals die kiezen voor kwaliteit, betrouwbaarheid en service, en bieden ondersteuning bij levering, montage en techniek. Samen bouwen we aan duurzame en hoogwaardige deurprojecten.">

</Hero>


<section class="intro-section">
  <div class="intro-inner">
    <h2>{sections.intro.title}</h2>

    <p class="intro-text">
      {@html sections.intro.content.replace(/\n/g, '<br>')}
    </p>

    <div class="card-grid">
      <div class="card"><img src={place} alt=""></div>
      <div class="card"><img src={place} alt=""></div>
      <div class="card"><img src={place} alt=""></div>
    </div>
  </div>
</section>


<section class="partner-section">
  <article class="partner-text">
    <h2>{sections.partnerWorden.title}</h2>
    <p>{@html sections.partnerWorden.content.replace(/\n/g, '<br>')}</p>
  </article>

  <div class="partner-image">
    <img src={place} alt="Partner worden bij Doormasters" />
  </div>
</section>

<article class="quote">
  <div class="quote-inner">
    <h4>
      Wil jij partner worden bij Doormasters voor garagedeuren en deuroplossingen?
      Neem dan direct contact met ons op en ontdek de mogelijkheden voor een professioneel partnerschap.
    </h4>

    <div class="quote-button">
      <Button variant="silver" href="/contact">NEEM CONTACT OP</Button>
    </div>
  </div>
</article>



<style>

.intro-section {
  padding: 80px 20px;
  background: #f3f5f8;
  border-bottom: 1px solid var(--neutral-900);
  box-shadow: 0 2px 5px var(--neutral-900);
}

.intro-inner {
  max-width: 1100px;
  margin: 0 auto;
  text-align: center;
}

.intro-inner h2 {
  font-size: 34px;
  margin-bottom: 20px;
  
}

.intro-text {
  max-width: 720px;
  margin: 0 auto 50px auto;
  line-height: 1.6;
}

/* image cards */

.card-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 28px;
}

.card {
  width: 100%;
  height: 220px;
  border-radius: 8px;
  overflow: hidden;
  background: #ddd;
}

.card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}


  .partner-section {
  display: grid;
  grid-template-columns: 1fr;
  min-height: 500px;
}

.quote {
  padding: 100px 20px;  
     /* ruimte boven en onder */
}

.quote-inner {
  max-width: 900px;           /* tekstblok gecentreerd */
  margin: 0 auto;
  justify-content: center;
  text-align: center;
}

.quote h4 {
  text-align: left;  
  margin: 0 auto;       /* tekst links */
  line-height: 1.5;
  margin-bottom: 40px;        /* ruimte tussen tekst en button */
}

.quote-button {
  text-align: center;         /* button in het midden */
}


/* desktop */
@media (min-width: 768px) {
  .partner-section {
    grid-template-columns: 1fr 1fr;
  }
}

.partner-text {
  padding: 3rem;
  background: #eef1f5; /* licht vlak zoals screenshot */
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.partner-image {
  position: relative;
  min-height: 300px;
}

.partner-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  inset: 0;
}
/* tablet */
@media (min-width: 640px) {
  .card-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* desktop */
@media (min-width: 1024px) {
  .card-grid {
    grid-template-columns: repeat(3, 1fr);
  }

  .card {
    height: 260px;
  }
}

</style>
