<script lang="ts">
export default {
  props: ['caseData']
}
</script>

<template>
  <div>
    <v-card variant="outlined">
      <img :src="this.caseData.img" :alt="this.caseData.name" height="150" />
      <v-card-title>
        <router-link :to="'/case/' + this.caseData.name">
          {{ this.caseData.name }}
        </router-link>
      </v-card-title>
      <v-card-actions v-if="this.caseData.price">
        <v-btn variant="outlined">
          {{ this.caseData.price }} CC
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<style scoped>
.v-card {
  background-color: #69758b;
  border: 1px solid #ffffff;

  .v-card-title {
    border-bottom: 1px solid #ffffff;
    line-height: 1rem;
  }

  .v-card-actions {
    padding: 0.5rem;
    justify-content: center;
  }
}

</style>