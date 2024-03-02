<script lang="ts">

    export let isTop: boolean;

    $: divClasses = isTop ? "opacity-full pointer-events-auto" : "pointer-events-none opacity-0"

    // Method to scroll to the top of the page
    function goTop() {
        document.body.scrollIntoView()
    }

</script>

<div class={"fixed bottom-0 w-full duration-200 flex p-10 z-[10] " + divClasses}>
    <button on:click={goTop} class="ml-auto rounded-full bg-slate-900 text-violet-400 px-3
     sm:px-4 hover:bg-slate-800 cursor-pointer">
        <i class="fa-solid fa-arrow-up grid place-items-center aspect-square" />
    </button>
</div>