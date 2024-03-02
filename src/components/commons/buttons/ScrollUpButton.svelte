<script lang="ts">

    export let scrollYValue: number;

    // classes which values depend on scroll Y value
    let divClasses: String = "pointer-events-none opacity-0"

    
    $: if (scrollYValue < 0) {
        divClasses = "opacity-full pointer-events-auto"
    }

    // Method to scroll to the top of the page
    function goTop() {
        document.body.scrollIntoView()
    }

</script>

<div class={"fixed bottom-0 w-full duration-200 flex p-10 z-[10] " + divClasses}>
    <button on:click={goTop}>
        <i class="fa-solid fa-arrow-up" />
    </button>
</div>