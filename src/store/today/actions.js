export default {
  async getCurrentWeather(context, payload) {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${payload.city}&appid=${payload.APIkey}&units=metric`
    );

    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(
        responseData.message || " Failed to get Curr weather for this city"
      );
      throw error;
    }
    context.commit("setCurrentWeather", responseData);
  },

  async updUserCities(context, payload) {
    // const userId = context.rootGetters.userId
    const response = await fetch(
      `https://vue-weather-app-28d8b-default-rtdb.firebaseio.com/cities.json`, //!
      {
        method: "POST",
        headers: {
          //mora header
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          data: payload.data,
        }),
      }
    );
    const responseData = await response.json();
    if (!response.ok) {
      const error = new Error(responseData.message || "Failed to fetch cities");
      throw error;
    }
    // context.commit('updUserCities',  )
  },
  async getUserCities(context) {
    const response = await fetch(
      `https://vue-weather-app-28d8b-default-rtdb.firebaseio.com/cities.json`
    );

    const responseData = await response.json();
    console.log(responseData);

    if (!response.ok) {
      console.log(responseData);
      const error = new Error(
        responseData.message || ' Failed to add a record'
      );
      throw error;
    }

    const cities = []


    for ( const key in responseData) {
      const city = {
        id: key,
        name: responseData[key].data.name,
        windSpeed: responseData[key].data.wind.speed,
        visibility: responseData[key].data.visibility,
        feelsLike: responseData[key].data.main.feels_like,
        humidity: responseData[key].data.main.humidity,
        temp: responseData[key].data.main.temp,
        tempMax: responseData[key].data.main.temp_max,
        tempMin: responseData[key].data.main.temp_min,
        clouds: responseData[key].data.clouds.all,
        icon: responseData[key].data.weather[0].main,
      
      }
      cities.push(city)
    }
    context.commit('setCities', cities)
  },
};
