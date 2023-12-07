<script setup lang="ts">

import Inventory from "@/components/Inventory.vue";
import FilteredSearchBox from "@/components/FilteredSearchBox.vue";
</script>

<template>
  <div class="inventory">
    <FilteredSearchBox />
    <Inventory />
  </div>
</template>

<style scoped>
.inventory {
  display: grid;
}
</style>