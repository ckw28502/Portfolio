<script lang="ts">
	import '../app.css';
	import '@fortawesome/fontawesome-free/css/all.min.css';

	//components
	import Header from '../components/layouts/Header.svelte';
	import Footer from '../components/layouts/Footer.svelte';
	import ScrollUpButton from '../components/commons/buttons/ScrollUpButton.svelte';

	let y: number;
	let innerHeight: number = 0;
	let innerWidth: number = 0;

	$: isTop = y <= 0;
</script>

<div class="relative flex flex-col max-w-[1400px] mx-auto w-full text-sm sm:text-base min-h-screen">
	<ScrollUpButton {isTop} />
	<Header {isTop} />
	<slot />
	<Footer />
</div>

<svelte:window bind:scrollY={y} bind:innerHeight bind:innerWidth />
