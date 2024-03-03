<script lang="ts">
	import type ContactModel from '../../models/ContactModel';
	import ContactService from '../../services/ContactService';
	import ContactLink from '../commons/links/ContactLink.svelte';

	const contacts: ContactModel[] = ContactService.convertContactDataToContactModel();
</script>

<footer
	class="py-10 sm:py-6 bg-black border-t border-solid border-violet-500 flex flex-col gap-4 sm:gap-8 justify-center items-center"
>
	<p class="px-4 py-2 bg-white text-slate-950 font-medium">Contact me! &darr;</p>
	<div class="flex gap-4 items-center justify-center">
		{#each contacts as contact}
			<ContactLink {contact} />
		{/each}
	</div>
</footer>
