<script>
	import { Hero, Button } from '$lib';
	export let data;
	let kennisbank = data.kennisbank;

	// Filter om alleen kennisbank artikelen te tonen (niet de hero)
	let artikelen = kennisbank.filter(item => item.tag === 'kennisbank');
	
	// Haal de hero image op
	let heroData = kennisbank.find(item => item.title === 'hero');
	let heroImage = heroData?.hero_image || '';

	function truncateText(text, maxWords) {
		if (!text) return '';
		const words = text.split(' ');
		if (words.length <= maxWords) return text;
		return words.slice(0, maxWords).join(' ') + '...';
	}
</script>

<svelte:head>
	<title>Kennisbank | Doormasters</title>
</svelte:head>

<Hero
	title="KENNISBANK"
	description="In de kennisbank van Doormasters vindt u heldere informatie over garagedeuren, onderhoud, storingen en slimme bediening. Wij delen praktische kennis en professioneel advies om u te helpen bij het maken van de juiste keuze voor uw woning of bedrijfspand. Zo blijft uw garagedeur veilig, betrouwbaar en optimaal functioneren."
	image={heroImage}
/>

<main class="kennisbank-main">
	<section class="blog-section">
	  <ul class="blog-grid">
		{#each artikelen as item}
		  <li class="blog-card">
			<article>
			  <a href={`/kennisbank/${item.slug}`} class="blog-link">
				<figure class="blog-image">
				  <img 
					src={item.hero_image} 
					alt={item.title}
					loading="lazy"
				  >
				  <div class="image-overlay"></div>
				</figure>
				
				<div class="blog-content">
				  <div class="blog-content-header">
					{#if item.tag && item.tag !== '.'}
					  <span class="blog-category">{item.tag}</span>
					{/if}
					
					{#if item.created_at}
					  <time class="blog-date" datetime={item.created_at}>
						{new Date(item.created_at).toLocaleDateString('nl-NL', {
						  year: 'numeric',
						  month: 'long',
						  day: 'numeric'
						})}
					  </time>
					{/if}
				  </div>

				  <div class="blog-content-body">
					<h2 class="blog-title">{item.title}</h2>
					
					{#if item.description}
					  <p class="blog-excerpt">{truncateText(item.description, 20)}</p>
					{/if}
				  </div>
				  
				  <div class="blog-content-footer">
					<Button variant="outline" href={`/kennisbank/${item.slug}`}> Lees meer </Button>
				  </div>
				</div>
			  </a>
			</article>
		  </li>
		{/each}
	  </ul>
	</section>
</main>

<style>
	.kennisbank-main {
	  background-color: var(--color-white);
	}


  
	/* BLOG SECTION */
	.blog-section {
	  padding: 6rem 2rem;
	  max-width: 1400px;
	  margin: 0 auto;
	}
  
	/* BLOG GRID */
	.blog-grid {
	  list-style: none;
	  padding: 0;
	  margin: 0;
	  display: grid;
	  grid-template-columns: 1fr;
	  gap: 2rem;
	}
  
	/* BLOG CARD */
	.blog-card {
	  background-color: var(--color-white);
	  border: 1px solid var(--neutral-300);
	  border-radius: 5px;
	  overflow: hidden;
	  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
	  height: 100%;
	  min-width: 350px;
	  margin: 0 auto;
	  width: 100%;
	  position: relative;
	}
  
	.blog-card::before {
	  content: '';
	  position: absolute;
	  top: 0;
	  left: 0;
	  right: 0;
	  height: 0;
	  background: var(--color-blue-dark);
	  transition: height 0.4s cubic-bezier(0.4, 0, 0.2, 1);
	  z-index: 1;
	}

	.blog-card:hover {
	  transform: translateY(-8px);
	  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
	  border-color: var(--color-blue-dark);
	}

	.blog-card:hover::before {
	  height: 4px;
	}

	.blog-card article {
	  height: 100%;
	  display: flex;
	  flex-direction: column;
	}
  
	.blog-link {
	  text-decoration: none;
	  color: inherit;
	  display: flex;
	  flex-direction: column;
	  height: 100%;
	}
  
	/* BLOG IMAGE */
	.blog-image {
	  margin: 0;
	  width: 100%;
	  aspect-ratio: 16/9;
	  overflow: hidden;
	  background-color: var(--color-white);
	  flex-shrink: 0;
	  position: relative;
	}

	.image-overlay {
	  position: absolute;
	  top: 0;
	  left: 0;
	  right: 0;
	  bottom: 0;
	  background: rgba(0, 0, 0, 0);
	  transition: background 0.4s ease;
	  pointer-events: none;
	}

	.blog-card:hover .image-overlay {
	  background: rgba(0, 0, 0, 0.1);
	}
  
	.blog-image img {
	  width: 100%;
	  height: 100%;
	  object-fit: cover;
	  display: block;
	  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
	}
  
	.blog-card:hover .blog-image img {
	  transform: scale(1.08);
	}
  
	/* BLOG CONTENT */
	.blog-content {
	  padding: 2rem;
	  display: flex;
	  flex-direction: column;
	  flex-grow: 1;
	  gap: 1.5rem;
	}

	.blog-content-header {
	  display: flex;
	  justify-content: space-between;
	  align-items: center;
	  gap: 1rem;
	  flex-wrap: wrap;
	}

	.blog-content-body {
	  flex-grow: 1;
	}

	.blog-content-footer {
	  margin-top: auto;
	}
  
	.blog-category {
	  display: inline-block;
	  text-transform: uppercase;
	  color: var(--color-blue-dark);
	  font-weight: var(--fw-semibold);
	  font-size: 0.875rem;
	  letter-spacing: 0.05em;
	  transition: transform 0.3s ease;
	}

	.blog-card:hover .blog-category {
	  transform: translateX(4px);
	}
  
	.blog-title {
	  margin-bottom: 1rem;
	  line-height: 1.3;
	  transition: color 0.3s ease;
	  color: var(--color-blue-dark);
	}

	.blog-card:hover .blog-title {
	  color: var(--color-blue-dark);
	}
  
	.blog-excerpt {
	  line-height: 1.6;
	  margin-bottom: 0;
	  transition: color 0.3s ease;
	}

	.blog-card:hover .blog-excerpt {
	  color: var(--neutral-900);
	}
  
	.blog-date {
	  display: block;
	  color: var(--neutral-600);
	  font-size: 0.875rem;
	  transition: color 0.3s ease;
	}

	.blog-card:hover .blog-date {
	  color: var(--color-blue-dark);
	}
  
  
	/* TABLET */
	@media (min-width: 768px) {
	  .blog-section {
		padding: 8rem 3rem;
	  }
  
	  .blog-grid {
		grid-template-columns: repeat(2, 1fr);
		gap: 2rem;
	  }
  
	  .blog-title {
		font-size: 1.625rem;
	  }
	}
  
	/* DESKTOP */
	@media (min-width: 1024px) {
	  .blog-section {
		padding: 10rem 4rem;
	  }
  
	  .blog-grid {
		grid-template-columns: repeat(3, 1fr);
		gap: 2rem;
	  }
  
	  .blog-content {
		padding: 2.5rem;
	  }
  
	  .blog-title {
		font-size: 1.75rem;
	  }
	}
  
	/* LARGE DESKTOP */
	@media (min-width: 1400px) {
	  .blog-grid {
		gap: 2.5rem;
	  }
	}
  
	/* PRINT */
	@media print {
	  .blog-card {
		page-break-inside: avoid;
		border: 1px solid #000;
	  }
  
	  .blog-grid {
		grid-template-columns: 1fr;
	  }
  
	}
</style>