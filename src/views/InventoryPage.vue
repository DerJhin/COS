<script setup lang="ts">

import Inventory from "@/components/Inventory.vue";
</script>

<template>
  <div class="inventory">
    <Inventory />
  </div>
</template>

<style scoped>
.inventory {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>