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
  <OpenCase :case-name="this.caseName" />
  <CaseItems :case-name="this.caseName"/>
</template>

<style scoped>

</style>