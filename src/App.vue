<template>
  <v-app>
    <TheHeader />
    <v-main>
      <v-container grid-list-xs>
        
        <router-view></router-view>
      </v-container>
    </v-main>
    <!-- <TheFooter/> -->
  </v-app>
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";
// import TheFooter from './components/layout/TheFooter.vue'

export default {
  name:'App',
  components: { TheHeader,  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@4 0;700&display=swap");

* {
  box-sizing: border-box;
}

html {
  font-family: "Roboto", sans-serif;
}
</style>
