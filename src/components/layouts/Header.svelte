<script lang="ts">
	import NavLink from './../commons/links/NavLink.svelte';
	import type TabModel from '../../models/TabModel';
	import TabService from '../../services/TabService';

	export let isTop: boolean;

	//Get the tabs list
	const tabs: TabModel[] = TabService.createTabObjectsFromJson();

	const headerClasses = isTop
		? 'py-6 bg-transparent border-transparent'
		: 'py-4 bg-slate-950 border-violet-950';
</script>

<header
	class={'sticky z-[10] top-10 duration-200 px-6 flex items-center justify-between border-solid bg-opacity-5 ' +
		headerClasses}
>
	<h1 class="font-medium">
		<strong class="font-bold poppins">Calvin</strong> Kwan
	</h1>
	<div class="sm:flex items-center gap-4 hidden">
		{#each tabs as tab}
			<NavLink {tab} />
		{/each}
		<a
			href="mailto:ckw28502@gmail.com"
			target="_blank"
			class="blue-shadow relative overflow-hidden px-5 py-2 group rounded-full bg-white text-slate-950"
		>
			<div
				class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20
                group-hover:translate-x-full z-0 duration-200"
			/>

			<h2 class="relative z-9">Contact me</h2>
		</a>
	</div>
</header>
