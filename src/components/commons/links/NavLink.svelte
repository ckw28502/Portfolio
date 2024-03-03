<script lang="ts">
	import TabModel from "../../../models/TabModel";

    export let tab: TabModel;
</script>

<a href={tab.getUrl()} class="duration-200 hover:text-violet-400">
    <p>{tab.getName()}</p>
</a>