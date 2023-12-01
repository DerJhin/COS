<script setup>

import Header from "@/components/Header.vue";
</script>

<template>
  <v-layout>
    <Header></Header>

    <v-main class="align-center justify-center">
      <router-view />
    </v-main>
  </v-layout>
</template>

<style scoped>
</style>
