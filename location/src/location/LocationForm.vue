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
    <div class="details" v-if="currentLocation">
      <h3 class="name">{{ currentLocation?.title }}</h3>
      <span class="city">{{currentLocation?.city}}</span>
      <hr>
      <span class="label">Kind</span> <span>{{currentLocation?.kind}}</span>
      <span class="label">Email</span> <span>{{currentLocation?.email}}</span>
      <span class="label">Phone</span> <span>{{currentLocation?.phone}}</span>
      <hr>
    </div>

  </div>
</template>
