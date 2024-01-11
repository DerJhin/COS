<script lang="ts">
import { AuthData } from "@/interfaces/authData";
import { CaseService } from "@/services/case.service";

export default {
  data() {
    return {
      tab: null,
      authData: {} as AuthData,
      rules: {
        required: v => !!v || 'Dieses Feld ist ein Pflichtfeld.',
        min: v => v.length >= 8 || 'Das Passwort muss mindestens 8 Zeichen haben.',
        confirm: v => v === this.authData.password || 'Passwörter müssen übereinstimmen.',
      }
    };
  },
  created() {
    localStorage.clear()
  },
  computed: {
    isLoginButtonDisabled() {
      return !this.authData.username || !this.authData.password;
    },
    isRegisterButtonDisabled() {
      return !this.authData.username || !this.authData.password || !this.authData.passwordConfirmation;
    },
  },
  watch: {
    tab: function () {
      this.authData = {}
      if (this.$refs.form1 && this.$refs.form2) {
        this.$refs.form1.reset()
        this.$refs.form2.reset()
      }
    }
  },
  methods: {
    async login() {
      try {
        const user = await CaseService.login(this.authData);
        if(user) this.$router.push("/");
      } catch (error) {
        console.error('Error logging in:', error);
      }
    },
    async register() {
      const userData = {
        username: this.authData.username,
        password: this.authData.password
      }
      try {
        const user = await CaseService.register(userData);
        if(user) this.$router.push("/");
      } catch (error) {
        console.error('Error registering:', error);
      }
    },
  },
};
</script>

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
                <v-form @submit.prevent="login" ref="form1">
                  <v-text-field
                      v-model="authData.username"
                      label="Benutzername"
                      :rules="[rules.required]"
                  ></v-text-field>
                  <v-text-field
                      v-model="authData.password"
                      label="Passwort"
                      type="password"
                      :rules="[rules.required, rules.min]"
                  ></v-text-field>
                  <v-btn :disabled="isLoginButtonDisabled" type="submit" class="mt-2" color="secondary">Anmelden</v-btn>
                </v-form>
              </v-card-text>
            </v-window-item>

            <v-window-item :value="register">
              <v-card-text>
                <v-form @submit.prevent="register" ref="form2">
                  <v-text-field
                      v-model="authData.username"
                      label="Benutzername"
                      :rules="[rules.required]"
                  ></v-text-field>
                  <v-text-field
                      v-model="authData.password"
                      label="Passwort"
                      type="password"
                      :rules="[rules.required, rules.min]"
                  ></v-text-field>
                  <v-text-field
                      v-model="authData.passwordConfirmation"
                      label="Passwort erneut"
                      type="password"
                      :rules="[rules.required, rules.confirm]"
                  ></v-text-field>
                  <v-btn :disabled="isRegisterButtonDisabled" type="submit" class="mt-2" color="secondary">Registrieren</v-btn>
                </v-form>
              </v-card-text>
            </v-window-item>
          </v-window>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.v-row {
  width: 500px;
  height: 500px;
}

:deep(.v-slide-group__content) {
  justify-content: center !important;
}

.v-input--horizontal + .v-input--horizontal {
  margin-top: 8px;
}

.v-container {
  display: flex;
  justify-content: center;
  max-width: 30%;
}
</style>
