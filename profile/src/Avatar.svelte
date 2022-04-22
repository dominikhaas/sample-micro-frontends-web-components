<script lang="ts">
	import {onMount} from "svelte";

	export let profileId: string;
	export let baseUrl: string;

	onMount(() => {
		console.log("on mount")
		console.log("profile id: " + profileId)
	})

</script>

<main>
	<img src={baseUrl + "/profile/" + profileId + "/photo.png"}>
</main>

<style>

</style>