<template>
  <section>Air pollution page</section>
</template>

<script>
export default {
  name: "AirPollution Page",

  data() {
    return {};
  },
  computed: {},
  async created() {
    await this.$store.dispatch("airPollution/getAllCitiesCurrPollution");
    await this.$store.dispatch("airPollution/getAllCitiesForecastPollution");
  },
};
</script>
