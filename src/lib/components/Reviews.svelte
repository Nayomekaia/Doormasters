<script>
	import Review1 from '$lib/assets/rv-1.png';
	import Review2 from '$lib/assets/rv-2.png';
	import Review3 from '$lib/assets/rv-3.png';
</script>

<section class="reviews-component">
	<h2>"Binnen een week had ik mijn nieuwe garagedeur, perfect gemonteerd. Topbedrijf!"</h2>

	<div class="reviews">
		<img src={Review1} alt="Review 1" class="review-image" />
		<img src={Review2} alt="Review 2" class="review-image" />
		<img src={Review3} alt="Review 3" class="review-image" />
	</div>
</section>

<style>
	/* ── Reset ── */
	.reviews-component {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin: 0;
		padding: 2rem 1rem 2rem; /* kleine padding rondom */
		background-color: var(--color-white);
		width: 100%;
		box-sizing: border-box;
	}

	h2 {
		font-size: 1.1rem;
		text-align: center;
		max-width: 100%;
		margin: 0 0 1.5rem 0; /* alleen kleine bottom margin */
	}

	.reviews {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
		width: 100%;
	}

	.review-image {
		width: 100%;
		max-width: 250px;
		border-radius: 10px;
		border: 1px solid var(--neutral-200);
	}

	/* Tablet */
	@media (min-width: 640px) {
		h2 {
			font-size: 1.3rem;
			margin-bottom: 2rem;
		}

		.reviews {
			flex-direction: row;
			flex-wrap: wrap;
			justify-content: center;
			gap: 1.5rem;
		}

		.review-image {
			max-width: 280px;
		}
	}

	/* Desktop */
	@media (min-width: 1024px) {
		h2 {
			font-size: 1.5rem;
			margin-bottom: 2rem; /* geen gigantische 9rem meer */
		}

		.reviews {
			flex-wrap: nowrap;
			gap: 2rem;
		}

		.review-image {
			max-width: 300px;
		}
	}
</style>