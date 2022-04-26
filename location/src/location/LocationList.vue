<script setup lang="ts">
  import {locationStore} from "@/location/locationStore";
  import {computed} from "vue";

  const store = locationStore();

  const locations = computed(() => store.locations);

</script>



<template>
  <div>
    <li v-for="location in locations" v-bind:key="location">
      {{location}}
    </li>
  </div>
</template>

