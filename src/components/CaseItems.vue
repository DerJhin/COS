<script>

import {CaseService} from "@/services/case.service";

export default {
  props: ['caseName'],
  data() {
    return {
      caseItems: [
        {
          id: 1,
          name: "TestItem1",
          image: "../../../icons/capy-logo-transparent.png",
          rarity: "Blue"
        },
        {
          id: 2,
          name: "TestItem2",
          image: "../../../icons/capy-logo-transparent.png",
          rarity: "Gold"
        }
      ]
    }
  },
  mounted() {
    //this.getCaseData()
  },
  methods: {
    async getCaseData() {
      try {
        this.caseItems = await CaseService.getCaseData(this.caseName);
      } catch (error) {
        console.error('Error fetching case data:', error);
      }
    }
  }
}
</script>

<template>
  <v-row>
    <v-col v-for="(item) in caseItems" :key="item.id" cols="4">
      <v-card :style="{ borderRight: '8px solid ' + item.rarity }">
        <img :src="item.image" :alt="item.id" height="150" />
      </v-card>
    </v-col>
  </v-row>
</template>

<style scoped>

</style>