<svelte:options tag="profile-details"></svelte:options>
<script lang="ts">
    import Avatar from "./Avatar.svelte";

    export let profile: string;
    export let baseurl: string = "http://localhost:8080";

</script>

<main>
    <h1>Profile of</h1>
    <Avatar profileId={profile} baseUrl={baseurl} ></Avatar>
    Id: {profile}
</main>

<style>
    main {
        text-align: center;
        padding: 1em;
        max-width: 240px;
        margin: 0 auto;
    }

    h1 {
        color: #ff3e00;
        text-transform: uppercase;
        font-size: 4em;
        font-weight: 100;
    }

    @media (min-width: 640px) {
        main {
            max-width: none;
        }
    }
</style>