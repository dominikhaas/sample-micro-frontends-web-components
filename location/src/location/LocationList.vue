<script setup lang="ts">
import { locationStore } from "@/location/locationStore";
import { computed, onMounted } from "vue";
import type { LocationDto } from "@/location/LocationService";

const store = locationStore();
const locations = computed(() => store.locations);

const props = defineProps({ baseUrl: String });
onMounted(() => {
  store.loadLocations(props.baseUrl);
});

function showLocation(location: LocationDto) {
  store.selectLocation(location);
}
</script>

<template>
  <div>
    <h3>Locations</h3>
    <ul class="location-entry"
      v-for="location in locations"
      v-bind:key="location"
      @click="showLocation(location)"
    >
      > {{location.title}} ({{location.city}})
    </ul>
  </div>
</template>
