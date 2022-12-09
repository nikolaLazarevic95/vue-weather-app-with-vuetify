<template>
  <!-- <div>{{ currData }}</div> -->

  <!-- <v-btn @click="updCities" color="success">text</v-btn> -->

  <!-- <div>{{ currUserCities }}</div>  -->
  <!-- <div>
    {{ currCityNamesArr }}
  </div> -->
  <CurrWeatherView></CurrWeatherView>
</template>

<script>
import CurrWeatherView from "../components/views/CurrWeatherView.vue";

export default {
  name: "CurrentPage",
  components: { CurrWeatherView },
  data() {
    return {
      APIkey: "55e1dfdb11ad536b67d886fb79270989",
      city: "phenix",
    };
  },
  methods: {},
  computed: {
    currUserCities() {
      return this.$store.getters["current/getCities"];
    },
    currCityNamesArr() {
      return this.$store.getters.getCurrCityNamesArray;
    },
  },
  async created() {
    await this.$store.dispatch("current/getUserCities");
  },
};
</script>
