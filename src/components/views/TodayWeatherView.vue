<template>
  <v-container>
    <v-row>
      <v-col cols="4" v-for="data in currUserCities" :key="data.id">
        <v-card  class="mx-auto" max-width="368" variant="tonal">
          <v-card-item :title="data.name">
            <template v-slot:subtitle>
              Real feel <span>{{ Math.round(data.feelsLike) }}&deg;C</span>
            </template>
          </v-card-item>

          <v-card-text class="py-0">
            <v-row align="center" no-gutters>
              <v-col class="text-h2" cols="6">
                {{ Math.round(data.temp) }}&deg;C
              </v-col>

              <v-col cols="6" class="text-right">
                <v-icon
                  v-if="data.icon == 'Rain'"
                  color="#90CAF9"
                  icon="mdi-weather-weather-pouring"
                  size="88"
                ></v-icon>
                <v-icon
                  v-if="data.icon == 'Clear'"
                  color="#90CAF9"
                  icon="mdi-white-balance-sunny"
                  size="88"
                ></v-icon>
                <v-icon
                  v-if="data.icon == 'Snow'"
                  color="#90CAF9"
                  icon="mdi-snowflake"
                  size="88"
                ></v-icon>
                <v-icon
                  v-if="data.icon == 'Clouds'"
                  color="#90CAF9"
                  icon="mdi-cloud"
                  size="88"
                ></v-icon>
                <v-icon
                  v-if="data.icon == 'Thunderstorm'"
                  color="#90CAF9"
                  icon="mdi-weather-lightning"
                  size="88"
                ></v-icon>
              </v-col>
            </v-row>
          </v-card-text>

          <div class="d-flex py-3 justify-space-between">
            <v-list-item density="compact" prepend-icon="mdi-weather-windy">
              <v-list-item-subtitle
                >{{ data.windSpeed }} km/h</v-list-item-subtitle
              >
            </v-list-item>

            <v-list-item density="compact" prepend-icon="mdi-water">
              <v-list-item-subtitle>{{data.humidity}}%</v-list-item-subtitle>
            </v-list-item>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    
  }),
  computed: {
    currUserCities() {
      return this.$store.getters["current/getCities"];
    },
  },
  created() {
   
  },
};
</script>
