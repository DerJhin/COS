<script setup lang="ts">

import Inventory from "@/components/Inventory.vue";
import FilteredSearchBox from "@/components/FilteredSearchBox.vue";
</script>

<template>
  <div class="inventory">
    <Inventory />
  </div>
</template>

<style scoped>
.inventory {
  display: grid;
  min-width: 1000px;
}
</style>