<script>
	import { Hero } from '$lib';
	export let data;
	let overons = data.overons;
  </script>
  
  <svelte:head>
	<title>Over ons | Doormasters</title>
  </svelte:head>
  
  <Hero
	title="OVER ONS"
	description="Word partner bij Doormasters en versterk uw aanbod in garagedeuren en deuroplossingen. Bij Doormasters is het mogelijk om partner te worden als dealer of installateur in de deurenbranche. Wij werken samen met professionals die kiezen voor kwaliteit, betrouwbaarheid en service, en bieden ondersteuning bij levering, montage en techniek. Samen bouwen we aan duurzame en hoogwaardige deurprojecten."
  />
  
  <main>
	{#each overons as item, index (item.id)}
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
  
	/* INTRO SECTIE */
	.intro-section {
	  padding: 8rem 2rem;
	  background-color: var(--color-light-blue);
	  border-bottom: 1px solid #e5e5e5;
	}
  
	.intro-content {
	  max-width: 900px;
	  margin: 0 auto;
	}
  
	.intro-content h2 {
	  font-size: 3rem;
	  font-weight: 600;
	  line-height: 1.2;
	  margin-bottom: 1.5rem;
	  color: var(--color-blue-dark);
	  letter-spacing: -0.02em;
	}
  
	.intro-content h3 {
	  font-size: 1.5rem;
	  margin-bottom: 2.5rem;
	  font-weight: 400;
	  line-height: 1.4;
	  color: var(--color-blue-dark);
	}
  
	/* STANDAARD CONTENT SECTIES */
	.content-section {
	  padding: 6rem 2rem;
	  background-color: var(--color-white);
	}
  
	.content-wrapper {
	  max-width: 800px;
	  margin: 0 auto;
	  color: var(--color-dark-blue);
	}
  
	.content-wrapper h2 {
	  font-size: 2.25rem;
	  font-weight: 600;
	  line-height: 1.2;
	  margin-bottom: 1rem;
	  color: var(--color-blue-dark);
	  letter-spacing: -0.02em;
	}
  
	.content-wrapper h3 {
	  font-size: 1.25rem;
	  margin-bottom: 1.5rem;
	  color: var(--color-blue-dark);
	  font-weight: var(--fw-light);
	  line-height: 1.4;
	}
  
  
	/* KERNWAARDEN SECTIE */
	.kernwaarden-section {
	  padding: 8rem 2rem;
	  background-color: var(--color-light-blue);
	  font-family: var(--font-primary);
	  border-top: 1px solid #e5e5e5;
	  border-bottom: 1px solid #e5e5e5;
	}
  
	.kernwaarden-content {
	  max-width: 1100px;
	  margin: 0 auto;
	}
  
	.kernwaarden-content h2 {
	  font-size: 2.5rem;
	  margin-bottom: 4rem;

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
	  padding: 2.5rem 0;
	  border-bottom: 1px solid #e5e5e5;
	}
  
	.waarden-list li:last-child {
	  border-bottom: none;
	}
  
	.waarden-list strong {
	  display: block;
	  font-size: 1.375rem;
	  font-weight: 600;
	  margin-bottom: 0.75rem;
	  color: var(--color-blue-dark);
	}
  
	.waarden-list span {
	  font-size: 1.0625rem;
	  display: block;
	  color: var(--color-dark-blue);
	}
  
	/* CTA SECTIE */
	.cta-section {
	  padding: 8rem 2rem;
	  background-color: var(--color-blue-dark);
	  color: #ffffff;
	}
  
	.cta-content {
	  max-width: 700px;
	  margin: 0 auto;
	  text-align: center;
	}
  
	.cta-content h2 {
	  line-height: 1.2;
	  margin-bottom: 1.5rem;
	  letter-spacing: -0.02em;
	  color: var(--color-white);
	  font-size: 2.5rem;
	}
  
	.cta-content p {
	  font-size: 1.1875rem;
	  line-height: 1.7;
	  color: var(--color-white);
	}
  
	/* TABLET */
	@media (min-width: 768px) {
	  .intro-section {
		padding: 10rem 3rem;
	  }
  
	  .intro-content h2 {
		font-size: 3.5rem;
	  }
  
	  .intro-content h3 {
		font-size: 1.75rem;
	  }
  
	  .content-section {
		padding: 8rem 3rem;
	  }
  
	  .content-wrapper h2 {
		font-size: 2.75rem;
	  }
  
	  .waarden-list {
		grid-template-columns: repeat(2, 1fr);
		gap: 0 4rem;
	  }
  
	  .waarden-list li {
		padding: 3rem 0;
	  }
  
	  .kernwaarden-section {
		padding: 10rem 3rem;
	  }
  
	  .cta-section {
		padding: 10rem 3rem;
	  }
  
	  .cta-content h2 {
		font-size: 3rem;
	  }
	}
  
	/* DESKTOP */
	@media (min-width: 1024px) {
	  .intro-section {
		padding: 12rem 4rem;
	  }
  
	  .intro-content {
		max-width: 1000px;
	  }
  
	  .intro-content h2 {
		font-size: 4rem;
	  }
  
	  .intro-content h3 {
		font-size: 2rem;
	  }
  
	  .content-section {
		padding: 10rem 4rem;
	  }
  
	  .content-wrapper {
		max-width: 900px;
	  }
  
	  .content-wrapper h2 {
		font-size: 3rem;
	  }
  
	  .waarden-list {
		gap: 0 5rem;
	  }
  
	  .waarden-list li {
		padding: 3.5rem 0;
	  }
  
	  .kernwaarden-section {
		padding: 12rem 4rem;
	  }
  
	  .cta-section {
		padding: 12rem 4rem;
	  }
  
	  .cta-content h2 {
		font-size: 3.5rem;
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
	  }

	}
  </style>