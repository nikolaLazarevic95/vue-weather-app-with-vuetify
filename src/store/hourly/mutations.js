export default {
  setHourlyCurrCityData(state, payload) {
    return (state.hourlyCurrCityData = payload);
  },
  setHourlyDataAllCities(state, payload) {
    return (state.hourlyDataAllCities = payload);
  }
};
