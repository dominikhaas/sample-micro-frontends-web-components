<svelte:options tag="profile-details"></svelte:options>
<script lang="ts">
    import Avatar from "./Avatar.svelte";
    import {onMount} from "svelte";
    import ProfileDetails2 from "./ProfileDetails2.svelte";

    export let profile: string;
    export let baseurl: string = "http://localhost:8080";

    async function loadData() {
        console.log("profile-details - loading data for profile: " + profile);

        let url = baseurl + "/profile/" + profile  + "/profile.json";
        console.log("Fetching from " + url);
        const result = await fetch(url);

        console.log(result);

        profileDetails = await result.json();
        console.log(profileDetails)

        console.log(profileDetails.userName)

        return profileDetails;
    }

    interface ProfileDetails {
        userName: string;
    }
    let profileDetails: ProfileDetails;

    let loading:Promise<ProfileDetails>;

    onMount(async () => {
        loading = loadData();
    });
</script>

<main>
    <h1>Profile of</h1>
    <Avatar profileId={profile} baseUrl={baseurl} ></Avatar>
    Id: {profile}

    {#await loading}
        ...waiting
    {:then profileDatailsHere}
        Done
        Username: {JSON.stringify(profileDatailsHere) + profileDatailsHere?.userName}
    {/await}
</main>

<style>
    main {
        text-align: center;
        padding: 1em;
        margin: 0 auto;
    }

    h1 {
        color: #ff3e00;
        text-transform: uppercase;
        font-size: 4em;
        font-weight: 100;
    }

</style>