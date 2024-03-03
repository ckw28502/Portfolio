<script lang="ts">
	import Profile from '../../commons/image/Profile.svelte';
</script>

<section id="intro" class="grid grid-cols-1 lg:grid-cols-2 gap-10 py-8 sm:py-14">
	<div class="flex flex-col lg:justify-center text-center lg:text-left gap-6 md:gap-8 lg:gap-10">
		<h2 class="font-semibold text-4xl sm:text:5xl md:text-6xl">
			<span class="poppins text-violet-400">Calvin</span> Kwan
			<br />
			Full Stack <span class="poppins text-violet-400">Developer</span>
		</h2>
		<p class="text-base sm:text-lg md:text-xl">
			I am more <span class="text-violet-400">focused</span> on backend development using
			Python(Flask) and Java(Spring Boot). I also have some
			<span class="text-violet-400">experiences</span> in PHP (Laravel).
		</p>
		<a
			href="mailto:ckw28502@gmail.com"
			target="_blank"
			class="blue-shadow mx-auto lg:mr-auto text-base sm:text-lg md:text-xl
            poppins relative overflow-hidden px-6 py-3 group rounded-full bg-white text-slate-950"
		>
			<div
				class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20
                group-hover:translate-x-full z-0 duration-200"
			/>

			<h3 class="relative z-9">Contact me &rarr;</h3>
		</a>
	</div>
	<Profile />
</section>
