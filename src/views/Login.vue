<template>
  <v-container>
    <v-row justify="center">
      <v-col>
        <v-card>
          <v-card-title class="headline text-center mt-2">
            Authentifizierung
          </v-card-title>
          <v-tabs v-model="tab" background-color="primary" class="justify-center" dark>
            <v-tab href="#login">Anmelden</v-tab>
            <v-tab href="#register">Registrieren</v-tab>
          </v-tabs>
          <v-window v-model="tab">
            <v-window-item :value="login">
              <v-card-text>
                <v-form @submit.prevent="login">
                  <v-text-field
                      v-model="loginUsername"
                      label="Benutzername"
                      :rules="[v => !!v || 'Benutzername ist erforderlich']"
                  ></v-text-field>
                  <v-text-field
                      v-model="loginPassword"
                      label="Passwort"
                      type="password"
                      :rules="[v => !!v || 'Passwort ist erforderlich']"
                  ></v-text-field>
                  <v-btn type="submit" color="primary">Anmelden</v-btn>
                </v-form>
              </v-card-text>
            </v-window-item>

            <v-window-item :value="register">
              <v-card-text>
                <v-form @submit.prevent="register">
                  <v-text-field
                      v-model="registerUsername"
                      label="Benutzername"
                      :rules="[v => !!v || 'Benutzername ist erforderlich']"
                  ></v-text-field>
                  <v-text-field
                      v-model="registerEmail"
                      label="E-Mail"
                      type="email"
                      :rules="[v => !!v || 'Passwort ist erforderlich']"
                  ></v-text-field>
                  <v-text-field
                      v-model="registerPassword"
                      label="Passwort bestätigung"
                      type="password"
                      :rules="[v => !!v || 'Passwort bestätigung ist erforderlich']"
                  ></v-text-field>
                  <v-btn type="submit" color="primary">Registrieren</v-btn>
                </v-form>
              </v-card-text>
            </v-window-item>
          </v-window>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      tab: null,
      loginUsername: '',
      loginPassword: '',
      registerUsername: '',
      registerEmail: '',
      registerPassword: '',
    };
  },
  methods: {
    login() {
      // Handle login logic here
      console.log('Anmelden...');
    },
    register() {
      // Handle registration logic here
      console.log('Registrieren...');
    },
  },
};
</script>

<style scoped>
.v-row {
  width: 500px;
  height: 500px;
}

>>> .v-slide-group__content {
  justify-content: center !important;
}
</style>
