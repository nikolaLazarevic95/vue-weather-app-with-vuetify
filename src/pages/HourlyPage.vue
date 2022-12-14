<template>
  <section>Hourly page</section>
  <div>
    {{hourlyDataAllCities}}
  </div>
</template>

<script>
export default {
  computed: {
    hourlyDataAllCities() {
      return this.$store.getters["hourly/getHourlyDataAllCities"];
    },
  },
  created() {
    this.$store.dispatch("hourly/getHourlyDataAllCities");
  },
};
</script>
