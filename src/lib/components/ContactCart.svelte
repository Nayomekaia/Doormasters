<section class="contact-card">
	<h2>CONTACT GEGEVENS</h2>
	<p class="description">Heb je vragen? Neem contact op via de onderstaande contactgegevens.</p>

	<section class="contact-info">
		<p class="adres">Middelblok 136 d</p>
		<p class="plaats">2831 BP Gouderak</p>

		<p class="telefoon">T: 085 - 3031597</p>
		<p class="email">
			E: <a href="mailto:info@door-masters.nl">info@door-masters.nl</a>
		</p>
	</section>

	<section class="openingstijden">
		<p class="openingstijden-title">Openingstijden:</p>

		<ul class="openingstijd">
			<li>Maandag t/m vrijdag: 9:00 - 17:00</li>
			<li>Zaterdag: gesloten</li>
			<li>Zondag: gesloten</li>
		</ul>

		<p class="afspraak">Showroom bezoek alleen op afspraak</p>
	</section>

	<div class="circle-decoration"></div>
</section>

<style>
	.contact-card {
		position: relative;
		background: linear-gradient(135deg, #1e3a5f 0%, #2c5282 100%);
		border-radius: 12px;
		padding: 2.5rem 2rem;
		color: var(--color-white);
		overflow: hidden;
		width: 100%;
		max-width: 100%;
	}

	.circle-decoration {
		position: absolute;
		bottom: -100px;
		right: -100px;
		width: 300px;
		height: 300px;
		background: rgba(255, 255, 255, 0.05);
		border-radius: 50%;
		pointer-events: none;
	}

	h2 {
		font-weight: 700;
		margin-bottom: 1rem;
		color: var(--color-white);
	}

	.description {
		margin-bottom: 2rem;
		color: var(--color-white);
	}

	.contact-info {
		position: relative;
		z-index: 1;
	}

	.contact-info p {
		margin: 0;
		color: var(--color-white);
	}

	.adres {
		margin-bottom: 0.25rem;
	}

	.plaats {
		margin-bottom: 1.5rem;
	}

	.telefoon,
	.email {
		margin-bottom: 0.5rem;
	}

	.email a {
		color: var(--color-white);
		text-decoration: none;
		transition: opacity 0.2s;
		font-family: var(--primary-font);
	}

	.email a:hover {
		opacity: 0.8;
	}

	.openingstijden-title {
		color: var(--color-white);
		font-weight: var(--fw-bold);
		margin-top: 1.5rem;
		margin-bottom: 0.75rem;
	}

	.openingstijden li {
		line-height: 1.6;
		color: var(--color-white);
		list-style: none;
		font-family: var(--font-primary);
	}

	.afspraak {
		margin-top: 1rem;
		font-style: italic;
		color: var(--color-white);
	}

	@media (max-width: 640px) {
		.contact-card {
			padding: 2rem 1.5rem;
		}

		h2 {
			font-size: 1.5rem;
		}

		.description,
		.adres,
		.plaats,
		.telefoon,
		.email,
		.openingstijden-title,
		.openingstijden li {
			font-size: 0.9375rem;
		}
	}
</style>