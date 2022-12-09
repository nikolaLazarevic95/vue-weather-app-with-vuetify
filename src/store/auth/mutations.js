export default {
  setSelectedID(state, payload) {
    state.selectedID = payload;
  },
  setCityNames(state, payload) {
    state.currCityNamesArr = payload;
  }
};
