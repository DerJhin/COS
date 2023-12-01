<script>
import OpenCase from "@/components/OpenCase.vue";
import CaseItems from "@/components/CaseItems.vue";

export default {
  components: {CaseItems, OpenCase},
  mounted() {
    this.caseName = this.$route.params.name
  },
  data() {
    return {
      caseName: ""
    };
  }
}
</script>

<template>
  <div class="openCase align-center">
    <OpenCase :case-name="this.caseName" />
    <CaseItems :case-name="this.caseName"/>
  </div>
</template>

<style scoped>
.openCase {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>