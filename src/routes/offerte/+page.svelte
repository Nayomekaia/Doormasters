<script>
	import { Hero } from '$lib';
	import Button from '$lib/atoms/Button.svelte';
	import Contact from '$lib/components/ContactCart.svelte';
	import { onMount } from 'svelte';

	let selectedDeur = '';
	let isVisible = false;

	const deurOpties = ['Sectionaal Deur', 'Roldeur', 'Openslaande Deur', 'Industriële Deur'];

	onMount(() => {
		// Trigger animatie na component mount
		setTimeout(() => {
			isVisible = true;
		}, 100);
	});
</script>

<svelte:head>
	<title>Offerte | Doormasters</title>
</svelte:head>

<Hero
	title="OFFERTES AANVRAGEN"
	description="Vraag eenvoudig en vrijblijvend een offerte aan. Vul het formulier in met je wensen en afmetingen, dan nemen wij zo snel mogelijk contact met je op met een passend voorstel."
	image="none"
></Hero>

<!-- PAGINA LAYOUT: CONTACT LINKS, FORMULIER RECHTS -->
<section class="page-wrapper" class:visible={isVisible}>
	<!-- CONTACT CARD -->
	<section class="contact-wrapper animate-slide-left">
		<Contact />
	</section>

	<!-- FORMULIER -->
	<section class="formulier-wrapper animate-slide-right">
		<form class="offerte-formulier" method="POST">
			<div class="form-header">
				<h2>OFFERTE FORMULIER</h2>
				<div class="header-accent"></div>
			</div>

			<!-- PERSOONLIJKE GEGEVENS -->
			<section class="formulier-sectie animate-fade-in" style="animation-delay: 0.2s;">
				<div class="sectie-header">
					<h3>Persoonlijke gegevens</h3>
					<div class="header-line"></div>
				</div>

				<label for="naam" class="input-wrapper">
					<p>Naam<span>*</span></p>
					<input type="text" name="naam" id="naam" placeholder="Bijv. Jan" required />
				</label>

				<label for="achternaam" class="input-wrapper">
					<p>Achternaam<span>*</span></p>
					<input
						type="text"
						name="achternaam"
						id="achternaam"
						placeholder="Bijv. van Huizen"
						required
					/>
				</label>

				<label for="adres" class="input-wrapper">
					<p>Adres<span>*</span></p>
					<input type="text" name="adres" id="adres" placeholder="Bijv. Kerkstraat 80" required />
				</label>

				<label for="adres2" class="input-wrapper">
					<p>Adres regel 2</p>
					<input type="text" name="adres2" id="adres2" placeholder="" />
				</label>

				<label for="plaats" class="input-wrapper">
					<p>Plaats<span>*</span></p>
					<input type="text" name="plaats" id="plaats" placeholder="Bijv. Alkmaar" required />
				</label>

				<label for="staat" class="input-wrapper">
					<p>Staat/Regio/Provincie<span>*</span></p>
					<input type="text" name="staat" id="staat" placeholder="Bijv. Noord-Holland" required />
				</label>

				<label for="postcode" class="input-wrapper">
					<p>Postcode<span>*</span></p>
					<input type="text" name="postcode" id="postcode" placeholder="Bijv. 1111AA" required />
				</label>

				<label for="land" class="input-wrapper">
					<p>Land<span>*</span></p>
					<input type="text" name="land" id="land" placeholder="Nederland" required />
				</label>

				<label for="telefoon" class="input-wrapper">
					<p>Telefoonnummer<span>*</span></p>
					<input type="tel" name="telefoon" id="telefoon" placeholder="Bijv. 0628763549" required />
				</label>

				<label for="email" class="input-wrapper">
					<p>E-mailadres<span>*</span></p>
					<input
						type="email"
						name="email"
						id="email"
						placeholder="Bijv. janvanhuizen@gmail.com"
						required
						pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
					/>
				</label>
			</section>

			<!-- OFFERTE AANVRAAG -->
			<section class="formulier-sectie-full animate-fade-in" style="animation-delay: 0.4s;">
				<div class="sectie-header">
					<h3>Offerte Aanvraag</h3>
					<div class="header-line"></div>
				</div>

				<fieldset class="radio-group">
					<legend>Soort deur<span>*</span></legend>
					<p class="help-text">Selecteer hier de deur van uw keuze</p>

					<div class="radio-options">
						{#each deurOpties as optie, index}
							<label class="radio-label" style="animation-delay: {0.5 + index * 0.1}s;">
								<input
									type="radio"
									name="soortDeur"
									value={optie}
									bind:group={selectedDeur}
									required
								/>
								<span class="radio-text">{optie}</span>
								<span class="radio-checkmark"></span>
							</label>
						{/each}
					</div>
				</fieldset>

				<!-- BUTTON CENTREREN -->
				<div class="button-wrapper animate-fade-in" style="animation-delay: 0.9s;">
					<Button variant="silver">VERSTUREN</Button>
				</div>
			</section>
		</form>
	</section>
</section>

<style>
	/* ANIMATIES */
	@keyframes slideLeft {
		from {
			opacity: 0;
			transform: translateX(-30px);
		}
		to {
			opacity: 1;
			transform: translateX(0);
		}
	}

	@keyframes slideRight {
		from {
			opacity: 0;
			transform: translateX(30px);
		}
		to {
			opacity: 1;
			transform: translateX(0);
		}
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
			transform: translateY(20px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	/* Basis state - verborgen */
	.animate-slide-left,
	.animate-slide-right,
	.animate-fade-in,
	.radio-label {
		opacity: 0;
	}

	/* Animatie classes wanneer visible */
	.visible .animate-slide-left {
		animation: slideLeft 0.6s ease-out forwards;
	}

	.visible .animate-slide-right {
		animation: slideRight 0.6s ease-out forwards;
	}

	.visible .animate-fade-in {
		animation: fadeIn 0.6s ease-out forwards;
	}

	.visible .radio-label {
		animation: fadeIn 0.4s ease-out forwards;
	}

	/* PAGINA LAYOUT */
	.page-wrapper {
		display: flex;
		flex-direction: column;
		gap: 2rem;
		padding: 2rem;
		max-width: 1400px;
		margin: 0 auto;
		background: linear-gradient(to bottom, #f8f9fa 0%, #ffffff 100%);
	}

	@media (min-width: 1024px) {
		.page-wrapper {
			flex-direction: row;
			align-items: flex-start;
			gap: 3rem;
		}
	}

	/* CONTACT CARD LINKS */
	.contact-wrapper {
		width: 100%;
	}

	@media (min-width: 1024px) {
		.contact-wrapper {
			width: 100%;
			max-width: 400px;
			position: sticky;
			top: 2rem;
		}
	}

	/* FORMULIER RECHTS */
	.formulier-wrapper {
		width: 100%;
		display: flex;
		justify-content: center;
		flex: 1;
	}

	.offerte-formulier {
		width: 100%;
		max-width: 800px;
		background: white;
		border-radius: 16px;
		padding: 0;
		box-shadow: 
			0 4px 6px rgba(0, 0, 0, 0.07),
			0 10px 20px rgba(0, 0, 0, 0.05);
		overflow: hidden;
		transition: all 0.3s ease;
	}

	.offerte-formulier:hover {
		box-shadow: 
			0 8px 12px rgba(0, 0, 0, 0.1),
			0 16px 32px rgba(0, 0, 0, 0.08);
		transform: translateY(-2px);
	}

	/* FORM HEADER */
	.form-header {
		background: linear-gradient(135deg, var(--color-blue-dark) 0%, #1e3a5f 100%);
		padding: 2.5rem 2rem;
		position: relative;
		overflow: hidden;
	}

	.form-header::before {
		content: '';
		position: absolute;
		top: -50%;
		right: -10%;
		width: 200px;
		height: 200px;
		background: rgba(255, 255, 255, 0.1);
		border-radius: 50%;
	}

	.header-accent {
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		height: 4px;
		background: linear-gradient(90deg, #4a90e2 0%, #67b8f7 100%);
	}

	h2 {
		color: white;
		font-size: 1.75rem;
		font-weight: 700;
		margin: 0;
		position: relative;
		z-index: 1;
		letter-spacing: 0.5px;
	}

	/* SECTIE HEADERS */
	.sectie-header {
		grid-column: 1 / -1;
		margin-bottom: 1.5rem;
	}

	.sectie-header h3 {
		color: var(--color-blue-dark);
		font-size: 1.25rem;
		font-weight: 600;
		margin: 0 0 0.5rem 0;
	}

	.header-line {
		width: 60px;
		height: 3px;
		background: linear-gradient(90deg, var(--color-blue-dark) 0%, #4a90e2 100%);
		border-radius: 2px;
	}

	/* FORMULIER STYLING */
	.formulier-sectie {
		padding: 2.5rem 2rem;
		display: grid;
		grid-template-columns: 1fr;
		gap: 1.5rem;
		background: #fafbfc;
		border-bottom: 1px solid #e9ecef;
	}

	.formulier-sectie-full {
		padding: 2.5rem 2rem;
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}

	@media (min-width: 768px) {
		.formulier-sectie {
			grid-template-columns: 1fr 1fr;
		}
	}

	/* INPUT STYLING */
	.input-wrapper {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	label p {
		color: var(--color-blue-dark);
		font-size: 0.875rem;
		font-weight: 600;
		margin: 0;
		transition: color 0.2s ease;
	}

	label p span {
		color: #dc3545;
	}

	input[type='text'],
	input[type='email'],
	input[type='tel'] {
		padding: 0.875rem 1rem;
		border: 2px solid #e1e8ed;
		border-radius: 8px;
		background-color: white;
		transition: all 0.3s ease;
		font-size: 0.9375rem;
		box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
	}

	input[type='text']:hover,
	input[type='email']:hover,
	input[type='tel']:hover {
		border-color: #cbd5e0;
	}

	input[type='text']:focus,
	input[type='email']:focus,
	input[type='tel']:focus {
		outline: none;
		border-color: var(--color-blue-dark);
		box-shadow: 
			0 0 0 3px rgba(13, 110, 253, 0.1),
			0 2px 8px rgba(13, 110, 253, 0.15);
		transform: translateY(-1px);
	}

	input::placeholder {
		color: #a0aec0;
		transition: opacity 0.2s ease;
	}

	input:focus::placeholder {
		opacity: 0.6;
	}

	.input-wrapper:focus-within p {
		color: #0056b3;
	}

	/* RADIO BUTTONS */
	.radio-group {
		border: none;
		padding: 0;
		margin: 0;
	}

	legend {
		color: var(--color-blue-dark);
		font-size: 0.875rem;
		font-weight: 600;
		padding: 0;
		margin-bottom: 0.5rem;
	}

	legend span {
		color: #dc3545;
	}

	.help-text {
		color: #64748b;
		font-size: 0.875rem;
		margin: 0 0 1rem 0;
	}

	.radio-options {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}

	.radio-label {
		position: relative;
		display: flex;
		align-items: center;
		gap: 0.75rem;
		cursor: pointer;
		padding: 1rem 1.25rem;
		border-radius: 10px;
		border: 2px solid #e1e8ed;
		background: white;
		transition: all 0.3s ease;
	}

	.radio-label:hover {
		border-color: var(--color-blue-dark);
		background: #f8fafc;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
		transform: translateX(4px);
	}

	.radio-label input[type='radio'] {
		width: 1.25rem;
		height: 1.25rem;
		accent-color: var(--color-blue-dark);
		cursor: pointer;
		flex-shrink: 0;
	}

	.radio-label input[type='radio']:checked ~ .radio-text {
		color: var(--color-blue-dark);
		font-weight: 600;
	}

	.radio-label input[type='radio']:checked {
		transform: scale(1.1);
	}

	.radio-text {
		color: var(--color-blue-dark);
		font-size: 0.9375rem;
		transition: all 0.2s ease;
		flex: 1;
	}

	/* BUTTON STYLING */
	.button-wrapper {
		display: flex;
		justify-content: center;
		margin-top: 1rem;
		width: 100%;
	}

	.button-wrapper :global(button) {
		transition: all 0.3s ease;
		padding: 1rem 3rem;
		font-size: 1rem;
		font-weight: 600;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
	}

	.button-wrapper :global(button:hover) {
		transform: translateY(-3px);
		box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
	}

	/* Progressive enhancement - respecteer prefers-reduced-motion */
	@media (prefers-reduced-motion: reduce) {
		*,
		*::before,
		*::after {
			animation-duration: 0.01ms !important;
			animation-iteration-count: 1 !important;
			transition-duration: 0.01ms !important;
		}
	}

	/* Responsive aanpassingen */
	@media (max-width: 768px) {
		.form-header {
			padding: 2rem 1.5rem;
		}

		h2 {
			font-size: 1.5rem;
		}

		.formulier-sectie,
		.formulier-sectie-full {
			padding: 2rem 1.5rem;
		}
	}
</style>