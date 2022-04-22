<svelte:options tag="profile-details"></svelte:options>
<script lang="ts">
    import Avatar from "./Avatar.svelte";
    import {onMount} from "svelte";

    import type {ProfileDetails} from "./ProfileDetails";

    export let profile: string;
    export let baseurl: string = "http://localhost:8080";


    let profileDetails: ProfileDetails;


    onMount(async () => {
        let url = baseurl + "/profile/" + profile  + "/profile.json";
        const result = await fetch(url);

        profileDetails = await result.json();
    });
</script>

<main>


    <Avatar profileId={profile} baseUrl={baseurl} ></Avatar>
    <h1>{profileDetails?.name} {profileDetails?.surname}</h1>


</main>

<style>
    main {
        padding: 1em;
        margin: 0 auto;
    }

    h1 {
        font-weight: 100;
    }

    main {
        display: grid;
        grid-template-columns: auto 1fr;

    }

</style>