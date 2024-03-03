<script lang="ts">
	import AboutService from '../../../services/AboutService';
	import type AboutModel from '../../../models/AboutModel';
	import AboutList from '../../commons/lists/AboutList.svelte';

	const abouts: AboutModel[] = AboutService.convertAboutDataToAboutModel();
</script>

<section
	id="about"
	class="py-20 pt-10 lg:pt-16 lg:py-32 flex flex-col gap-16 sm:gap-20 md:gap-24 relative"
>
	<div
		class="flex flex-col gap-2 text-center relative
        before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-violet-700
        after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-violet-700 py-4"
	>
		<h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl py">
			<span class="poppins text-violet-400">ABOUT</span> ME
		</h3>
	</div>
	<div class="flex flex-col gap-20 w-full mx-auto max-w-[800px]">
		{#each abouts as about}
			<AboutList {about} />
		{/each}
	</div>
</section>
