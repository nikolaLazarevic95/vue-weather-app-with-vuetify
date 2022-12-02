<template>
  <v-container grid-list-xs>
    <v-card>
      <div>{{ currData }}</div>

      <v-btn @click="updCities" color="success">text</v-btn>

      <div>{{ currUserCities }}</div>

    </v-card>
  </v-container>
</template>

<script>
// import axios from "axios"
// import db from "../firebase/firebaseinit"

export default {
  name: "TodayPage",
  data() {
    return {
      APIkey: "55e1dfdb11ad536b67d886fb79270989",
      city: "detroit",
    };
  },
  methods: {
    async updCities() {
      await this.$store.dispatch("today/updUserCities", {
        data: this.currData,
      });
    },
  },
  computed: {
    currData() {
      return this.$store.getters["today/getCurrentWeather"];
    },
    currUserCities() {
      return this.$store.getters["today/getCities"];

    }

  },
  async created() {
    await this.$store.dispatch("today/getCurrentWeather", {
      city: this.city,
      APIkey: this.APIkey,
    });
    // await this.$store.dispatch("today/updUserCities", {
    //   city: this.city,
    //   dataObj: this.currData,
    // });
    await this.$store.dispatch("today/getUserCities")
  },
};
</script>
