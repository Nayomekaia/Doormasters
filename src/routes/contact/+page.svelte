<script>
	import { Hero, Button } from '$lib';
	import { onMount } from 'svelte';
	import { enhance } from '$app/forms';

	let isVisible = false;
	let formState = 'idle'; // 'idle' | 'loading' | 'success' | 'error'
	let errorMessage = 'Er is iets misgegaan. Probeer het opnieuw.';

	onMount(() => {
		setTimeout(() => { isVisible = true; }, 100);
	});

	function handleEnhance() {
		formState = 'loading';
		errorMessage = '';

		return async ({ result, update }) => {
			if (result.type === 'success') {
				formState = 'success';
				document.querySelector('.contact-formulier')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
			} else if (result.type === 'failure') {
				formState = 'error';
				errorMessage = result.data?.message || 'Er is iets misgegaan. Probeer het opnieuw.';
			} else {
				formState = 'error';
				errorMessage = 'Verbindingsfout. Controleer je internetverbinding en probeer het opnieuw.';
			}
			await update({ reset: false });
		};
	}

	function resetForm() {
		formState = 'idle';
		errorMessage = '';
	}
</script>

<svelte:head>
	<title>Contact | Doormasters</title>
</svelte:head>

<Hero
	title="CONTACT"
	description="Heb je vragen of wil je meer informatie? Neem gerust contact met ons op. We helpen je graag verder met advies over onze producten en diensten."
	image="none"
/>

{#if import.meta.env.DEV}
    <div style="display:flex; gap:.5rem; padding:1rem; background:#f1f5f9; flex-wrap:wrap;">
        <button type="button" on:click={() => formState = 'idle'}>Idle</button>
        <button type="button" on:click={() => formState = 'loading'}>Loading</button>
        <button type="button" on:click={() => formState = 'success'}>Success</button>
        <button type="button" on:click={() => { formState = 'error'; errorMessage = 'Er is iets fout gegaan probeer het later opnieuw!' }}>Error</button>
    </div>
{/if}

<section class="page-wrapper" class:visible={isVisible}>

	<!-- INFO CARD -->
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
					<strong>Let op:</strong>
					In het weekend en op feestdagen zijn wij telefonisch niet bereikbaar.
					U kunt wel altijd een bericht achterlaten via dit contactformulier.
				</div>
			</div>
		</section>
	</section>

	<!-- FORMULIER -->
	<section class="formulier-wrapper animate-slide-right">
		<form class="contact-formulier" method="POST" use:enhance={handleEnhance}>

			<div class="form-header">
				<h2>CONTACT FORMULIER</h2>
				<div class="header-accent"></div>
			</div>

			<!-- SUCCESS STATE -->
			{#if formState === 'success'}
				<div class="state-banner success-banner" role="alert" aria-live="polite">
					<div class="state-icon-wrap success-icon-wrap">
						<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
							<circle cx="12" cy="12" r="10"/>
							<path d="M8 12l3 3 5-5"/>
						</svg>
					</div>
					<div class="state-text">
						<strong>Bericht verzonden!</strong>
						<p>Bedankt voor je bericht. We nemen binnen 24 uur contact met je op.</p>
					</div>
				</div>

				<div class="success-body">
					<div class="success-checklist">
						<div class="check-item">
							<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
							<span>Bericht ontvangen</span>
						</div>
						<div class="check-item">
							<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
							<span>Bevestigingsmail onderweg</span>
						</div>
						<div class="check-item pending">
							<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
							<span>We reageren binnen 24 uur</span>
						</div>
					</div>
					<Button variant="silver" type="button" class="new-form-btn" on:click={resetForm}>
						Nieuw bericht sturen
					</Button>
				</div>
			{/if}

			<!-- ERROR STATE -->
			{#if formState === 'error'}
				<div class="state-banner error-banner" role="alert" aria-live="assertive">
					<div class="state-icon-wrap error-icon-wrap">
						<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
							<circle cx="12" cy="12" r="10"/>
							<line x1="12" y1="8" x2="12" y2="12"/>
							<line x1="12" y1="16" x2="12.01" y2="16"/>
						</svg>
					</div>
					<div class="state-text">
						<strong>Verzenden mislukt</strong>
						<p>{errorMessage}</p>
					</div>
					<button  type="button" class="dismiss-btn" on:click={() => formState = 'idle'} aria-label="Sluiten">
						<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
							<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
						</svg>
					</button>
				</div>
			{/if}

			<!-- FORM FIELDS (verborgen bij success) -->
			{#if formState !== 'success'}
				<div class="form-body" class:form-loading={formState === 'loading'}>

					{#if formState === 'loading'}
						<div class="loading-overlay" aria-hidden="true">
							<div class="spinner"></div>
							<p>Bericht wordt verzonden...</p>
						</div>
					{/if}

					<section class="formulier-sectie animate-fade-in" style="animation-delay: 0.2s;">
						<div class="sectie-header">
							<h3>Persoonlijke gegevens</h3>
							<div class="header-line"></div>
						</div>

						<label for="naam" class="input-wrapper">
							<p>Naam<span>*</span></p>
							<input type="text" name="naam" id="naam" required disabled={formState === 'loading'} />
						</label>

						<label for="achternaam" class="input-wrapper">
							<p>Achternaam<span>*</span></p>
							<input type="text" name="achternaam" id="achternaam" required disabled={formState === 'loading'} />
						</label>

						<label for="telefoon" class="input-wrapper">
							<p>Telefoonnummer<span>*</span></p>
							<input type="tel" name="telefoon" id="telefoon" required disabled={formState === 'loading'} />
						</label>

						<label for="email" class="input-wrapper">
							<p>E-mailadres<span>*</span></p>
							<input type="email" name="email" id="email" required disabled={formState === 'loading'} />
						</label>

						<label for="adres" class="input-wrapper full-width">
							<p>Adres<span>*</span></p>
							<input type="text" name="adres" id="adres" required disabled={formState === 'loading'} />
						</label>

						<label for="vraag" class="input-wrapper full-width">
							<p>Vraag of probleem<span>*</span></p>
							<textarea name="vraag" id="vraag" rows="6" required disabled={formState === 'loading'}></textarea>
						</label>
					</section>

					<div class="button-wrapper animate-fade-in" style="animation-delay: 0.4s;">
						<Button variant="silver" type="submit" class="submit-btn" disabled={formState === 'loading'} aria-busy={formState === 'loading'}>
							{#if formState === 'loading'}
								<span class="btn-spinner" aria-hidden="true"></span>
								Verzenden...
							{:else}
								<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
									<line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
								</svg>
								VERZENDEN
							{/if}
						</Button>
					</div>

				</div>
			{/if}

		</form>
	</section>
</section>

<style>
	/* ANIMATIES */
	@keyframes slideLeft { from {opacity:0; transform:translateX(-30px);} to {opacity:1; transform:translateX(0);} }
	@keyframes slideRight { from {opacity:0; transform:translateX(30px);} to {opacity:1; transform:translateX(0);} }
	@keyframes fadeIn { from {opacity:0; transform:translateY(20px);} to {opacity:1; transform:translateY(0);} }
	@keyframes spin { to { transform: rotate(360deg); } }
	@keyframes bannerIn { from {opacity:0; transform:translateY(-10px) scale(0.98);} to {opacity:1; transform:translateY(0) scale(1);} }
	@keyframes successPulse { 0%,100% { box-shadow: 0 0 0 0 rgba(34,197,94,0.4); } 50% { box-shadow: 0 0 0 12px rgba(34,197,94,0); } }

	.animate-slide-left, .animate-slide-right, .animate-fade-in { opacity:0; }
	.visible .animate-slide-left { animation: slideLeft 0.6s ease-out forwards; }
	.visible .animate-slide-right { animation: slideRight 0.6s ease-out forwards; }
	.visible .animate-fade-in { animation: fadeIn 0.6s ease-out forwards; }

	/* PAGINA LAYOUT */
	.page-wrapper { display:flex; flex-direction:column; gap:2rem; padding:2rem; max-width:1400px; margin:0 auto; background:linear-gradient(to bottom,#f8f9fa 0%,#fff 100%); }
	@media(min-width:1024px){ .page-wrapper { flex-direction:row; align-items:flex-start; gap:3rem; } }

	/* INFO CARD */
	.info-card-wrapper { width:100%; }
	@media(min-width:1024px){ .info-card-wrapper { width:100%; max-width:400px; position:sticky; top:2rem; } }
	.info-card { background:white; border-radius:16px; overflow:hidden; box-shadow:0 4px 6px rgba(0,0,0,.07),0 10px 20px rgba(0,0,0,.05); transition:all .3s ease; }
	.info-card:hover { box-shadow:0 8px 12px rgba(0,0,0,.1),0 16px 32px rgba(0,0,0,.08); transform:translateY(-2px); }
	.card-header { background:linear-gradient(135deg,var(--color-blue-dark)0%,#1e3a5f 100%); padding:2rem; position:relative; overflow:hidden; }
	.card-header::before { content:''; position:absolute; top:-50%; right:-10%; width:150px; height:150px; background:rgba(255,255,255,.1); border-radius:50%; }
	.info-card h2 { color:white; font-size:1.5rem; font-weight:700; margin:0; position:relative; z-index:1; letter-spacing:.5px; }
	.info-section { padding:1.5rem 2rem; border-bottom:1px solid #f0f0f0; }
	.info-section:last-of-type { border-bottom:none; }
	.info-card h3 { color:var(--color-blue-dark); font-size:1.125rem; font-weight:600; margin:0 0 .75rem 0; }
	.info-card p { color:#4a5568; font-size:.9375rem; line-height:1.6; margin:0; }
	.info-card ul { list-style:none; padding:0; margin:0; }
	.info-card ul li { color:#4a5568; font-size:.9375rem; line-height:1.8; padding-left:1.25rem; position:relative; }
	.info-card ul li::before { content:"•"; position:absolute; left:0; color:var(--color-blue-dark); font-weight:bold; font-size:1.2rem; }
	.info-note { background:linear-gradient(135deg,#e7f3ff 0%,#f0f8ff 100%); border-left:4px solid var(--color-blue-dark); padding:1.25rem; margin:1.5rem; border-radius:8px; display:flex; gap:1rem; align-items:flex-start; box-shadow:0 2px 8px rgba(0,0,0,.05); }
	.info-note strong { color:var(--color-blue-dark); display:block; margin-bottom:.25rem; }
	.info-note div { color:#4a5568; font-size:.9375rem; line-height:1.6; }

	/* FORMULIER */
	.formulier-wrapper { width:100%; display:flex; flex-direction:column; gap:2rem; flex:1; }
	.contact-formulier { width:100%; background:white; border-radius:16px; padding:0; overflow:hidden; box-shadow:0 4px 6px rgba(0,0,0,.07),0 10px 20px rgba(0,0,0,.05); transition:all .3s ease; }
	.contact-formulier:hover { box-shadow:0 8px 12px rgba(0,0,0,.1),0 16px 32px rgba(0,0,0,.08); transform:translateY(-2px); }

	/* HEADER */
	.form-header { background:linear-gradient(135deg,var(--color-blue-dark)0%,#1e3a5f 100%); padding:2.5rem 2rem; position:relative; overflow:hidden; }
	.form-header::before { content:''; position:absolute; top:-50%; right:-10%; width:200px; height:200px; background:rgba(255,255,255,.1); border-radius:50%; }
	.header-accent { position:absolute; bottom:0; left:0; right:0; height:4px; background:linear-gradient(90deg,#4a90e2 0%,#67b8f7 100%); }
	.form-header h2 { color:white; font-size:1.75rem; font-weight:700; margin:0; position:relative; z-index:1; letter-spacing:.5px; }

	/* STATE BANNERS */
	.state-banner { display:flex; align-items:flex-start; gap:1rem; padding:1.25rem 1.5rem; margin:1.5rem; border-radius:12px; animation:bannerIn .4s ease-out forwards; position:relative; }
	.success-banner { background:#f0fdf4; border:2px solid #86efac; color:#166534; }
	.error-banner { background:#fff1f2; border:2px solid #fca5a5; color:#991b1b; }

	.state-icon-wrap { width:2.5rem; height:2.5rem; border-radius:50%; display:flex; align-items:center; justify-content:center; flex-shrink:0; }
	.state-icon-wrap svg { width:1.25rem; height:1.25rem; }
	.success-icon-wrap { background:#22c55e; color:white; animation:successPulse 1.5s ease-out 2; }
	.error-icon-wrap { background:#ef4444; color:white; }

	.state-text { flex:1; }
	.state-text strong { display:block; font-size:1rem; font-weight:700; margin-bottom:.25rem; }
	.state-text p { margin:0; font-size:.875rem; opacity:.85; }

	.dismiss-btn { background:none; border:none; cursor:pointer; color:inherit; opacity:.6; padding:.25rem; border-radius:4px; display:flex; align-items:center; transition:opacity .2s; }
	.dismiss-btn:hover { opacity:1; }
	.dismiss-btn svg { width:1rem; height:1rem; }

	/* SUCCESS BODY */
	.success-body { padding:1.5rem 2rem 2.5rem; display:flex; flex-direction:column; align-items:center; gap:2rem; }
	.success-checklist { display:flex; flex-direction:column; gap:.75rem; width:100%; max-width:360px; }
	.check-item { display:flex; align-items:center; gap:.75rem; font-size:.9375rem; color:#166534; font-weight:500; }
	.check-item svg { width:1.25rem; height:1.25rem; color:#22c55e; flex-shrink:0; }
	.check-item.pending { color:#64748b; }
	.check-item.pending svg { color:#94a3b8; }

	
	/* LOADING */
	.form-body { position:relative; }
	.form-loading { pointer-events:none; }
	.form-loading > *:not(.loading-overlay) { opacity:.35; filter:blur(1px); transition:all .3s ease; }
	.loading-overlay { position:absolute; inset:0; z-index:10; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:1rem; background:rgba(255,255,255,.75); backdrop-filter:blur(3px); }
	.loading-overlay p { font-size:.9375rem; font-weight:600; color:var(--color-blue-dark); margin:0; }
	.spinner { width:3rem; height:3rem; border:3px solid #e1e8ed; border-top-color:var(--color-blue-dark); border-radius:50%; animation:spin .8s linear infinite; }

	
	.btn-spinner { width:1.125rem; height:1.125rem; border:2px solid rgba(255,255,255,.4); border-top-color:white; border-radius:50%; animation:spin .7s linear infinite; display:inline-block; }

	/* FORM SECTIONS */
	.formulier-sectie { padding:2.5rem 2rem; display:grid; grid-template-columns:1fr; gap:1.5rem; background:#fafbfc; }
	@media(min-width:768px){ .formulier-sectie { grid-template-columns:1fr 1fr; } .full-width { grid-column:1/-1; } }
	.sectie-header { grid-column:1/-1; margin-bottom:1rem; }
	.sectie-header h3 { color:var(--color-blue-dark); font-size:1.25rem; font-weight:600; margin:0 0 .5rem 0; }
	.header-line { width:60px; height:3px; background:linear-gradient(90deg,var(--color-blue-dark)0%,#4a90e2 100%); border-radius:2px; }

	/* INPUTS */
	.input-wrapper { display:flex; flex-direction:column; gap:.5rem; }
	label p { color:var(--color-blue-dark); font-size:.875rem; font-weight:600; margin:0; transition:color .2s ease; }
	label p span { color:#dc3545; }
	input[type='text'],input[type='email'],input[type='tel'],textarea { padding:.875rem 1rem; border:2px solid #e1e8ed; border-radius:8px; font-size:.9375rem; background:white; transition:all .3s ease; font-family:inherit; box-shadow:0 1px 3px rgba(0,0,0,.05); }
	textarea { resize:vertical; min-height:140px; }
	input:hover,textarea:hover { border-color:#cbd5e0; }
	input:focus,textarea:focus { outline:none; border-color:var(--color-blue-dark); box-shadow:0 0 0 3px rgba(13,110,253,.1),0 2px 8px rgba(13,110,253,.15); transform:translateY(-1px); }
	input::placeholder,textarea::placeholder { color:#a0aec0; }
	input:focus::placeholder,textarea:focus::placeholder { opacity:.6; }
	input:disabled,textarea:disabled { background:#f1f5f9; cursor:not-allowed; opacity:.7; }
	.input-wrapper:focus-within p { color:#0056b3; }

	/* BUTTON WRAPPER */
	.button-wrapper { padding:2rem; background:white; display:flex; justify-content:center; }

	@media(prefers-reduced-motion:reduce){*,*::before,*::after{animation-duration:.01ms !important;animation-iteration-count:1 !important;transition-duration:.01ms !important;}}
	@media(max-width:768px){.form-header,.card-header{padding:2rem 1.5rem;} .form-header h2,.info-card h2{font-size:1.5rem;} .formulier-sectie{padding:2rem 1.5rem;} .info-section{padding:1.25rem 1.5rem;} .state-banner{margin:1rem;}}
</style>