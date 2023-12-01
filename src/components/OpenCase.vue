<script>

import {CaseService} from "@/services/case.service";

export default {
  props: ['caseName'],
  data() {
    return {
      openedSkin: null,
      caseItem: null
    };
  },
  methods: {
    async getCaseData() {
      try {
        this.caseItem = await CaseService.getCaseData(this.caseName);
      } catch (error) {
        console.error('Error fetching case data:', error);
      }
    },

    async openCase() {
      try {
        this.openedSkin = await CaseService.openCase(this.caseName);
      } catch (error) {
        console.error('Error fetching case data:', error);
      }
    }
  }
}
</script>

<template>
  <v-row>
    <h1>{{ caseName }}</h1>
    <img
        src="../../../icons/capy-logo-transparent.png"
        class="logo"
        alt="Case"/>
  </v-row>
  <v-row>
    <v-btn @click="openCase()">Open Case</v-btn>
  </v-row>
</template>

<style scoped>

</style>