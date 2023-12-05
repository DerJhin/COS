<script>

import {CaseService} from "@/services/case.service";

export default {
  props: ['caseName'],
  data() {
    return {
      openedSkin: null
    };
  },
  methods: {
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
  <div>
    <h1>{{ caseName }}</h1>
    <img
        src="../../../icons/capy-logo-transparent.png"
        class="logo"
        alt="Case"/>
  </div>
  <div>
    <v-btn @click="openCase()" class="open-case-button">Open Case</v-btn>
  </div>
</template>

<style scoped>
.open-case-button {
  margin: 16px 0 16px 0;
}

h1 {
  color: white;
}
</style>