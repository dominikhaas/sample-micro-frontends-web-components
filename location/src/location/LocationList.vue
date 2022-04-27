<script setup lang="ts">
import { locationStore } from "@/location/locationStore";
import { computed, onMounted } from "vue";
import type { LocationDto } from "@/location/LocationService";

const store = locationStore();
const locations = computed(() => store.locations);

const props = defineProps({baseUrl: String});
onMounted(() => {
  store.loadLocations(props.baseUrl);
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
