<script setup lang="ts">
import LocationView from "@/location/LocationView.vue";

const props = defineProps({
  baseurl: String,
});
</script>

<template>
  <LocationView v-bind:baseUrl="props.baseurl"></LocationView>
</template>

<style>
@import "assets/global.css";
</style>
