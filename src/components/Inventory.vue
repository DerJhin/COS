<script lang="ts">
import {Item} from "@/interfaces/item";

export default {
  props: ['caseName'],
  data() {
    return {
      sortByAlphabet: ["", "A-Z", "Z-A"],
      sortByDate: ["", "Neu", "Alt"],
      filterByType: ["", "AK", "AWP"],
      filterByCase: ["", "Revolution", "Prisma"],
      searchInput: '',
      caseItems: [
        {
          id: 0,
          skin: {
            id: 1,
            name: 'CDawg',
            weapon: {
              name: 'AWP'
            },
            hasPattern: false,
            rarity: "red",
            image: "../../../icons/capy-logo-transparent.png"
          },
          floatValue: 0.0005,
          floatString: 'Minimal-Wear',
          date: new Date('2023-12-03T10:15:25'),
          statTrak: false,
          case: ["Revolution", "Prisma"]
        },
        {
          id: 1,
          skin: {
            id: 2,
            name: 'Monke',
            weapon: {
              name: 'AK'
            },
            hasPattern: false,
            rarity: "blue",
            image: "../../../icons/capy-logo-transparent.png"
          },
          floatValue: 0.05168,
          floatString: 'Factory New',
          date: new Date('2023-12-04T10:15:25'),
          statTrak: false,
          case: ["Prisma"]
        },
        {
          id: 2,
          skin: {
            id: 3,
            name: 'Frog',
            weapon: {
              name: 'AK'
            },
            hasPattern: false,
            rarity: "gold",
            image: "../../../icons/capy-logo-transparent.png"
          },
          floatValue: 0.0005,
          floatString: 'Factory-New',
          date: new Date('2023-12-03T10:17:25'),
          statTrak: false,
          case: ["Revolution"]
        }
      ] as Item[],
      selectedSortByAlphabet: null,
      selectedSortByDate: null,
      selectedFilterByType: null,
      selectedFilterByCase: null,
    }
  },
  computed: {
    filteredItems() {
      return this.caseItems.filter(item => {
        const nameMatch = !this.searchInput || item.skin.name.toLowerCase().includes(this.searchInput.toLowerCase());
        const typeMatch = !this.selectedFilterByType || item.skin.weapon.name === this.selectedFilterByType;
        const caseMatch = !this.selectedFilterByCase || item.case.some(weaponCase => weaponCase === this.selectedFilterByCase);

        return nameMatch && typeMatch && caseMatch;
      }).sort((a, b) => {
        let comparison = 0;

        if (this.selectedSortByAlphabet === "A-Z") {
          comparison = a.skin.name.localeCompare(b.skin.name);
        } else if (this.selectedSortByAlphabet === "Z-A") {
          comparison = b.skin.name.localeCompare(a.skin.name);
        }

        if (this.selectedSortByDate === "Neu") {
          comparison = b.date - a.date; // Newest to oldest
        } else if (this.selectedSortByDate === "Alt") {
          comparison = a.date - b.date; // Oldest to newest
        }

        return comparison;
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
      <v-col v-for="item in filteredItems" :key="item.id">
        <v-card :style="{ borderRight: '8px solid ' + item.skin.rarity }">
          <img :src="item.skin.image" :alt="item.id" height="150" />
          <p>{{item.skin.name}}</p>
        </v-card>
      </v-col>
    </v-row>
  </v-col>
</template>

<style scoped>
.v-card {
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