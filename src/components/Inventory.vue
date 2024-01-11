<script lang="ts">
import {Item} from "@/interfaces/item";
import {CaseService} from "@/services/case.service"

export default {
  props: ['caseName'],
  data() {
    return {
      sortByAlphabet: ["", "A-Z", "Z-A"],
      sortByDate: ["", "Neu", "Alt"],
      filterByType: ["", "AK", "AWP", "MAG-7"],
      filterByCase: ["", "Revolution"],
      searchInput: '',
      dialog: false,
      selectedItem: {} as Item,
      inventoryItems: [] as Item[],
      selectedSortByAlphabet: null,
      selectedSortByDate: null,
      selectedFilterByType: null,
      selectedFilterByCase: null,
    }
  },
  methods: {
    openItemDetails(item) {
      this.selectedItem = item
      this.dialog = true
    },
    closeDialog() {
      this.dialog = false;
    },
    async getInventory() {
      try {
        this.inventoryItems = await CaseService.getInventory();
      } catch (error) {
        console.error('Error fetching case data:', error);
      }
    }
  },
  mounted() {
    this.getInventory()
  },
  computed: {
    filteredItems() {
      return this.inventoryItems.items?.filter(item => {
        const nameMatch = !this.searchInput || item.skin.name.toLowerCase().includes(this.searchInput.toLowerCase())
        const typeMatch = !this.selectedFilterByType || item.skin.weapon.name === this.selectedFilterByType
        const caseMatch = !this.selectedFilterByCase || item.case.some(weaponCase => weaponCase === this.selectedFilterByCase)

        return nameMatch && typeMatch && caseMatch
      }).sort((a, b) => {
        let comparison = 0;

        if (this.selectedSortByAlphabet === "A-Z") {
          comparison = a.skin.name.localeCompare(b.skin.name);
        } else if (this.selectedSortByAlphabet === "Z-A") {
          comparison = b.skin.name.localeCompare(a.skin.name);
        }

        if (this.selectedSortByDate === "Neu") {
          comparison = b.date - a.date.toISOString()
        } else if (this.selectedSortByDate === "Alt") {
          comparison = a.date - b.date
        }

        return comparison
      });
    },
  }
}

</script>

<template>
  <div class="inputs">
    <v-select
        :items="sortByAlphabet"
        label="Sortieren nach Alphabet:"
        v-model="selectedSortByAlphabet"
    ></v-select>
    <v-select
        :items="sortByDate"
        label="Sortieren nach Datum:"
        v-model="selectedSortByDate"
    ></v-select>
    <v-select
        :items="filterByType"
        label="Kategorie:"
        v-model="selectedFilterByType"
    ></v-select>
    <v-select
        :items="filterByCase"
        label="Aus Kiste:"
        v-model="selectedFilterByCase"
    ></v-select>
  </div>
  <div class="search-bar">
    <v-text-field
        label="Suchen..."
        type="text"
        v-model="searchInput"
    />
  </div>
  <v-col>
    <v-row>
      <v-col v-for="item in filteredItems" :key="item.id" @click="openItemDetails(item)">
        <v-card :style="{ borderRight: '8px solid ' + item.skin.rarity }">
          <img :src="item.skin.image" :alt="item.id" height="150" />
          <p v-if="item.skin.name">{{item.skin.name}}</p>
        </v-card>
      </v-col>
    </v-row>
  </v-col>

  <v-dialog v-model="dialog" max-width="600">
    <v-card>
      <v-card-title>Item:</v-card-title>
      <v-card-text>
        <v-row>
          <v-col>
            <v-img :src="this.selectedItem.image" alt="Opened Item" />
          </v-col>
          <v-col>
            <div><strong>Name:</strong> {{ this.selectedItem.skin.name }}</div>
            <div><strong>Seltenheit:</strong> {{ this.selectedItem.skin.rarity }}</div>
            <div><strong>Float:</strong> {{ this.selectedItem.floatString }}</div>
            <div><strong>StatTrak:</strong> {{ this.selectedItem.statTrak }}</div>
            <div><strong>Waffe:</strong> {{ this.selectedItem.skin.weapon.name }}</div>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions>
        <v-btn @click="closeDialog">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<style scoped>
.v-col .v-card {
  max-width: 160px;
  max-height: 200px;
  background-color: transparent;
}

.v-col {
  flex-grow: 0;
  padding: 6px;
}

.v-row {
  justify-content: center;
}

.v-input {
  width: 100%;
}

.search-bar {
  width: 50%;
  margin-left: 25%;
}

:deep(.v-input__control) {
  color: white;
  background: #69758b;
}

.inputs {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr 0;
  gap: 8px;
  height: 20%;
}
</style>