<script setup lang="ts">

</script>

<template>
  <v-container>
    <v-row>
      <v-col>
        <h1 class="ueberschrift">Profil</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col> 
        <img
          src="../../public/icons/capy-logo-transparent.png"
          class="user-pic"
          alt="Profilbild"/>
      </v-col>
      <v-col>
        <p>Benutzername: User1243463</p>
        <v-form validate-on="submit lazy" @submit.prevent="submit">
          <v-text-field
            v-model="Anzeigename"
            :rules="rules"
            label="Anzeigename"
          />
        </v-form>
        <v-file-input label="Profilbild ändern" variant="outlined"></v-file-input>
        <v-btn variant="outlined" class="ueberschrift">
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
</style>