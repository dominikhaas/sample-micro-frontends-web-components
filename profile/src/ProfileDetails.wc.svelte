<svelte:options tag="profile-details"/>
<script lang="ts">
    import {onMount} from "svelte";

    import Avatar from "./Avatar.svelte";
    import type {ProfileDetails} from "./ProfileDetails";

    export let profile: string;
    export let baseurl: string = "http://localhost:8080";

    let profileDetails: ProfileDetails;
    let error: string;

    function showOnMap() {
        this.dispatchEvent(new CustomEvent('map', {
            detail: profileDetails.address,
            bubbles: true,
            cancelable: true,
            composed: true // makes the event jump shadow DOM boundary
        }));
    }

    onMount(async () => {
        let url = baseurl + "/profile/" + profile  + "/profile.json";

        try {
            const result = await fetch(url);
            if(result.ok) {
                profileDetails = await result.json();
            } else {
                error = "Could not load profile details - status code: " + result.status
            }
        } catch (e) {
            error = "Could not load profile details - error message: " + e.message
        }
    });
</script>
<main>
    <div class="logo">
        <img alt="Svelte logo" class="logo" src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg">
    </div>
    <div class="profile">
        {#if profileDetails}
            <Avatar profileId={profile} baseUrl={baseurl} />
            <div class="details">
                <h1 class="name">{profileDetails?.name} {profileDetails?.surname}</h1>
                <span  class="title">{profileDetails?.title}</span>
                <hr>
                <span class="label">Site</span> <span>{profileDetails?.site}</span>
                <span class="label">Email</span> <span>{profileDetails?.email}</span>
                <span class="label">Phone</span> <span>{profileDetails?.phone}</span>
                <hr>
                <span class="label">Address</span> <span>{profileDetails?.address}</span>
                <a on:click={showOnMap}>Show on map</a>
            </div>


        {:else if error}
            <div class="error">
                <span>🛑</span>
                <span>{error}</span>
            </div>

        {:else}
            ... Loading
        {/if}
    </div>
</main>


<style>
    main {

    }

    .profile {
        display: grid;
        grid-template-columns: auto 1fr;
        border: #ff3e00 2px dashed;
        padding: 1em;
        margin: 0 auto;
        grid-gap: 2em;
    }
    .logo > img {
        position: absolute;
        width: 30px;
        height: 30px;
        top: 1em;
        right: 1em;
    }
    .logo {
        position: relative;
        width: 100%;
        height: 100%;
    }

    .details {
        display: grid;
        grid-template-columns: auto 1fr;
        grid-gap: 0.6em;
    }

    .name {
        grid-column: span 2;

        margin-top: 0.2em;
        margin-bottom: 0;

        line-height: 1em;
        padding: 0;

    }
    .title {
        grid-column: span 2;
        color: #237a94;

    }

    .error > * {
        color: red;
        font-weight: bold;
        padding: 0.3em;
    }

    .label {
        font-weight: bold;
    }

    a {
        grid-column: span 2;
        color: blue;
        text-decoration: underline;
        cursor: pointer;
    }

    hr {
        grid-column: span 2;
        width: 100%;
        border: 0;
    }


</style>