<script lang="ts">
	export let profileId: string;
	export let baseUrl: string;


</script>

<main>
	<img src={baseUrl + "/" + profileId + "/photo.png"}>
</main>

<style>

</style>