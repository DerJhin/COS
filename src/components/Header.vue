<script setup lang="ts">

import FriendsMenu from "@/components/FriendsMenu.vue";

const navigationNodes = [
  {
    link: '/inventory',
    label: 'Inventar'
  },
  {
    link: '/requests',
    label: 'Anfragen'
  },
  {
    link: '/profile',
    label: 'Profil'
  }
]
</script>

<template>
  <v-app-bar :elevation="12">
    <template v-slot:prepend>
      <router-link to="/">
        <img
            src="../../public/icons/capy-logo-transparent.png"
            class="logo"
            alt="Logo"
        />
      </router-link>

      <router-link to="/market">
        <p class="market-label">
          Tomatenmarkt
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
            <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/>
          </svg>
        </p>
      </router-link>
    </template>

    <template v-slot:append>
      
      <v-dialog
        transition="dialog-top-transition"
        width="auto"
      >
        <template v-slot:activator="{ props }">
          <v-btn
            class="color"
            color="outlined"
            v-bind="props"
          >Daily Reward</v-btn>
        </template>
        <template v-slot:default="{ isActive }">
          <v-card class="color">
            <v-toolbar
              color="outlined"
              title="Daily Reward"
            ></v-toolbar>
            <v-card-text>
              <div class="text-h2 pa-12">Du hast 5 CC bekommen</div>
            </v-card-text>
            <v-card-actions class="justify-end">
              <v-btn
                variant="text"
                @click="isActive.value = false"
              >Close</v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>

      <v-dialog
        transition="dialog-top-transition"
        position="right"
        width="auto"
      >
        <template v-slot:activator="{ props }" class="cc-amount">
          <v-btn
            class="color"
            color="outlined"
            v-bind="props"
          >700 CC</v-btn>
        </template>
        <template v-slot:default="{ isActive }">
          <v-card class="color">
            <v-toolbar
              color="outlined"
              title="Add CC to your Account"
            ></v-toolbar>
            <v-card-text>
              <div class="text-h2 pa-12">test data</div>
            </v-card-text>
            <v-card-actions class="justify-end">
              <v-btn
                variant="text"
                @click="isActive.value = false"
              >Close</v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>

      <div class="text-center profile-friends">
        <v-menu>
          <template v-slot:activator="{ props }">
            <img
                src="../../public/icons/capy-logo-transparent.png"
                class="user-pic"
                v-bind="props"
                alt="Profilbild"/>
          </template>

          <v-list>
            <router-link v-for="node in navigationNodes" :to="node.link">
              <v-list-item>
                <v-list-item-title>
                  <p>
                    {{ node.label }}
                  </p>
                </v-list-item-title>
              </v-list-item>
            </router-link>
          </v-list>
        </v-menu>
        <FriendsMenu/>
      </div>

        <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1.5em"
            viewBox="0 0 512 512"
            class="logout"
        >
          <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 192 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128zM160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 32C43 32 0 75 0 128L0 384c0 53 43 96 96 96l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l64 0z"/>
        </svg>
    </template>
  </v-app-bar>
</template>

<style scoped>
a > .v-list-item {
  color: black;
}

.market-label {
  font-weight: bold;
  margin-left: 2em;
}

.v-app-bar.v-toolbar {
  background-color: #69758b;
  color: white;
}

.v-toolbar__content {
  height: 80px;
}

.logo {
  height: 50px;
  width: 50px;
}

.logout {
  margin-left: 140px;
  margin-right: 20px;
}

.cc-amount {
  font-weight: bold;
}

.user-pic {
  height: 50px;
  width: 50px;
  border: 1px solid black;
  margin-left: 25px;
}

.profile-friends {
  display: flex;
  align-items: center;
}

.color {
    color: #ff317b;
}
</style>