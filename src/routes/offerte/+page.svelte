<script>
	import { Hero } from '$lib';
	import Button from '$lib/atoms/Button.svelte';
	import Contact from '$lib/components/ContactCart.svelte';

	let selectedDeur = '';

	const deurOpties = ['Sectionaal Deur', 'Roldeur', 'Openslaande Deur', 'Industriële Deur'];
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
<section class="page-wrapper">
	<!-- CONTACT CARD -->
	<section class="contact-wrapper">
		<Contact />
	</section>

	<!-- FORMULIER -->
	<section class="formulier-wrapper">
		<form class="offerte-formulier" method="POST">
			<h2>OFFERTE FORMULIER</h2>

			<!-- PERSOONLIJKE GEGEVENS -->
			<section class="formulier-sectie">
				<h3>Persoonlijke gegevens</h3>

				<label for="naam">
					<p>Naam<span>*</span></p>
					<input type="text" name="naam" id="naam" placeholder="Bijv. Jan" required />
				</label>

				<label for="achternaam">
					<p>Achternaam<span>*</span></p>
					<input
						type="text"
						name="achternaam"
						id="achternaam"
						placeholder="Bijv. van Huizen"
						required
					/>
				</label>

				<label for="adres">
					<p>Adres<span>*</span></p>
					<input type="text" name="adres" id="adres" placeholder="Bijv. Kerkstraat 80" required />
				</label>

				<label for="adres2">
					<p>Adres regel 2</p>
					<input type="text" name="adres2" id="adres2" placeholder="" />
				</label>

				<label for="plaats">
					<p>Plaats<span>*</span></p>
					<input type="text" name="plaats" id="plaats" placeholder="Bijv. Alkmaar" required />
				</label>

				<label for="staat">
					<p>Staat/Regio/Provincie<span>*</span></p>
					<input type="text" name="staat" id="staat" placeholder="Bijv. Noord-Holland" required />
				</label>

				<label for="postcode">
					<p>Postcode<span>*</span></p>
					<input type="text" name="postcode" id="postcode" placeholder="Bijv. 1111AA" required />
				</label>

				<label for="land">
					<p>Land<span>*</span></p>
					<input type="text" name="land" id="land" placeholder="Nederland" required />
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
			</section>

			<!-- OFFERTE AANVRAAG -->
			<section class="formulier-sectie-full">
				<h3>Offerte Aanvraag</h3>

				<fieldset class="radio-group">
					<legend style="font-family: var(--font-primary); font-weight: var(--fw-light; color: var(--color-blue-dark);">Soort deur<span>*</span></legend>
					<p class="help-text">Selecteer hier de deur van uw keuze</p>

					{#each deurOpties as optie}
						<label class="radio-label">
							<input
								type="radio"
								name="soortDeur"
								value={optie}
								bind:group={selectedDeur}
								required
							/>
							<span>{optie}</span>
						</label>
					{/each}
				</fieldset>

				<!-- BUTTON CENTREREN -->
				<div class="button-wrapper">
					<Button variant="silver">VERSTUREN</Button>
				</div>
			</section>
		</form>
	</section>
</section>

<style>
	/* PAGINA LAYOUT */
	.page-wrapper {
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
	}

	.offerte-formulier {
		width: 100%;
		max-width: 800px;
		background-color: #f8f9fa;
		border: 1px solid #dee2e6;
		border-radius: 8px;
		padding: 2rem;
	}

	/* BUTTON CENTREREN */
	.button-wrapper {
		display: flex;
		justify-content: center;
		margin-top: 2rem;
		width: 100%;
	}
	

	/* FORMULIER STYLING */
	.formulier-sectie {
		margin-bottom: 2rem;
		display: grid;
		grid-template-columns: 1fr;
		gap: 1.25rem;
	}

	.formulier-sectie-full {
		margin-bottom: 2rem;
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}

	@media (min-width: 768px) {
		.formulier-sectie {
			grid-template-columns: 1fr 1fr;
		}
	}

	/* RADIO BUTTONS */
	.radio-group {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}

	.radio-label {
		display: flex;
		flex-direction: row;
		gap: 0.75rem;
		cursor: pointer;
		align-items: center;
	}

	.radio-label input[type='radio'] {
		width: 1.25rem;
		height: 1.25rem;
		accent-color: var(--color-blue-dark);
	}
	.radio-label span {
		color: var(--color-blue-dark);
		font-size: 0.9375rem;
	}

	/* OVERIGE STYLING: H2, H3, INPUTS, ETC */
	h2 {
		color: var(--color-blue-dark);
		font-size: 1.5rem;
		font-weight: 700;
		margin-bottom: 2rem;
	}
	h3 {
		color: var(--color-blue-dark);
		font-size: 1.125rem;
		font-weight: 600;
		margin-bottom: 0.5rem;
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
	label p span,
	legend span {
		color: #dc3545;
	}

	input[type='text'],
	input[type='email'],
	input[type='tel'] {
		padding: 0.75rem;
		border: 1px solid #ced4da;
		border-radius: 4px;
		background-color: white;
		transition: border-color 0.2s;
	}

	input::placeholder {
		color: #6c757d;
	}


</style>
