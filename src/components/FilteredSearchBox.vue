<script setup lang="ts">
const sortByAlphabet = ["A-Z", "Z-A"]
const sortByDate = ["Neu", "Alt"]
const filterByType = ["Schlüssel", "Kiste"]
const filterByCase = ["Chroma", "Prisma"]
</script>

<template>
  <div class="inputs">
    <v-select
        :items="sortByAlphabet"
        label="Sortieren nach Alphabet:"
    ></v-select>
    <v-select
        :items="sortByDate"
        label="Sortieren nach Datum:"
    ></v-select>
    <v-select
        :items="filterByType"
        label="Kategorie:"
    ></v-select>
    <v-select
        :items="filterByCase"
        label="Aus Kiste:"
    ></v-select>
  </div>
  <div class="search-bar">
    <v-text-field
        label="Suchen..."
    />
  </div>
</template>

<style scoped>
.v-input {
  width: 100%;
}

.search-bar {
  width: 50%;
  margin-left: 25%;
}

:deep(.v-input__control) {
  color: white;
  background: #69758b;
}

.inputs {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr 0;
  gap: 8px;
  height: 20%;
}
</style>