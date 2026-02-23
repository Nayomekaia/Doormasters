<script>
	import { Hero, Button } from '$lib';
	import Contact from '$lib/components/ContactCart.svelte';
	import { onMount } from 'svelte';
	import { enhance } from '$app/forms';

	let selectedDeur = '';
	let isVisible = false;
	let formState = 'idle'; // 'idle' | 'loading' | 'success' | 'error'
	let errorMessage = 'Er is iets misgegaan. Probeer het opnieuw.';

	const deurOpties = ['Sectionaal Deur', 'Roldeur', 'Openslaande Deur', 'Industriële Deur'];

	onMount(() => {
		setTimeout(() => { isVisible = true; }, 100);
	});

	function handleEnhance() {
		formState = 'loading';
		errorMessage = '';

		return async ({ result, update }) => {
			if (result.type === 'success') {
				formState = 'success';
				document.querySelector('.offerte-formulier')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
		selectedDeur = '';
	}
</script>

<svelte:head>
	<title>Offerte | Doormasters</title>
</svelte:head>

<Hero
	title="OFFERTES AANVRAGEN"
	description="Vraag eenvoudig en vrijblijvend een offerte aan. Vul het formulier in met je wensen en afmetingen, dan nemen wij zo snel mogelijk contact met je op met een passend voorstel."
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
	<section class="contact-wrapper animate-slide-left">
		<Contact />
	</section>

	<section class="formulier-wrapper animate-slide-right">
		<form method="POST" class="offerte-formulier" use:enhance={handleEnhance}>

			<div class="form-header">
				<h2>OFFERTE FORMULIER</h2>
				<div class="header-accent"></div>
			</div>

			<!-- SUCCESS STATE -->
			{#if formState === 'success'}
				<div class="state-banner success-banner" role="alert" aria-live="polite">
					<div class="state-icon-wrap success-icon-wrap">
						<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" width="0.875rem" height="0.875rem">
							<circle cx="12" cy="12" r="10"/>
							<path d="M8 12l3 3 5-5"/>
						</svg>
					</div>
					<div class="state-text">
						<strong>Aanvraag verstuurd!</strong>
						<p>Bedankt voor je aanvraag. We nemen binnen 1-2 werkdagen contact met je op.</p>
					</div>
				</div>

				<div class="success-body">
					<div class="success-checklist">
						<div class="check-item">
							<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" width="0.875rem" height="0.875rem"><polyline points="20 6 9 17 4 12"/></svg>
							<span>Aanvraag ontvangen</span>
						</div>
						<div class="check-item">
							<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" width="0.875rem" height="0.875rem"><polyline points="20 6 9 17 4 12"/></svg>
							<span>Bevestigingsmail onderweg</span>
						</div>
						<div class="check-item pending">
							<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="0.875rem" height="0.875rem"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
							<span>We nemen binnen 1-2 werkdagen contact op</span>
						</div>
					</div>
					<Button variant="silver" type="button" class="new-form-btn" on:click={resetForm}>
						Nieuwe aanvraag indienen
					</Button>
				</div>
			{/if}

			<!-- ERROR STATE -->
			{#if formState === 'error'}
				<div class="state-banner error-banner" role="alert" aria-live="assertive">
					<div class="state-icon-wrap error-icon-wrap">
						<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" width="0.875rem" height="0.875rem">
							<circle cx="12" cy="12" r="10"/>
							<line x1="12" y1="8" x2="12" y2="12"/>
							<line x1="12" y1="16" x2="12.01" y2="16"/>
						</svg>
					</div>
					<div class="state-text">
						<strong>Versturen mislukt</strong>
						<p>{errorMessage}</p>
					</div>
					<button type="button" class="dismiss-btn" on:click={() => formState = 'idle'} aria-label="Sluiten">
						<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" width="0.75rem" height="0.75rem">
							<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
						</svg>
					</button>
				</div>
			{/if}

			<!-- FORM FIELDS -->
			{#if formState !== 'success'}
				<div class="form-body" class:form-loading={formState === 'loading'}>

					{#if formState === 'loading'}
						<div class="loading-overlay" aria-hidden="true">
							<div class="spinner"></div>
							<p>Aanvraag wordt verstuurd...</p>
						</div>
					{/if}

					<!-- PERSOONLIJKE GEGEVENS -->
					<section class="formulier-sectie animate-fade-in" style="animation-delay: 0.2s;">
						<div class="sectie-header">
							<h3>Persoonlijke gegevens</h3>
							<div class="header-line"></div>
						</div>
						<label class="input-wrapper">
							<p>Naam<span>*</span></p>
							<input type="text" name="naam" placeholder="Bijv. Jan" required disabled={formState === 'loading'} />
						</label>
						<label class="input-wrapper">
							<p>Achternaam<span>*</span></p>
							<input type="text" name="achternaam" placeholder="Bijv. van Huizen" required disabled={formState === 'loading'} />
						</label>
						<label class="input-wrapper">
							<p>Adres<span>*</span></p>
							<input type="text" name="adres" placeholder="Bijv. Kerkstraat 80" required disabled={formState === 'loading'} />
						</label>
						<label class="input-wrapper">
							<p>Adres regel 2</p>
							<input type="text" name="adres2" placeholder="" disabled={formState === 'loading'} />
						</label>
						<label class="input-wrapper">
							<p>Plaats<span>*</span></p>
							<input type="text" name="plaats" placeholder="Bijv. Alkmaar" required disabled={formState === 'loading'} />
						</label>
						<label class="input-wrapper">
							<p>Staat/Regio/Provincie<span>*</span></p>
							<input type="text" name="staat" placeholder="Bijv. Noord-Holland" required disabled={formState === 'loading'} />
						</label>
						<label class="input-wrapper">
							<p>Postcode<span>*</span></p>
							<input type="text" name="postcode" placeholder="Bijv. 1111AA" required disabled={formState === 'loading'} />
						</label>
						<label class="input-wrapper">
							<p>Land<span>*</span></p>
							<input type="text" name="land" placeholder="Nederland" required disabled={formState === 'loading'} />
						</label>
						<label class="input-wrapper">
							<p>Telefoonnummer<span>*</span></p>
							<input type="tel" name="telefoon" placeholder="Bijv. 0628763549" required disabled={formState === 'loading'} />
						</label>
						<label class="input-wrapper">
							<p>E-mailadres<span>*</span></p>
							<input type="email" name="email" placeholder="Bijv. janvanhuizen@gmail.com" required pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$" disabled={formState === 'loading'} />
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
									<label class="radio-label" style="animation-delay: {0.5 + index * 0.1}s;" class:disabled={formState === 'loading'}>
										<input type="radio" name="soortDeur" value={optie} bind:group={selectedDeur} required disabled={formState === 'loading'} />
										<span class="radio-text">{optie}</span>
									</label>
								{/each}
							</div>
						</fieldset>

						<div class="button-wrapper animate-fade-in" style="animation-delay: 0.9s;">
							<Button variant="silver" type="submit" class="submit-btn" disabled={formState === 'loading'} aria-busy={formState === 'loading'}>
								{#if formState === 'loading'}
									<span class="btn-spinner" aria-hidden="true"></span>
									Versturen...
								{:else}
									VERSTUREN
								{/if}
							</Button>
						</div>
					</section>

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

	.animate-slide-left, .animate-slide-right, .animate-fade-in, .radio-label { opacity:0; }
	.visible .animate-slide-left { animation: slideLeft 0.6s ease-out forwards; }
	.visible .animate-slide-right { animation: slideRight 0.6s ease-out forwards; }
	.visible .animate-fade-in { animation: fadeIn 0.6s ease-out forwards; }
	.visible .radio-label { animation: fadeIn 0.4s ease-out forwards; }

	/* PAGINA LAYOUT */
	.page-wrapper { display:flex; flex-direction:column; gap:2rem; padding:2rem; max-width:1400px; margin:0 auto; background:linear-gradient(to bottom,#f8f9fa 0%,#fff 100%); }
	@media(min-width:1024px){ .page-wrapper { flex-direction:row; align-items:flex-start; gap:3rem; } }
	.contact-wrapper { width:100%; }
	@media(min-width:1024px){ .contact-wrapper { width:100%; max-width:400px; position:sticky; top:2rem; } }
	.formulier-wrapper { width:100%; display:flex; justify-content:center; flex:1; }
	.offerte-formulier { width:100%; max-width:800px; background:white; border-radius:16px; padding:0; box-shadow:0 4px 6px rgba(0,0,0,.07),0 10px 20px rgba(0,0,0,.05); overflow:hidden; transition:all 0.3s ease; }
	.offerte-formulier:hover { box-shadow:0 8px 12px rgba(0,0,0,.1),0 16px 32px rgba(0,0,0,.08); transform:translateY(-2px); }

	/* HEADER */
	.form-header { background:linear-gradient(135deg,var(--color-blue-dark)0%,#1e3a5f 100%); padding:2.5rem 2rem; position:relative; overflow:hidden; }
	.form-header::before { content:''; position:absolute; top:-50%; right:-10%; width:200px; height:200px; background:rgba(255,255,255,.1); border-radius:50%; }
	.header-accent { position:absolute; bottom:0; left:0; right:0; height:4px; background:linear-gradient(90deg,#4a90e2 0%,#67b8f7 100%); }
	h2 { color:white; font-size:1.75rem; font-weight:700; margin:0; position:relative; z-index:1; letter-spacing:.5px; }

	/* STATE BANNERS */
	.state-banner {
		display: flex;
		align-items: flex-start;
		gap: 1rem;
		padding: 1.25rem 1.5rem;
		margin: 1.5rem;
		border-radius: 12px;
		animation: bannerIn 0.4s ease-out forwards;
		position: relative;
	}
	.success-banner { background:#f0fdf4; border:2px solid #86efac; color:#166534; }
	.error-banner { background:#fff1f2; border:2px solid #fca5a5; color:#991b1b; }

	.state-icon-wrap {
		width:2.5rem; height:2.5rem; border-radius:50%;
		display:flex; align-items:center; justify-content:center; flex-shrink:0;
	}
	.state-icon-wrap svg { width:1.25rem; height:1.25rem; }
	.success-icon-wrap { background:#22c55e; color:white; animation: successPulse 1.5s ease-out 2; }
	.error-icon-wrap { background:#ef4444; color:white; }

	.state-text { flex:1; }
	.state-text strong { display:block; font-size:1rem; font-weight:700; margin-bottom:.25rem; }
	.state-text p { margin:0; font-size:.875rem; opacity:.85; }

	.dismiss-btn {
		background:none; border:none; cursor:pointer; color:inherit; opacity:.6;
		padding:.25rem; border-radius:4px; display:flex; align-items:center; transition:opacity .2s;
	}
	.dismiss-btn:hover { opacity:1; }
	.dismiss-btn svg { width:1rem; height:1rem; }

	/* SUCCESS BODY */
	.success-body {
		padding:1.5rem 2rem 2.5rem;
		display:flex; flex-direction:column; align-items:center; gap:2rem;
	}
	.success-checklist { display:flex; flex-direction:column; gap:.75rem; width:100%; max-width:360px; }
	.check-item { display:flex; align-items:center; gap:.75rem; font-size:.9375rem; color:#166534; font-weight:500; }
	.check-item svg { width:1.25rem; height:1.25rem; color:#22c55e; flex-shrink:0; }
	.check-item.pending { color:#64748b; }
	.check-item.pending svg { color:#94a3b8; }

	.new-form-btn {
		display:flex; align-items:center; gap:.5rem;
		background:white; border:2px solid var(--color-blue-dark); color:var(--color-blue-dark);
		padding:.75rem 1.75rem; border-radius:8px; font-size:.1rem; font-weight:600;
		cursor:pointer; transition:all .2s ease;
	}
	.new-form-btn svg { width:0.5rem; height:1rem; }
	.new-form-btn:hover { background:var(--color-blue-dark); color:white; transform:translateY(-2px); box-shadow:0 4px 12px rgba(0,0,0,.15); }

	/* LOADING */
	.form-body { position:relative; }
	.form-loading { pointer-events:none; }
	.form-loading > *:not(.loading-overlay) { opacity:.35; filter:blur(1px); transition:all .3s ease; }

	.loading-overlay {
		position:absolute; inset:0; z-index:10;
		display:flex; flex-direction:column; align-items:center; justify-content:center; gap:1rem;
		background:rgba(255,255,255,.75); backdrop-filter:blur(3px);
	}
	.loading-overlay p { font-size:.9375rem; font-weight:600; color:var(--color-blue-dark); margin:0; }

	.spinner {
		width:3rem; height:3rem;
		border:3px solid #e1e8ed; border-top-color:var(--color-blue-dark);
		border-radius:50%; animation:spin .8s linear infinite;
	}

	/* SUBMIT BUTTON */
	.submit-btn {
		display:flex; align-items:center; justify-content:center; gap:.625rem;
		background:linear-gradient(135deg,var(--color-blue-dark)0%,#1e3a5f 100%);
		color:white; border:none; padding:1rem 3rem; border-radius:8px;
		font-size:1rem; font-weight:700; letter-spacing:.5px; cursor:pointer;
		transition:all .3s ease; box-shadow:0 4px 12px rgba(0,0,0,.2); min-width:200px;
	}
	.submit-btn svg { width:1.125rem; height:1.125rem; }
	.submit-btn:hover:not(:disabled) { transform:translateY(-3px); box-shadow:0 8px 20px rgba(0,0,0,.25); }
	.submit-btn:disabled { cursor:not-allowed; opacity:.75; }

	.btn-spinner {
		width:1.125rem; height:1.125rem;
		border:2px solid rgba(255,255,255,.4); border-top-color:white;
		border-radius:50%; animation:spin .7s linear infinite; display:inline-block;
	}

	/* SECTIONS */
	.sectie-header { grid-column:1/-1; margin-bottom:1.5rem; }
	.sectie-header h3 { color:var(--color-blue-dark); font-size:1.25rem; font-weight:600; margin:0 0 .5rem 0; }
	.header-line { width:60px; height:3px; background:linear-gradient(90deg,var(--color-blue-dark)0%,#4a90e2 100%); border-radius:2px; }
	.formulier-sectie { padding:2.5rem 2rem; display:grid; grid-template-columns:1fr; gap:1.5rem; background:#fafbfc; border-bottom:1px solid #e9ecef; }
	.formulier-sectie-full { padding:2.5rem 2rem; display:flex; flex-direction:column; gap:2rem; }
	@media(min-width:768px){ .formulier-sectie { grid-template-columns:1fr 1fr; } }

	/* INPUTS */
	.input-wrapper { display:flex; flex-direction:column; gap:.5rem; }
	label p { color:var(--color-blue-dark); font-size:.875rem; font-weight:600; margin:0; transition:color .2s ease; }
	label p span { color:#dc3545; }
	input[type='text'],input[type='email'],input[type='tel']{padding:.875rem 1rem;border:2px solid #e1e8ed;border-radius:8px;background:white;transition:all .3s ease;font-size:.9375rem;box-shadow:0 1px 3px rgba(0,0,0,.05);}
	input[type='text']:hover,input[type='email']:hover,input[type='tel']:hover{border-color:#cbd5e0;}
	input[type='text']:focus,input[type='email']:focus,input[type='tel']:focus{outline:none;border-color:var(--color-blue-dark);box-shadow:0 0 0 3px rgba(13,110,253,.1),0 2px 8px rgba(13,110,253,.15);transform:translateY(-1px);}
	input::placeholder{color:#a0aec0;}
	input:focus::placeholder{opacity:.6;}
	input:disabled { background:#f1f5f9; cursor:not-allowed; opacity:.7; }
	.input-wrapper:focus-within p{color:#0056b3;}

	/* RADIO */
	.radio-group{border:none;padding:0;margin:0;}
	legend{color:var(--color-blue-dark);font-size:.875rem;font-weight:600;padding:0;margin-bottom:.5rem;}
	legend span{color:#dc3545;}
	.help-text{color:#64748b;font-size:.875rem;margin:0 0 1rem 0;}
	.radio-options{display:flex;flex-direction:column;gap:.75rem;}
	.radio-label{position:relative;display:flex;align-items:center;gap:.75rem;cursor:pointer;padding:1rem 1.25rem;border-radius:10px;border:2px solid #e1e8ed;background:white;transition:all .3s ease;}
	.radio-label:hover:not(.disabled){border-color:var(--color-blue-dark);background:#f8fafc;box-shadow:0 2px 8px rgba(0,0,0,.08);transform:translateX(4px);}
	.radio-label.disabled{cursor:not-allowed;opacity:.6;}
	.radio-label input[type='radio']{width:1.25rem;height:1.25rem;accent-color:var(--color-blue-dark);cursor:pointer;flex-shrink:0;}
	.radio-label input[type='radio']:checked ~ .radio-text{color:var(--color-blue-dark);font-weight:600;}
	.radio-text{color:var(--color-blue-dark);font-size:.9375rem;transition:all .2s ease;flex:1;}

	.button-wrapper{display:flex;justify-content:center;margin-top:1rem;width:100%;}

	@media(prefers-reduced-motion:reduce){*,*::before,*::after{animation-duration:.01ms !important;animation-iteration-count:1 !important;transition-duration:.01ms !important;}}
	@media(max-width:768px){.form-header{padding:2rem 1.5rem;} h2{font-size:1.5rem;} .formulier-sectie,.formulier-sectie-full{padding:2rem 1.5rem;} .state-banner{margin:1rem;}}
</style>