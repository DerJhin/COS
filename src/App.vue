<script setup>

import Header from "@/components/Header.vue";
</script>

<template>
  <header>
    <v-layout>
      <Header></Header>
    </v-layout>
  </header>

  <main>
    <router-view />
  </main>
</template>

<style scoped>

</style>
