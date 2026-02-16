<script>
	import { Hero } from '$lib';
	import Button from '$lib/atoms/Button.svelte';
	import { onMount } from 'svelte';

	let isVisible = false;

	onMount(() => {
		setTimeout(() => {
			isVisible = true;
		}, 100);
	});
</script>

<svelte:head>
	<title>Contact | Doormasters </title>
</svelte:head>

<Hero
	title="CONTACT"
	description="Heb je vragen of wil je meer informatie? Neem gerust contact met ons op. We helpen je graag verder met advies over onze producten en diensten."
	image="none">
</Hero>

<section class="page-wrapper" class:visible={isVisible}>
	<!-- INFO KAART -->
	<section class="info-card-wrapper animate-slide-left">
		<section class="info-card">
			<div class="card-header">
				<h2>Reactietijd & Bereikbaarheid</h2>
				<div class="header-accent"></div>
			</div>
			
			<section class="info-section">
				<h3>Reactietijd</h3>
				<p>Wij streven ernaar om binnen 24 uur te reageren op uw vraag.</p>
			</section>

			<section class="info-section">
				<h3>Telefonisch bereikbaar</h3>
				<ul>
					<li>Maandag t/m vrijdag: 9:00 - 17:00</li>
				</ul>
			</section>

			<div class="info-note">
				<div>
					<strong>Let op:</strong> In het weekend en op feestdagen zijn wij telefonisch niet bereikbaar. 
					U kunt wel altijd een bericht achterlaten via dit contactformulier.
				</div>
			</div>
		</section>
	</section>

	<!-- FORMULIER -->
	<section class="formulier-wrapper animate-slide-right">
		<form class="contact-formulier" method="POST">
			<div class="form-header">
				<h2>CONTACT FORMULIER</h2>
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
					<input type="text" name="achternaam" id="achternaam" placeholder="Bijv. van Huizen" required />
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

				<label for="adres" class="input-wrapper full-width">
					<p>Adres<span>*</span></p>
					<input type="text" name="adres" id="adres" placeholder="Bijv. Kerkstraat 80, 1234 AB Amsterdam" required />
				</label>

				<label for="vraag" class="input-wrapper full-width">
					<p>Vraag of probleem<span>*</span></p>
					<textarea 
						name="vraag" 
						id="vraag" 
						rows="6"
						placeholder="Beschrijf hier uw vraag of probleem..."
						required
					></textarea>
				</label>
			</section>

			<div class="button-wrapper animate-fade-in" style="animation-delay: 0.4s;">
				<Button variant="silver">VERZENDEN</Button>
			</div>
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

	.animate-slide-left,
	.animate-slide-right,
	.animate-fade-in {
		opacity: 0;
	}

	.visible .animate-slide-left {
		animation: slideLeft 0.6s ease-out forwards;
	}

	.visible .animate-slide-right {
		animation: slideRight 0.6s ease-out forwards;
	}

	.visible .animate-fade-in {
		animation: fadeIn 0.6s ease-out forwards;
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

	/* INFO CARD */
	.info-card-wrapper {
		width: 100%;
	}

	@media (min-width: 1024px) {
		.info-card-wrapper {
			width: 100%;
			max-width: 400px;
			position: sticky;
			top: 2rem;
		}
	}

	.info-card {
		background: white;
		border-radius: 16px;
		overflow: hidden;
		box-shadow: 
			0 4px 6px rgba(0, 0, 0, 0.07),
			0 10px 20px rgba(0, 0, 0, 0.05);
		transition: all 0.3s ease;
	}

	.info-card:hover {
		box-shadow: 
			0 8px 12px rgba(0, 0, 0, 0.1),
			0 16px 32px rgba(0, 0, 0, 0.08);
		transform: translateY(-2px);
	}

	.card-header {
		background: linear-gradient(135deg, var(--color-blue-dark) 0%, #1e3a5f 100%);
		padding: 2rem;
		position: relative;
		overflow: hidden;
	}

	.card-header::before {
		content: '';
		position: absolute;
		top: -50%;
		right: -10%;
		width: 150px;
		height: 150px;
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

	.info-card h2 {
		color: white;
		font-size: 1.5rem;
		font-weight: 700;
		margin: 0;
		position: relative;
		z-index: 1;
		letter-spacing: 0.5px;
	}

	.info-section {
		padding: 1.5rem 2rem;
		border-bottom: 1px solid #f0f0f0;
		position: relative;
	}

	.info-section:last-of-type {
		border-bottom: none;
	}

	.section-icon {
		font-size: 1.5rem;
		margin-bottom: 0.5rem;
	}

	.info-card h3 {
		color: var(--color-blue-dark);
		font-size: 1.125rem;
		font-weight: 600;
		margin: 0 0 0.75rem 0;
	}

	.info-card p {
		color: #4a5568;
		font-size: 0.9375rem;
		line-height: 1.6;
		margin: 0;
	}

	.info-card ul {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	.info-card ul li {
		color: #4a5568;
		font-size: 0.9375rem;
		line-height: 1.8;
		padding-left: 1.25rem;
		position: relative;
	}

	.info-card ul li::before {
		content: "•";
		position: absolute;
		left: 0;
		color: var(--color-blue-dark);
		font-weight: bold;
		font-size: 1.2rem;
	}

	.info-note {
		background: linear-gradient(135deg, #e7f3ff 0%, #f0f8ff 100%);
		border-left: 4px solid var(--color-blue-dark);
		padding: 1.25rem;
		margin: 1.5rem;
		border-radius: 8px;
		display: flex;
		gap: 1rem;
		align-items: flex-start;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
	}

	.note-icon {
		font-size: 1.5rem;
		flex-shrink: 0;
	}

	.info-note strong {
		color: var(--color-blue-dark);
		display: block;
		margin-bottom: 0.25rem;
	}

	.info-note div {
		color: #4a5568;
		font-size: 0.9375rem;
		line-height: 1.6;
	}

	/* FORMULIER */
	.formulier-wrapper {
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 2rem;
		flex: 1;
	}

	.contact-formulier {
		width: 100%;
		background: white;
		border-radius: 16px;
		padding: 0;
		overflow: hidden;
		box-shadow: 
			0 4px 6px rgba(0, 0, 0, 0.07),
			0 10px 20px rgba(0, 0, 0, 0.05);
		transition: all 0.3s ease;
	}

	.contact-formulier:hover {
		box-shadow: 
			0 8px 12px rgba(0, 0, 0, 0.1),
			0 16px 32px rgba(0, 0, 0, 0.08);
		transform: translateY(-2px);
	}

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

	.form-header h2 {
		color: white;
		font-size: 1.75rem;
		font-weight: 700;
		margin: 0;
		position: relative;
		z-index: 1;
		letter-spacing: 0.5px;
	}

	.formulier-sectie {
		padding: 2.5rem 2rem;
		display: grid;
		grid-template-columns: 1fr;
		gap: 1.5rem;
		background: #fafbfc;
	}

	@media (min-width: 768px) {
		.formulier-sectie {
			grid-template-columns: 1fr 1fr;
		}

		.full-width {
			grid-column: 1 / -1;
		}
	}

	.sectie-header {
		grid-column: 1 / -1;
		margin-bottom: 1rem;
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

	input[type="text"],
	input[type="email"],
	input[type="tel"],
	textarea {
		padding: 0.875rem 1rem;
		border: 2px solid #e1e8ed;
		border-radius: 8px;
		font-size: 0.9375rem;
		background-color: white;
		transition: all 0.3s ease;
		font-family: inherit;
		box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
	}

	textarea {
		resize: vertical;
		min-height: 140px;
	}

	input:hover,
	textarea:hover {
		border-color: #cbd5e0;
	}

	input::placeholder,
	textarea::placeholder {
		color: #a0aec0;
		transition: opacity 0.2s ease;
	}

	input:focus,
	textarea:focus {
		outline: none;
		border-color: var(--color-blue-dark);
		box-shadow: 
			0 0 0 3px rgba(13, 110, 253, 0.1),
			0 2px 8px rgba(13, 110, 253, 0.15);
		transform: translateY(-1px);
	}

	input:focus::placeholder,
	textarea:focus::placeholder {
		opacity: 0.6;
	}

	.input-wrapper:focus-within p {
		color: #0056b3;
	}

	/* BUTTON */
	.button-wrapper {
		padding: 2rem;
		background: white;
		display: flex;
		justify-content: center;
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

	/* Progressive enhancement */
	@media (prefers-reduced-motion: reduce) {
		*,
		*::before,
		*::after {
			animation-duration: 0.01ms !important;
			animation-iteration-count: 1 !important;
			transition-duration: 0.01ms !important;
		}
	}

	/* Responsive */
	@media (max-width: 768px) {
		.form-header,
		.card-header {
			padding: 2rem 1.5rem;
		}

		.form-header h2,
		.info-card h2 {
			font-size: 1.5rem;
		}

		.formulier-sectie {
			padding: 2rem 1.5rem;
		}

		.info-section {
			padding: 1.25rem 1.5rem;
		}
	}
</style>