<script lang="ts">
	import type AboutModel from "../../../models/AboutModel";

 
    export let about: AboutModel;
</script>

<div class="flex gap-6 sm:gap-8">
    <p class="poppins text-4xl sm:text-5xl md:text-6xl text-slate-500 font-semibold self-center">
        0{about.getId()}
    </p>
    <div class="flex flex-col gap-6 sm:gap-8">
        <h3 class="text-2xl sm:text-3xl md:text-5xl">{about.getTitle()}</h3>
        <p>{about.getDescription()}</p>
    </div>
</div>