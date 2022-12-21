<template>
  <v-container>
    <v-row>
      <v-col
        cols="4"
        v-for="data in airPollutionHourlyDataAllCities"
        :key="data.id"
      >
        <v-card class="mx-auto" max-width="368" variant="tonal">
          <v-card-item :title="data.name"> </v-card-item>

          <v-row>
            <v-col class="mr-3"></v-col>
            <v-col class="ml-12 pr-0 mr-0 text-center">
              <p class="font-weight-thin">car. mon. μg/m3</p>
            </v-col>
            <v-col class="text-center p-0 ml-4 mr-1">
              <p class="font-weight-thin">nitr. mon. μg/m3</p>
            </v-col>
            <v-col class="text-center p-0 ml-0 mr-3">
              <p class="font-weight-thin">Air quality index</p>
            </v-col>
          </v-row>

          <v-list class="bg-transparent">
            <v-list-item
              v-for="item in data.forecastData"
              :key="item.id"
              class="my-0 py-0"
            >
              <div d-flex justify-space-evenly>
                <v-row>
                  <v-col class="text-left">
                    <v-card-subtitle>
                      <v-icon small icon="mdi-calendar"></v-icon>
                      {{ $filters.niceDateUnix(item.date) }}
                    </v-card-subtitle>
                  </v-col>
                  <v-col class="text-center">
                    <span> {{ Math.round(item.carbonMonoxide) }}</span>
                  </v-col>
                  <v-col class="text-center">
                    <span>{{ Math.round(item.nitrogenMonoxide) }}</span>
                  </v-col>

                  <v-col class="text-right mr-3">
                    <v-icon
                      v-if="item.aqi == '1'"
                      icon="mdi-alert"
                      size="18"
                      color="green"
                      class="mr-1 pb-1"
                    ></v-icon>
                    <v-icon
                      v-if="item.aqi == '2'"
                      color="blue"
                      icon="mdi-alert"
                      size="18"
                      class="mr-1 pb-1"
                    ></v-icon>
                    <v-icon
                      v-if="item.aqi == '3'"
                      color="yellow"
                      icon="mdi-alert"
                      size="18"
                      class="mr-1 pb-1"
                    ></v-icon>
                    <v-icon
                      v-if="item.aqi == '4'"
                      color="orange"
                      icon="mdi-alert"
                      size="18"
                      class="mr-1 pb-1"
                    ></v-icon>
                    <v-icon
                      v-if="item.aqi == '5'"
                      color="error"
                      icon="mdi-alert"
                      size="18"
                      class="mr-1 pb-1"
                    ></v-icon>
                  </v-col>
                </v-row>
              </div>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "AirPollution Page",

  data() {
    return {};
  },
  computed: {
    airPollutionHourlyDataAllCities() {
      return this.$store.getters["airPollution/getAllCitiesForecastPollution"];
    },
  },
  async created() {
    await this.$store.dispatch("airPollution/getAllCitiesCurrPollution");
    await this.$store.dispatch("airPollution/getAllCitiesForecastPollution");
  },
};
</script>
