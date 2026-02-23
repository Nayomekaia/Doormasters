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
	/* ── Mobile first (basis) ── */

	.reviews-component {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin-top: 2rem;
		margin-bottom: 1rem;
		padding: 0 1rem 0;
        background-color: var(--color-white);
	}

	h2 {
		font-size: 1.1rem;
		text-align: center;
		max-width: 100%;
		margin-top: 2rem;
		margin-bottom: 2rem;
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
		border: solid 1px var(--neutral-200);
	}

	/* ── Tablet (640px+) ── */
	@media (min-width: 640px) {
		h2 {
			font-size: 1.3rem;
			margin-bottom: 3rem;
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

	/* ── Desktop (1024px+) ── */
	@media (min-width: 1024px) {
		.reviews-component {
			margin-bottom: 5rem;
			padding: 0;
		}

		h2 {
			font-size: 1.6rem;
			max-width: 900px;
			margin-top: 5rem;
			margin-bottom: 9rem;
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