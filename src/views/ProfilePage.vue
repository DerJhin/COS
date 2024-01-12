<script>
import {CaseService} from "@/services/case.service";

export default {
  data() {
    return {
      profileData: {}
    }
  },
  created() {
    this.getProfileData()
  },
  methods: {
    async getProfileData() {
      try {
        this.profileData = await CaseService.getProfile();
      } catch (error) {
        console.error('Error logging in:', error);
      }
    }
  }
}
</script>

<template>
  <v-container>
    <v-row>
      <v-col>
        <h1 class="ueberschrift">{{ profileData.username }}</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="centerContent"> 
        <img
          src="../../public/icons/capy-logo-transparent.png"
          class="user-pic"
          alt="Profilbild"/>
      </v-col>
      <v-col class="abstand centerContent">
        <v-form>
          <v-text-field
            v-model="Anzeigename"
            label="Anzeigename Ändern"
          />
        </v-form>
        <v-file-input
          accept="image/png, image/jpeg, image/bmp"
          placeholder="Profilbild Ändern"
          label="Profilbild Ändern"
        >
          <template v-slot:prepend>
            <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
              <path d="M149.1 64.8L138.7 96H64C28.7 96 0 124.7 0 160V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H373.3L362.9 64.8C356.4 45.2 338.1 32 317.4 32H194.6c-20.7 0-39 13.2-45.5 32.8zM256 192a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"/>
            </svg>
          </template>
        </v-file-input>
        <v-btn 
          variant="outlined"
          class="ueberschrift"
        >
          Änderungen Speichern
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
  .user-pic {
    border: 1px solid black;
  }
  .ueberschrift {
    color: #ff317b;
  }
  .abstand {
    margin-top: 2em;
  }
  .centerContent {
    max-width: 25%;
  }
  .v-row {
    justify-content: center;
  }
  :deep(.v-input__prepend) {
    margin-left: 1em !important;
  }
</style>