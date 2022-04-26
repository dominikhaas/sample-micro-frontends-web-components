<script setup lang="ts">
import router from "@/router";

function showOnMap(payload: any) {
  const address = payload.detail;

  router.push({
    name: "map",
    params: {
      loc: address,
    },
  });
}
</script>
<template>
  <div>
    <profile-details v-bind:profile="$route.params.id" @map="showOnMap">
      <v-progress-circular></v-progress-circular>
    </profile-details>
    <button @click="showOnMap">asdf</button>
  </div>
</template>
