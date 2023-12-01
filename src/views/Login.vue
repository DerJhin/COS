<template>
  <v-container>
    <v-row justify="center">
      <v-col>
        <v-card>
          <v-card-title class="headline text-center">
            Authentifizierung
          </v-card-title>
          <v-tabs v-model="tab" background-color="primary" dark>
            <v-tab href="#login">Login</v-tab>
            <v-tab href="#register">Registrieren</v-tab>
          </v-tabs>
          <v-window v-model="tab">
            <v-window-item :value="login">
              <v-card-text>
                <v-form @submit.prevent="login">
                  <v-text-field v-model="loginUsername" label="Benutzername"></v-text-field>
                  <v-text-field v-model="loginPassword" label="Passwort" type="password"></v-text-field>
                  <v-btn type="submit" color="primary">Login</v-btn>
                </v-form>
              </v-card-text>
            </v-window-item>

            <v-window-item :value="register">
              <v-card-text>
                <v-form @submit.prevent="register">
                  <v-text-field v-model="registerUsername" label="Benutzername"></v-text-field>
                  <v-text-field v-model="registerEmail" label="Passwort" type="password"></v-text-field>
                  <v-text-field v-model="registerPassword" label="Repeat Password" type="password"></v-text-field>
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
      console.log('Logging in...');
    },
    register() {
      // Handle registration logic here
      console.log('Registering...');
    },
  },
};
</script>

<style scoped>
/* Add your styling here */
</style>
