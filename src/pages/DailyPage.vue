<template>
  <v-container>
    <v-row>
      <v-col cols="4" v-for="data in dailyData" :key="data.id">
        <v-card class="mx-auto" max-width="368" variant="tonal">
          <v-card-item :title="data.name"> </v-card-item>

          <v-list class="bg-transparent" >
            <v-list-item v-for="item in data.dailyData" :key="item.id" class="my-0 py-0">
              <v-row >
                <v-col>
                  <v-card-subtitle>
                    {{ item.date }}
                  </v-card-subtitle>
                </v-col>
                <v-col>
                  <span>{{ Math.round(item.tempMax) }}&deg;</span>
                  <span>/ {{ Math.round(item.tempMin) }}&deg; </span>
                </v-col>

                <v-col class="text-right">
                  <v-icon
                    v-if="item.icon == 'Rain'"
                    color="#90CAF9"
                    icon="mdi-weather-pouring"
                  ></v-icon>
                  <v-icon
                    v-if="item.icon == 'Clear'"
                    color="#90CAF9"
                    icon="mdi-white-balance-sunny"
                  ></v-icon>
                  <v-icon
                    v-if="item.icon == 'Snow'"
                    color="#90CAF9"
                    icon="mdi-snowflake"
                  ></v-icon>
                  <v-icon
                    v-if="item.icon == 'Drizzle'"
                    color="#90CAF9"
                    icon="mdi-weather-rainy"
                  ></v-icon>
                  <v-icon
                    v-if="item.icon == 'Clouds'"
                    color="#90CAF9"
                    icon="mdi-cloud"
                  ></v-icon>
                  <v-icon
                    v-if="item.icon == 'Thunderstorm'"
                    color="#90CAF9"
                    icon="mdi-weather-lightning"
                  ></v-icon>
                  <v-icon
                    v-if="item.icon == 'Mist'"
                    color="#90CAF9"
                    icon="mdi-weather-fog"
                  ></v-icon>
                  <v-icon
                    v-if="item.icon == 'Fog'"
                    color="#90CAF9"
                    icon="mdi-weather-fog"
                  ></v-icon>
                </v-col>
              </v-row>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
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
  computed: {
    dailyData() {
      return this.$store.getters["daily/getDailyDataAllCities"];
    },
    dailyDataDaily() {
      return this.$store.getters["daily/getDailyDataAllCities"];
    },
  },
  async created() {
    await this.$store.dispatch("daily/getDailyDataAllCities");
    // console.log(this.dailyData);
  },
};
</script>
