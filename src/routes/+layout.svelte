<script>
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<header>
</header>
<main>
{@render children()}
</main>

<style>
 :global(*) {
    padding: 0;
    scroll-behavior: smooth;
  }


</style>