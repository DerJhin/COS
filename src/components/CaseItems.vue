<script lang="ts">

import {CaseService} from "@/services/case.service";

export default {
  props: ['caseName'],
  data() {
    return {
      caseItems: []
    }
  },
  mounted() {
    this.getCaseData()
  },
  methods: {
    async getCaseData() {
      try {
        this.caseItems = await CaseService.getCaseData(this.caseName);

        const rarityOrder = ["GOLD", "RED", "PINK", "PURPLE", "BLUE"];

        this.caseItems.sort((a, b) => {
          const rarityA = rarityOrder.indexOf(a.skin.rarity);
          const rarityB = rarityOrder.indexOf(b.skin.rarity);

          if (rarityA === -1) return 1;
          if (rarityB === -1) return -1;

          return rarityA - rarityB;
        });
      } catch (error) {
        console.error('Error fetching case data:', error);
      }
    }
  }
}
</script>

<template>
  <v-col>
    <v-row>
      <v-col v-for="(item) in caseItems" :key="item.id">
        <v-card :style="{ borderRight: '8px solid ' + item.skin.rarity }">
          <img :src="item.skin.image" :alt="item.id" height="150" class="item-img" />
          <div><strong>Name:</strong> {{ item.skin.name }}</div>
        </v-card>
      </v-col>
    </v-row>
  </v-col>
</template>

<style scoped>
.v-card {
  width: 160px;
  height: 150px;
  background-color: #69758b;
}

.v-col {
  flex-grow: 0;
  padding: 6px;
}

.v-row {
  justify-content: center;
}

.item-img {
  width: 135px;
  height: 125px;
  margin-top: 10%;
}
</style>