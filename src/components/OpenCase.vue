<template>
  <div>
    <h1>{{ caseName }}</h1>
    <img src="../../../icons/capy-logo-transparent.png" class="logo" alt="Case" />
  </div>
  <div>
    <v-btn @click="openCase()" class="open-case-button">Öffnen</v-btn>

    <v-dialog v-model="dialog" max-width="600">
      <v-card>
        <v-card-title>Geöffnetes Item:</v-card-title>
        <v-card-text>
          <v-row>
            <v-col>
              <v-img :src="openedItem.skin.image" alt="Opened Item" />
            </v-col>
            <v-col>
              <div><strong>Name:</strong> {{ openedItem.skin.name }}</div>
              <div><strong>Seltenheit:</strong> {{ openedItem.skin.rarity }}</div>
              <div><strong>Float:</strong> {{ openedItem.floatString }}</div>
              <div><strong>StatTrak:</strong> {{ openedItem.statTrak }}</div>
              <div><strong>Waffe:</strong> {{ openedItem.skin.weapon.name }}</div>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions>
          <v-btn @click="closeDialog">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script lang="ts">
import { CaseService } from "@/services/case.service";
import {Item} from "@/interfaces/item";

export default {
  props: ['caseName'],
  data() {
    return {
      openedItem: {} as Item,
      dialog: false
    };
  },
  methods: {
    async openCase() {
      try {
        this.openedItem = await CaseService.openCase(this.caseName);
        this.dialog = true;
      } catch (error) {
        console.error('Error fetching case data:', error);
      }
    },
    closeDialog() {
      this.dialog = false;
    }
  }
};
</script>

<style scoped>
.open-case-button {
  margin: 16px 0 16px 0;
}

h1 {
  color: white;
}
</style>
