<template>
  <v-container>
    <v-row>
      <v-col cols="4">
        <v-card class="mx-auto" max-width="368" variant="tonal">
          <v-card-item title="Florida"> </v-card-item>

          <v-expand-transition>
            <v-list class="bg-transparent">
              <v-list-item
                v-for="item in forecast"
                :key="item.day"
                :title="item.day"
                :append-icon="item.icon"
                :subtitle="item.temp"
              >
              </v-list-item>
            </v-list>
          </v-expand-transition>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      APIkey: "55e1dfdb11ad536b67d886fb79270989",
      city: "Dallas",

      expand: true,
      time: 0,
      forecast: [
        {
          day: "Tuesday",
          icon: "mdi-white-balance-sunny",
          temp: "24\xB0/12\xB0",
        },
        {
          day: "Wednesday",
          icon: "mdi-white-balance-sunny",
          temp: "22\xB0/14\xB0",
        },
        { day: "Thursday", icon: "mdi-cloud", temp: "25\xB0/15\xB0" },
      ],
    };
  },
  computed: {},
  created() {
    this.$store.dispatch("daily/getDailyCities", {
      city: this.city,
      APIkey: this.APIkey,
    });
  },
};
</script>
