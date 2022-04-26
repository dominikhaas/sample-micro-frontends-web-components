<script setup lang="ts">
let props = defineProps({
  loc: String,
});

let mapUrl =
  "https://maps.google.com/maps?output=embed&q=" +
  encodeURIComponent(props.loc + "");
</script>
<template>
  <div>
    <h1>{{ loc }}</h1>
    <iframe v-bind:src="mapUrl"></iframe>
    <br />
    <a @click="$router.back()" href="#">Back</a>
  </div>
</template>

<style>
iframe {
  min-width: 400px;
  min-height: 400px;
}
</style>