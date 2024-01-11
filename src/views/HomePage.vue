<script lang="ts">
import Case from "@/components/Case.vue";
import {CaseService} from "@/services/case.service"

export default {
  components: {Case},
  data() {
    return {
      caseData: []
    }
  },
  mounted() {
    this.getCases()
  },
  methods: {
    async getCases() {
      try {
        this.caseData = await CaseService.getCases();
      } catch (error) {
        console.error('Error fetching case data:', error);
      }
    }
  }
}
</script>

<template>
  <div>
    <h2>Kisten</h2>
    <v-card>
      <div class="case-row">
        <Case :case-data="caseData" v-for="caseData in this.caseData"/>
      </div>
    </v-card>
  </div>

</template>

<style scoped>
.case-row {
  display: flex;
  column-gap: 16px;
}

.v-card {
  padding: 8px;
  background-color: #69758b;
}

.v-divider {
  margin: 16px 0
}

h2 {
  text-align: left;
}
</style>