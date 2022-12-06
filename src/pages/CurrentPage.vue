<template>
   <!-- <div>{{ currData }}</div>

      <v-btn @click="updCities" color="success">text</v-btn>

      <div>{{ currUserCities }}</div>  -->
  <CurrWeatherView></CurrWeatherView>
</template>

<script>
import CurrWeatherView from "../components/views/CurrWeatherView.vue";

export default {
  name: "TodayPage",
  components: { CurrWeatherView },
  data() {
    return {
      APIkey: "55e1dfdb11ad536b67d886fb79270989",
      city: "phenix",
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
    },
  },
  async created() {
    
    await this.$store.dispatch("today/getCurrentWeather", {
      city: this.city,
      APIkey: this.APIkey,
    });
    await this.$store.dispatch("today/getUserCities");
  },
};
</script>
