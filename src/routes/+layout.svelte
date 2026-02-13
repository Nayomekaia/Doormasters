<script>
	import favicon from '$lib/assets/favicon.svg';
	import Topnav from '$lib/organisms/Top-nav.svelte';
	import Bottemnav from '$lib/organisms/Bottom-nav.svelte';
	import Footer from '$lib/organisms/Footer.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<header>
	<Topnav />
	<Bottemnav />
</header>
 
<main>
	{@render children()}
</main>

<Footer />

<style>
	:global(html, body) {
		margin: 0;
		padding: 0;
		width: 100%;
		overflow-x: hidden; /* voorkomt horizontaal scrollen */
		scroll-behavior: smooth;
	}

	:global(*) {
		box-sizing: border-box;
	}

	main {
		width: 100%;
	}
</style>
