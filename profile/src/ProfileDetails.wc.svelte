<svelte:options tag="profile-details"></svelte:options>
<script lang="ts">
    import Avatar from "./Avatar.svelte";
</script>

<main>
    <h1>Profile of</h1>
    <Avatar profileId="1337" baseUrl="http://localhost:8080" ></Avatar>
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