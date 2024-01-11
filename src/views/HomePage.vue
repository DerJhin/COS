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
        console.log(this.caseData)
      } catch (error) {
        console.error('Error fetching case data:', error);
      }
    }
  }
}
</script>

<template>
  <div>
    <h2>Kostenlos</h2>
    <v-card>
      <div class="case-row">
        <Case :case-data="this.caseData[0]"/>
      </div>
    </v-card>

    <v-divider
        :thickness="3"
        class="border-opacity-100"
    ></v-divider>

    <h2>Krasses Zeug</h2>
    <v-card>
      <div class="case-row">
        <Case :case-data="this.caseData[1]"/>
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