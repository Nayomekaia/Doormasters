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
	title="PROJECTEN"
	description="Word partner bij Doormasters en versterk uw aanbod in garagedeuren en deuroplossingen. Bij Doormasters is het mogelijk om partner te worden als dealer of installateur in de deurenbranche. Wij werken samen met professionals die kiezen voor kwaliteit, betrouwbaarheid en service, en bieden ondersteuning bij levering, montage en techniek. Samen bouwen we aan duurzame en hoogwaardige deurprojecten."
/>

{#if intro}
	<section class="project-intro">
		<article>
			<h2>{intro.title}</h2>
			<p>{intro.content}</p>
		</article>
		<img src={intro.img} alt={intro.title} />
	</section>
{/if}

<section class="project-count">
	<h2 class="title">Projecten die we hebben afgerond</h2>
	<div class="project-count-numbers">
		<div>
			<h3>1865</h3>
			<p>Industriedeuren</p>
		</div>
		<div>
			<h3>1209</h3>
			<p>Garagedeuren</p>
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
	/* ── Mobile first (basis) ── */

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
		text-align: left;
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