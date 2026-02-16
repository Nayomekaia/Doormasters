<script>
	import { Hero } from '$lib';
	export let data;
	let overons = data.overons;

	// Filter om alleen content secties te tonen (niet de hero)
	let contentSecties = overons.filter(item => item.section_key !== 'geen');
	
	// Haal de hero image op
	let heroData = overons.find(item => item.title === 'hero');
	let heroImage = heroData?.content || '';
</script>
  
<svelte:head>
	<title>Over ons | Doormasters</title>
</svelte:head>
  
<Hero
	title="OVER ONS"
	description="Word partner bij Doormasters en versterk uw aanbod in garagedeuren en deuroplossingen. Bij Doormasters is het mogelijk om partner te worden als dealer of installateur in de deurenbranche. Wij werken samen met professionals die kiezen voor kwaliteit, betrouwbaarheid en service, en bieden ondersteuning bij levering, montage en techniek. Samen bouwen we aan duurzame en hoogwaardige deurprojecten."
	image={heroImage}
/>
  
<main>
	{#each contentSecties as item, index (item.id)}
	  {#if index === 0}
		<!-- Intro sectie -->
		<section class="intro-section">
		  <article class="intro-content">
			<h2>{item.title}</h2>
			{#if item.subtitle}
			  <h3>{item.subtitle}</h3>
			{/if}
			<p>{@html item.content.replace(/\n/g, '<br>')}</p>
		  </article>
		</section>
	  {:else if item.section_key === 'kernwaarden'}
		<!-- Kernwaarden sectie -->
		<section class="kernwaarden-section">
		  <article class="kernwaarden-content">
			<h2>{item.title}</h2>
			<ul class="waarden-list">
			  {#each item.content.split('\n').filter(line => line.trim()) as waarde}
				{@const [label, ...rest] = waarde.split('–')}
				<li>
				  <strong>{label.trim()}</strong>
				  {#if rest.length > 0}
					<span>{rest.join('–').trim()}</span>
				  {/if}
				</li>
			  {/each}
			</ul>
		  </article>
		</section>
	  {:else if item.section_key === 'offerte'}
		<!-- CTA sectie -->
		<section class="cta-section">
		  <article class="cta-content">
			<h2>{item.title}</h2>
			<p>{item.content}</p>
		  </article>
		</section>
	  {:else}
		<!-- Standaard secties -->
		<section class="content-section">
		  <article class="content-wrapper">
			<h2>{item.title}</h2>
			{#if item.subtitle}
			  <h3>{item.subtitle}</h3>
			{/if}
			<p>{@html item.content.replace(/\n/g, '<br>')}</p>
		  </article>
		</section>
	  {/if}
	{/each}
</main>
  
<style>
	main {
	  background-color: var(--color-light-blue);
	}
  
	/* INTRO SECTIE - Compacter */
	.intro-section {
	  padding: 4rem 1.5rem;
	  background-color: var(--color-light-blue);
      border-bottom: 1px solid var(--neutral-900);
      box-shadow: 0 2px 5px var(--neutral-900);

	}
  
	.intro-content {
	  max-width: 850px;
	  margin: 0 auto;
	}
  
	.intro-content h2 {
	  font-size: 2.5rem;
	  font-weight: 600;
	  line-height: 1.15;
	  margin-bottom: 1rem;
	  color: var(--color-blue-dark);
	  letter-spacing: -0.02em;
	}
  
	.intro-content h3 {
	  font-size: 1.25rem;
	  margin-bottom: 1.5rem;
	  font-weight: 400;
	  line-height: 1.4;
	  color: var(--color-blue-dark);
	}

	.intro-content p {
	  font-size: 1rem;
	  line-height: 1.6;
	  color: var(--color-dark-blue);
	}
  
	/* STANDAARD CONTENT SECTIES - Compacter */
	.content-section {
	  padding: 4rem 1.5rem;
	  background-color: var(--color-white);
	  border-bottom: 1px solid var(--neutral-900);
      box-shadow: 0 2px 5px var(--neutral-900);
	}
  
	.content-wrapper {
	  max-width: 800px;
	  margin: 0 auto;
	  color: var(--color-dark-blue);
	}
  
	.content-wrapper h2 {
	  font-size: 2rem;
	  font-weight: 600;
	  line-height: 1.2;
	  margin-bottom: 0.75rem;
	  color: var(--color-blue-dark);
	  letter-spacing: -0.02em;
	}
  
	.content-wrapper h3 {
	  font-size: 1.125rem;
	  margin-bottom: 1rem;
	  color: var(--color-blue-dark);
	  font-weight: var(--fw-light);
	  line-height: 1.4;
	}

	.content-wrapper p {
	  font-size: 1rem;
	  line-height: 1.6;
	}
  
	/* KERNWAARDEN SECTIE - Strakker grid */
	.kernwaarden-section {
	  padding: 4rem 1.5rem;
	  background-color: var(--color-light-blue);
	  font-family: var(--font-primary);
	  border-top: 1px solid #e5e5e5;
      border-bottom: 1px solid var(--neutral-900);
      box-shadow: 0 2px 5px var(--neutral-900);
	}
  
	.kernwaarden-content {
	  max-width: 1000px;
	  margin: 0 auto;
	}
  
	.kernwaarden-content h2 {
	  font-size: 2rem;
	  margin-bottom: 2.5rem;
	  font-weight: 600;
	  color: var(--color-blue-dark);
	}
  
	.waarden-list {
	  list-style: none;
	  padding: 0;
	  margin: 0;
	  display: grid;
	  grid-template-columns: 1fr;
	  gap: 0;
	}
  
	.waarden-list li {
	  padding: 1.75rem 0;
	  border-bottom: 1px solid #e5e5e5;
	}
  
	.waarden-list li:last-child {
	  border-bottom: none;
	}
  
	.waarden-list strong {
	  display: block;
	  font-size: 1.25rem;
	  font-weight: 600;
	  margin-bottom: 0.5rem;
	  color: var(--color-blue-dark);
	  line-height: 1.3;
	}
  
	.waarden-list span {
	  font-size: 1rem;
	  display: block;
	  color: var(--color-dark-blue);
	  line-height: 1.5;
	}
  
	/* CTA SECTIE - Compacter */
	.cta-section {
	  padding: 4rem 1.5rem;
	  background-color: var(--color-blue-dark);
	  color: #ffffff;
	}
  
	.cta-content {
	  max-width: 700px;
	  margin: 0 auto;
	  text-align: center;
	}
  
	.cta-content h2 {
	  font-size: 2rem;
	  line-height: 1.2;
	  margin-bottom: 1rem;
	  letter-spacing: -0.02em;
	  color: var(--color-white);
	  font-weight: 600;
	}
  
	.cta-content p {
	  font-size: 1.0625rem;
	  line-height: 1.6;
	  color: var(--color-white);
	}
  
	/* TABLET */
	@media (min-width: 768px) {
	  .intro-section {
		padding: 5rem 2rem;
	  }
  
	  .intro-content h2 {
		font-size: 3rem;
	  }
  
	  .intro-content h3 {
		font-size: 1.5rem;
		margin-bottom: 1.75rem;
	  }

	  .intro-content p {
		font-size: 1.0625rem;
	  }
  
	  .content-section {
		padding: 5rem 2rem;
	  }
  
	  .content-wrapper h2 {
		font-size: 2.5rem;
		margin-bottom: 1rem;
	  }

	  .content-wrapper h3 {
		font-size: 1.25rem;
	  }

	  .content-wrapper p {
		font-size: 1.0625rem;
	  }
  
	  .waarden-list {
		grid-template-columns: repeat(2, 1fr);
		gap: 0 3rem;
	  }
  
	  .waarden-list li {
		padding: 2rem 0;
	  }

	  .waarden-list strong {
		font-size: 1.375rem;
	  }

	  .waarden-list span {
		font-size: 1.0625rem;
	  }
  
	  .kernwaarden-section {
		padding: 5rem 2rem;
	  }

	  .kernwaarden-content h2 {
		font-size: 2.5rem;
		margin-bottom: 3rem;
	  }
  
	  .cta-section {
		padding: 5rem 2rem;
	  }
  
	  .cta-content h2 {
		font-size: 2.5rem;
		margin-bottom: 1.25rem;
	  }

	  .cta-content p {
		font-size: 1.125rem;
	  }
	}
  
	/* DESKTOP */
	@media (min-width: 1024px) {
	  .intro-section {
		padding: 6rem 3rem;
	  }
  
	  .intro-content {
		max-width: 900px;
	  }
  
	  .intro-content h2 {
		font-size: 3.5rem;
		margin-bottom: 1.25rem;
	  }
  
	  .intro-content h3 {
		font-size: 1.75rem;
		margin-bottom: 2rem;
	  }

	  .intro-content p {
		font-size: 1.125rem;
		line-height: 1.7;
	  }
  
	  .content-section {
		padding: 6rem 3rem;
	  }
  
	  .content-wrapper {
		max-width: 850px;
	  }
  
	  .content-wrapper h2 {
		font-size: 2.75rem;
		margin-bottom: 1.25rem;
	  }

	  .content-wrapper h3 {
		font-size: 1.375rem;
		margin-bottom: 1.25rem;
	  }

	  .content-wrapper p {
		font-size: 1.125rem;
		line-height: 1.7;
	  }
  
	  .waarden-list {
		gap: 0 4rem;
	  }
  
	  .waarden-list li {
		padding: 2.25rem 0;
	  }

	  .waarden-list strong {
		font-size: 1.5rem;
		margin-bottom: 0.625rem;
	  }

	  .waarden-list span {
		font-size: 1.125rem;
		line-height: 1.6;
	  }
  
	  .kernwaarden-section {
		padding: 6rem 3rem;
	  }

	  .kernwaarden-content h2 {
		font-size: 2.75rem;
		margin-bottom: 3.5rem;
	  }
  
	  .cta-section {
		padding: 6rem 3rem;
	  }
  
	  .cta-content h2 {
		font-size: 3rem;
		margin-bottom: 1.5rem;
	  }

	  .cta-content p {
		font-size: 1.1875rem;
		line-height: 1.7;
	  }
	}
  
	/* PRINT */
	@media print {
	  section {
		page-break-inside: avoid;
		padding: 2rem 1rem;
	  }
  
	  .cta-section {
		background: var(--color-white);
		color: var(--color-dark-blue);
	  }

	  .cta-content h2,
	  .cta-content p {
		color: var(--color-dark-blue);
	  }
	}
</style>