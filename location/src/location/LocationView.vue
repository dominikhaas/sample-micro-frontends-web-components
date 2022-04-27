<script setup lang="ts">
import LocationList from "@/location/LocationList.vue";
import LocationForm from "@/location/LocationForm.vue";

const props = defineProps({ baseUrl: String });
</script>

<template>
  <div class="locations-view">
    <h1>Locations</h1>
    <LocationList v-bind:baseUrl="props.baseUrl"></LocationList>
    <LocationForm></LocationForm>
  </div>
</template>

<style>
.locations-view {
  display: grid;
  grid-template-areas:
    "header header"
    "list form";
  grid-template-columns: auto 1fr;
  grid-column-gap: 2em;
}

.locations-view > h1 {
  grid-area: header;
}

location-list {
  grid-area: list;
}

location-form {
  grid-area: form;
}
</style>
