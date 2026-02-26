<script>
	import { Hero, Button} from '$lib';
	import Review from '$lib/components/Reviews.svelte';
	export let data;
	let projecten = data.projecten;

	// ID 1 = hero/intro sectie
	let intro = projecten.find(p => p.id === 1);

	// ID 3 = galerij afbeeldingen
	let galleryProject = projecten.find(p => p.id === 3);
	let galleryImages = galleryProject?.img
		? galleryProject.img.split('\n').map(url => url.trim()).filter(url => url.length > 0)
		: [];
</script>

<svelte:head>
	<title>Projecten | Doormasters</title>
</svelte:head>

<Hero
<Hero title="PROJECTEN"
      description= "Elke deur die wij leveren en monteren is onderdeel van een groter geheel: een
		woning, bedrijfspand of projectontwikkeling waar kwaliteit, uitstraling en
		betrouwbaarheid centraal staan. Op deze pagina vind je een selectie van
		gerealiseerde projecten van Doormasters – in Nederland en internationaal.">
</Hero>

{#if intro}
	<section class="project-intro">
		<article>
			<h2>{intro.title}</h2>
			<p>{intro.content}</p>
		</article>
		<img src={intro.img} alt={intro.title} />
	</section>
{/if}

<section class="info-section">
	<div class="content">
	  <p style="margin-bottom: 4rem; justify-content: center; text-align: center; font-size: 1.5rem;" >In iedere situatie staat dezelfde aanpak centraal:</p>
	  
	  <div class="info-flex">
		<ul class="info-list">
		  <li>Zorgvuldige technische voorbereiding en gratis inmeting;</li>
		  <li>Advies op basis van gebruik, locatie en esthetiek;</li>
		  <li>Duidelijke, transparante offerte;</li>
		  <li>Duurzame materialen en hoogwaardige afwerking;</li>
		  <li>Professionele montage volgens geldende normen.</li>
		</ul>
  
		<div class="info-text">
		  <p>De getoonde projecten geven inzicht in de verschillende toepassingen, deurtypes en afwerkingsmogelijkheden. Ze laten zien hoe functionaliteit, veiligheid en design samenkomen in praktische oplossingen die jarenlang betrouwbaar blijven functioneren.</p>
		  <p>Doormasters realiseert maatwerkoplossingen met oog voor detail – van eerste advies tot oplevering.</p>
		</div>
	  </div>
	</div>
  </section>

<section class="project-count">
	<h2 class="title">Projecten die we hebben afgerond</h2>
	<div class="project-count-numbers">
		<div>
			<h3>2865</h3>
			<p>Sectionaaldeuren:</p>
		</div>
		<div>
			<h3>1221</h3>
			<p>Industriële deuren:</p>
		</div>
		<div>
			<h3>10+</h3>
			<p>Jaren ervaring</p>
		</div>
	</div>
	<Button href="/offerte" variant="silver" mobileOnly={true}>OFFERTE</Button>
</section>


<section class="gallery">
	{#each galleryImages as img, i}
		<div class="gallery-item">
			<img src={img} alt="Project {i + 1}" />
		</div>
	{/each}
</section>


<Review />

<style>
/* Mobile-first */
.info-section {
  padding: 1.5rem 1rem;
  display: flex;
  justify-content: center; 
  align-items: center;
}

.info-section .content {
  text-align: left;
  width: 100%;
  max-width: 1000px;
}

.content p {
	text-align: left;
}
.info-list {
  padding-left: 1.2rem;
  margin: 1rem 0;
  list-style-type: disc;
  color: var(--color-blue-dark);
  font-family: var(--font-primary);
  font-weight: var(--fw-light);
}

/* Flex wrapper for desktop/tablet */
.info-flex {
  display: block; /* default for mobile: stacked */
  gap: 2rem; /* spacing between list and text */
}

/* Tablet and Desktop */
@media (min-width: 768px) {
  .info-section {
    padding: 2rem 2rem;
  }

  .info-flex {
    display: flex; /* side-by-side on larger screens */
    align-items: flex-start;
	gap: 5rem;
  }
  

  .info-list {
    flex: 1; /* list takes half width */
  }

  .info-text {
    flex: 1; /* text takes half width */
  }
}

@media (min-width: 1024px) {
  .info-section {
    padding: 3rem 4rem;
  }
}

	.project-intro {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1.5rem;
		margin-bottom: 2.5rem;
		padding: 0 1rem;
	}

	article {
		margin-top: 1.5rem;
		text-align: center;
		width: 100%;
	}

	article h2 {
		margin-bottom: 0.75rem;
		font-size: 1.5rem;
	}

	p {
		font-size: 0.95rem;
		text-align: center;
		max-width: 100%;
		margin: 0 auto;
	}

	.project-intro img {
		width: 100%;
		height: auto;
		aspect-ratio: 4 / 3;
		object-fit: cover;
		border-radius: 5px;
	}

	.project-count {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1.5rem;
		padding: 2rem 1rem;
		margin-bottom: 3rem;
		text-align: center;
	}

	.title {
		font-size: 1.25rem;
		padding: 0;
		max-width: 100%;
		margin: 0;
	}

	.project-count-numbers {
		display: flex;
		flex-direction: row;
		justify-content: center;
		flex-wrap: wrap;
		gap: 1.5rem;
	}

	.project-count-numbers > div {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
	}

	.project-count-numbers h3 {
		margin: 0 0 0.25rem 0;
		font-size: 1.5rem;
		font-weight: bold;
	}

	.project-count-numbers p {
		margin: 0;
		font-size: 0.8rem;
	}

	/* Galerij - mobiel: 1 kolom */
	.gallery {
		display: grid;
		grid-template-columns: 1fr;
		gap: 0.75rem;
		padding: 0 1rem;
		margin-bottom: 3rem;
		max-width: 1200px;
		margin-left: auto;
		margin-right: auto;
	}

	.gallery-item {
		overflow: hidden;
		border-radius: 5px;
	}

	.gallery-item img {
		width: 100%;
		height: 220px;
		object-fit: cover;
		display: block;
		transition: transform 0.3s ease;
	}

	.gallery-item img:hover {
		transform: scale(1.03);
	}

	/* ── Tablet (640px+) ── */
	@media (min-width: 640px) {
		.project-intro {
			padding: 0 2rem;
			gap: 2rem;
			margin-bottom: 3.5rem;
		}

		article {
			margin-top: 2.5rem;
		}

		article h2 {
			font-size: 1.75rem;
		}

		.project-intro img {
			aspect-ratio: 16 / 7;
			border-radius: 5px;
		}

		.project-count-numbers {
			gap: 3rem;
		}

		.project-count-numbers h3 {
			font-size: 2rem;
		}

		.project-count-numbers p {
			font-size: 0.9rem;
		}

		.title {
			font-size: 1.5rem;
		}

		.gallery {
			grid-template-columns: repeat(2, 1fr);
			gap: 1rem;
			padding: 0 2rem;
		}

		.gallery-item img {
			height: 260px;
		}
	}

	/* ── Desktop (1024px+) ── */
	@media (min-width: 1024px) {
		.project-intro {
			padding: 0;
			margin-bottom: 5rem;
			gap: 2rem;
		}

		article {
			margin-top: 4rem;
			max-width: 700px;
		}

		article h2 {
			font-size: 2rem;
		}

		p {
			font-size: 1rem;
			max-width: 600px;
		}

		.project-intro img {
			max-width: 1200px;
			aspect-ratio: 16 / 6;
		}

		.project-count {
			flex-direction: row;
			justify-content: center;
			gap: 6rem;
			max-width: 1200px;
			margin: 0 auto 5rem auto;
			padding: 2rem;
		}

		.title {
			font-size: 1.75rem;
			max-width: 300px;
			text-align: left;
		}

		.project-count-numbers {
			gap: 4rem;
		}

		.project-count-numbers h3 {
			font-size: 2.5rem;
		}

		.project-count-numbers p {
			font-size: 1rem;
		}

		.gallery {
			grid-template-columns: repeat(3, 1fr);
			gap: 1.25rem;
			padding: 0;
			margin-bottom: 5rem;
		}

		.gallery-item img {
			height: 300px;
		}
	}
</style>