import mutations from "./mutations.js";
import actions from "./actions.js";
import getters from "./getters.js";

export default {
  namespaced: true,
  state() {
    return {
      currAirPollutionCurrCity: null,
      // Air Quality Index. Possible values: 1, 2, 3, 4, 5.
      // Where 1 = Good, 2 = Fair, 3 = Moderate, 4 = Poor, 5 = Very Poor.
      //pollution : Сoncentration of CO μg/m3
      forecastAirPollutionCurrCity : null,
    };
  },
  mutations,
  actions,
  getters,
};
