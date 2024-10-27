<script lang="ts">
	import type ProjectModel from "../../../models/ProjectModel";
	import ProjectService from "../../../services/ProjectService";
	import ProjectList from "../../commons/lists/ProjectList.svelte";

	const projects: ProjectModel[] = ProjectService.convertProjectDataToAboutModel();
</script>
<section id="projects" class="lg:py-32 flex flex-col gap-24 mt-32">
	<div class="flex flex-col gap-2 text-center">
		<div class="flex flex-col gap-2 text-center relative
			before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-violet-700
			after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-violet-700 py-4"
		>
		<h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl pb-4">
			MY <span class="poppins text-violet-400">PROJECTS</span>
		</h3>
	</div>
	<div class="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10 mt-10">
		{#each projects as project}
			<ProjectList {project}>
				<p>
					{@html project.getDescription()}
				</p>
			</ProjectList>
		{/each}
	</div>
</section>
