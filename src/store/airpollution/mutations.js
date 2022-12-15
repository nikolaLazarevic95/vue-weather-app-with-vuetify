export default {
  setCurrAirPollutionCurrCity(state, payload) {
    state.currAirPollutionCurrCity = payload;
  },
  setForecastAirPollutionCurrCity(state, payload) {
    state.forecastAirPollutionCurrCity = payload;
  },
  setAllCitiesCurrPollution(state, payload) {
    state.allCitiesCurrPollution = payload
  },
  setAllCitiesForecastPollution(state, payload) {
    state.allCitiesForecastPollution = payload
  },
};
