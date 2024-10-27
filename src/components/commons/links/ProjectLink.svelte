<script lang="ts">
    export let link;
    export let message;
</script>
<a href={link} target="_blank" class="mt-auto">
    <div class="flex-1 flex justify-between gap-4 items-center">
        <div class="ml-auto cursor-pointer hover:text-slate-950 duration-200 relative after:absolute after:top-0 after:h-full after:right-full after:w-full after:bg-white after:duration-200 hover:after:translate-x-full after:z-[-1] overflow-hidden">
            <p class="relative z-4">{message} </p>
        </div>
    </div>
</a>