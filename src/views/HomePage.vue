<script lang="ts">
import Case from "@/components/Case.vue";

export default {
  components: {Case},
  data() {
    return {
      caseData: {
        name: "TestCase1",
        img: "../../../icons/capy-logo-transparent.png",
        price: 100
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
        <Case :case-data="this.caseData"/>
        <Case :case-data="this.caseData"/>
        <Case :case-data="this.caseData"/>
      </div>
    </v-card>

    <v-divider
        :thickness="3"
        class="border-opacity-100"
    ></v-divider>

    <h2>Krasses Zeug</h2>
    <v-card>
      <div class="case-row">
        <Case :case-data="this.caseData"/>
        <Case :case-data="this.caseData"/>
        <Case :case-data="this.caseData"/>
      </div>
    </v-card>
  </div>

  <v-card>
    <v-layout>
      <v-navigation-drawer
          expand-on-hover
          rail
      >
        <v-list>
          <v-list-item
              prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
              title="Sandra Adams"
              subtitle="sandra_a88@gmailcom"
          ></v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item prepend-icon="mdi-folder" title="My Files" value="myfiles"></v-list-item>
          <v-list-item prepend-icon="mdi-account-multiple" title="Shared with me" value="shared"></v-list-item>
          <v-list-item prepend-icon="mdi-star" title="Starred" value="starred"></v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-main style="height: 250px"></v-main>
    </v-layout>
  </v-card>

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