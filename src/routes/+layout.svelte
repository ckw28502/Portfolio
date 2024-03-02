<script lang="ts">
    import "../app.css";
    
    //components
    import Header from "../components/layouts/Header.svelte";
    import Footer from "../components/layouts/Footer.svelte";
	import ScrollUpButton from "../components/commons/buttons/ScrollUpButton.svelte";

    let scrollYValue: number;
    let innerHeight: number = 0;
    let innerWidth: number = 0;

</script>

<div class="relative flex flex-col max-w-[1400px] mx-auto w-full text-sm sm:text-base min-h-screen">
    <ScrollUpButton scrollYValue={scrollYValue}/>
    <Header />
    <slot />
    <Footer />
</div>

<svelte:window bind:scrollY={scrollYValue} bind:innerHeight bind:innerWidth />