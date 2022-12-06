<template>
   <!-- <div>{{ currData }}</div>

      <v-btn @click="updCities" color="success">text</v-btn>

      <div>{{ currUserCities }}</div>  -->
  <TodayWeatherView></TodayWeatherView>
</template>

<script>
import TodayWeatherView from "../components/views/TodayWeatherView.vue";

export default {
  name: "TodayPage",
  components: { TodayWeatherView },
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
