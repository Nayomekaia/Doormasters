<script>
	import { Hero } from '$lib';
	import Button from '$lib/atoms/Button.svelte';
</script>

<svelte:head>
	<title>Contact | Doormasters </title>
</svelte:head>

<Hero
	title="CONTACT"
	description="Heb je vragen of wil je meer informatie? Neem gerust contact met ons op. We helpen je graag verder met advies over onze producten en diensten."
	image="none">
</Hero>

<section class="page-wrapper">
	<!-- INFO KAART (vervangt de Contact component) -->
	<section class="info-card-wrapper">
		<section class="info-card">
			<h2>Reactietijd & Bereikbaarheid</h2>
			
			<section class="info-section">
				<h3>Reactietijd</h3>
				<p>Wij streven ernaar om binnen 24 uur te reageren op uw vraag.</p>
			</section>

			<section class="info-section">
				<h3>Telefonisch bereikbaar</h3>
				<ul>
					<li>Maandag van 08.00 tot 17.00</li>
					<li>Dinsdag van 08.00 tot 17.00</li>
					<li>Woensdag van 08.00 tot 17.00</li>
					<li>Donderdag van 08.00 tot 17.00</li>
					<li>Vrijdag van 08.00 tot 17.00</li>
					<li>Zaterdag: gesloten</li>
					<li>Zondag: gesloten</li>
				</ul>
			</section>

			<p class="info-note">
				<strong>Let op:</strong> In het weekend en op feestdagen zijn wij telefonisch niet bereikbaar. 
				U kunt wel altijd een bericht achterlaten via dit contactformulier.
			</p>
		</section>
	</section>

	<section class="formulier-wrapper">
		<form class="contact-formulier" method="POST">
			<h2>CONTACT FORMULIER</h2>

			<!-- PERSOONLIJKE GEGEVENS -->
			<section class="formulier-sectie">
				<h3>Persoonlijke gegevens</h3>

				<label for="naam">
					<p>Naam<span>*</span></p>
					<input type="text" name="naam" id="naam" placeholder="Bijv. Jan" required />
				</label>

				<label for="achternaam">
					<p>Achternaam<span>*</span></p>
					<input type="text" name="achternaam" id="achternaam" placeholder="Bijv. van Huizen" required />
				</label>

				<label for="telefoon">
					<p>Telefoonnummer<span>*</span></p>
					<input type="tel" name="telefoon" id="telefoon" placeholder="Bijv. 0628763549" required />
				</label>

				<label for="email">
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

				<label for="adres" class="full-width">
					<p>Adres<span>*</span></p>
					<input type="text" name="adres" id="adres" placeholder="Bijv. Kerkstraat 80, 1234 AB Amsterdam" required />
				</label>

				<label for="vraag" class="full-width">
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

			<Button variant="silver">VERZENDEN</Button>
		</form>
	</section>
</section>

<style>
	.page-wrapper {
		background-color: var(--color-white);
		display: flex;
		flex-direction: column;
		gap: 2rem;
		padding: 2rem;
		max-width: 1400px;
		margin: 0 auto;
	}

	@media (min-width: 1024px) {
		.page-wrapper {
			flex-direction: row;
			align-items: flex-start;
			gap: 2rem;
		}
	}

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

	.formulier-wrapper {
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}

	.contact-formulier {
		width: 100%;
		background-color: #f8f9fa;
		border: 1px solid #dee2e6;
		border-radius: 8px;
		padding: 2rem;
	}

	h2 {
		color: var(--color-blue-dark);
		font-size: 1.5rem;
		font-weight: 700;
		margin-bottom: 2rem;
	}

	.formulier-sectie {
		margin-bottom: 2rem;
		display: grid;
		grid-template-columns: 1fr;
		gap: 1.25rem;
	}

	@media (min-width: 768px) {
		.formulier-sectie {
			grid-template-columns: 1fr 1fr;
		}

		.full-width {
			grid-column: 1 / -1;
		}
	}

	h3 {
		color: var(--color-blue-dark);
		font-size: 1.125rem;
		font-weight: 600;
		margin-bottom: 0.5rem;
		grid-column: 1 / -1;
	}

	label {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	label p {
		color: var(--color-blue-dark);
		font-size: 0.875rem;
		font-weight: 500;
		margin: 0;
	}

	label p span {
		color: #dc3545;
	}

	input[type="text"],
	input[type="email"],
	input[type="tel"],
	textarea {
		padding: 0.75rem;
		border: 1px solid #ced4da;
		border-radius: 4px;
		font-size: 0.9375rem;
		background-color: white;
		transition: border-color 0.2s;
		font-family: inherit;
	}

	textarea {
		resize: vertical;
		min-height: 120px;
	}

	input::placeholder,
	textarea::placeholder {
		color: #6c757d;
	}

	input:focus,
	textarea:focus {
		outline: none;
		border-color: var(--color-blue-dark);
		box-shadow: 0 0 0 3px rgba(13, 110, 253, 0.1);
	}

	/* INFO CARD */
	.info-card {
		background-color: #f8f9fa;
		border: 1px solid #dee2e6;
		border-radius: 8px;
		padding: 2rem;
	}

	.info-section {
		margin-bottom: 1.5rem;
	}

	.info-card h2 {
		color: var(--color-blue-dark);
		font-size: 1.5rem;
		font-weight: 700;
		margin-bottom: 1.5rem;
	}

	.info-card h3 {
		color: var(--color-blue-dark);
		font-size: 1.125rem;
		font-weight: 600;
		margin-top: 0;
		margin-bottom: 0.75rem;
	}

	.info-card p {
		color: var(--color-blue-dark);
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
		color: var(--color-blue-dark);
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
	}

	.info-note {
		background-color: #e7f3ff;
		border-left: 4px solid var(--color-blue-dark);
		padding: 1rem;
		border-radius: 4px;
		margin-top: 1.5rem;
	}

	.info-note strong {
		color: var(--color-blue-dark);
	}
</style>