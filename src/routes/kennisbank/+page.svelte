<script>
	import { Hero } from '$lib';
	export let data;
	let kennisbank = data.kennisbank;
  </script>
  
  <svelte:head>
	<title>Kennisbank | Doormasters</title>
  </svelte:head>
  
  <Hero
	title="KENNISBANK"
	description="Word partner bij Doormasters en versterk uw aanbod in garagedeuren en deuroplossingen. Bij Doormasters is het mogelijk om partner te worden als dealer of installateur in de deurenbranche. Wij werken samen met professionals die kiezen voor kwaliteit, betrouwbaarheid en service, en bieden ondersteuning bij levering, montage en techniek. Samen bouwen we aan duurzame en hoogwaardige deurprojecten."
  />
  
  <main class="kennisbank-main">
	<section class="blog-section">
	  <ul class="blog-grid">
		{#each kennisbank as item}
		  <li class="blog-card">
			<article>
			  <a href={`/kennisbank/${item.slug}`} class="blog-link">
				<figure class="blog-image">
				  <img 
					src={item.image || '{placeholder}'} 
					alt={item.title}
					loading="lazy"
				  >
				</figure>
				
				<header class="blog-content">
				  {#if item.category}
					<span class="blog-category">{item.category}</span>
				  {/if}
				  
				  <h2 class="blog-title">{item.title}</h2>
				  
				  {#if item.excerpt || item.description}
					<p class="blog-excerpt">{item.excerpt || item.description}</p>
				  {/if}
				  
				  {#if item.created_at || item.published_at}
					<time class="blog-date" datetime={item.created_at || item.published_at}>
					  {new Date(item.created_at || item.published_at).toLocaleDateString('nl-NL', {
						year: 'numeric',
						month: 'long',
						day: 'numeric'
					  })}
					</time>
				  {/if}
				  
				  <span class="blog-cta">Lees meer →</span>
				</header>
			  </a>
			</article>
		  </li>
		{/each}
	  </ul>
	</section>
  </main>
  
  <style>
	.kennisbank-main {
	  background-color: #ffffff;
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
	  gap: 3rem;
	}
  
	/* BLOG CARD */
	.blog-card {
	  background-color: #ffffff;
	  border: 1px solid #e5e5e5;
	  border-radius: 8px;
	  overflow: hidden;
	  transition: transform 0.3s ease, box-shadow 0.3s ease;
	}
  
	.blog-card:hover {
	  transform: translateY(-4px);
	  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
	}
  
	.blog-link {
	  text-decoration: none;
	  color: inherit;
	  display: block;
	}
  
	/* BLOG IMAGE */
	.blog-image {
	  margin: 0;
	  width: 100%;
	  aspect-ratio: 16/9;
	  overflow: hidden;
	  background-color: #f5f5f5;
	}
  
	.blog-image img {
	  width: 100%;
	  height: 100%;
	  object-fit: cover;
	  display: block;
	  transition: transform 0.3s ease;
	}
  
	.blog-card:hover .blog-image img {
	  transform: scale(1.05);
	}
  
	/* BLOG CONTENT */
	.blog-content {
	  padding: 2rem;
	}
  
	.blog-category {
	  display: inline-block;
	  font-size: 0.75rem;
	  letter-spacing: 0.1em;
	  text-transform: uppercase;
	  color: #1e3a8a;
	  font-weight: 600;
	  margin-bottom: 0.75rem;
	}
  
	.blog-title {
	  font-size: 1.5rem;
	  font-weight: 600;
	  line-height: 1.3;
	  margin-bottom: 1rem;
	  color: #0a0a0a;
	}
  
	.blog-excerpt {
	  font-size: 1rem;
	  line-height: 1.6;
	  color: #525252;
	  margin-bottom: 1.5rem;
	  display: -webkit-box;
	  -webkit-line-clamp: 3;
	  -webkit-box-orient: vertical;
	  overflow: hidden;
	}
  
	.blog-date {
	  display: block;
	  font-size: 0.875rem;
	  color: #737373;
	  margin-bottom: 1rem;
	}
  
	.blog-cta {
	  display: inline-block;
	  font-size: 0.9375rem;
	  font-weight: 600;
	  color: #1e3a8a;
	  transition: transform 0.3s ease;
	}
  
	.blog-card:hover .blog-cta {
	  transform: translateX(4px);
	}
  
	/* TABLET */
	@media (min-width: 768px) {
	  .blog-section {
		padding: 8rem 3rem;
	  }
  
	  .blog-grid {
		grid-template-columns: repeat(2, 1fr);
		gap: 3rem;
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
		gap: 3rem;
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
		gap: 4rem;
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
  
	  .blog-cta {
		display: none;
	  }
	}
  </style>