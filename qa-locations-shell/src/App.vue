<script lang="ts" setup>
import { ref } from "vue";
const name = ref("qa-locations");
</script>
<template>
  <v-app>
    <v-app-bar>
        <h1 link to="/">{{ name }}</h1>
    </v-app-bar>
    <v-navigation-drawer  permanent="true">
      <v-list-item link to="/locations">
        <v-list-item-icon>
          mdi-home
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>Locations</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item link to="/profile">
        <v-list-item-icon>
          mdi-account-box
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>Your profile</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-navigation-drawer>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>
