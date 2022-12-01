<template>
  <section>Daily page</section>
  {{currData}}
</template>

<script>
export default {
  data() {
    return {
      APIkey: "55e1dfdb11ad536b67d886fb79270989",
      city: "Dallas",
    };
  },
  computed: {
    currData() {
      return this.$store.getters["today/getCurrentWeather"];
    },
  },
  created() {
    this.$store.dispatch("today/getCurrentWeather", {
        city: this.city,
        APIkey: this.APIkey
    });
  },
};
</script>
