<script setup lang="ts">
import { locationStore } from "@/location/locationStore";
import { computed, onMounted } from "vue";
import type { LocationDto } from "@/location/LocationService";

const store = locationStore();
const locations = computed(() => store.locations);

onMounted(() => {
  store.loadLocations();
});

function showLocation(location: LocationDto) {
  store.selectLocation(location);
}
</script>

<template>
  <div>

      <ul
        v-for="location in locations"
        v-bind:key="location"
        @click="showLocation(location)"
      >
        {{ location.title }}
      </ul>
  </div>
</template>
