<script lang="ts">
	import type ProjectModel from "../../../models/ProjectModel";
	import ProjectLink from "../links/ProjectLink.svelte";

    export let project: ProjectModel;
</script>
<div class="p-4 sm:p-6 md:p-8 flex flex-col gap-4 rounded-lg border border-solid border-violet-700 text-center group hover:border-violet-400 duration-200">
    <div class="bg-slate-950 grid place-items-center px-4 text-5xl md:text:6xl -mt-10 sm:-mt-12 md:-mt-14 lg:-mt-16 mx-auto duration-200">
        <i class={project.getIcon()}></i>
    </div>
    <h3 class="font-medium text-xl sm:text-2xl md:text-3xl">{project.getTitle()}</h3>
    <slot />
    {#if project.checkLinkAmount() < 1}
         <ProjectLink message="ONGOING PROJECT" link="" />
    {:else if  project.checkLinkAmount() < 2}
        <ProjectLink message="GITHUB LINK &rarr;" link={project.getLink()} />
    {:else}
        <div>
            <ProjectLink message="API GITHUB LINK &rarr;" link={project.getLink1()} />
            <ProjectLink message="FRONTEND GITHUB LINK &rarr;" link={project.getLink2()} />
        </div>
    {/if}
</div>