<script setup lang="ts">
import { locationStore } from "@/location/locationStore";
import { computed } from "vue";

const store = locationStore();

const currentLocation = computed(() => {
  return store.currentLocation;
});
</script>

<template>
  <div>
    <div v-if="currentLocation">
      <h1>{{ currentLocation?.title }}</h1>
    </div>
    <div v-else>Select a location on the left side</div>
  </div>
</template>
