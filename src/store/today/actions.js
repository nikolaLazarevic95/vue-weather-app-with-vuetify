import axios from "axios";

export default {
  getCurrentWeather(context, payload) {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${payload.city}&appid=${payload.APIkey}`
      )
      .then((res) => {
        console.log(res.data);
        // const responseData = res.data
        context.commit("setCurrentWeather", res.data);
      });
  },
};
