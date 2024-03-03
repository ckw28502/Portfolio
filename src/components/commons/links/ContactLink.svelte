<script lang="ts">
	import type ContactModel from "../../../models/ContactModel";

    export let contact: ContactModel;

</script>

<a href={contact.getUrl()} target="_blank" class="w-1/4 p-4 flex items-center justify-center ">
    <i class="fab text-3xl mr-2 fa-{contact.getName()}" />
</a>