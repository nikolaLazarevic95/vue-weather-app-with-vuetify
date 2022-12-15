// import { db } from "@/firebase";
// // import { collection, getDocs, onSnapshot } from "firebase/firestore";
// import {
//   collection,
//   onSnapshot,
//   addDoc,
//   doc,
//   deleteDoc,
//   // updateDoc,
// } from "firebase/firestore";

export default {
  async currAirPollutionCurrCity(context, payload) {
    const response =
      await fetch(`http://api.openweathermap.org/data/2.5/air_pollution?lat=${payload.lat}&lon=${payload.lon}&appid=${context.rootGetters.getAPIKey}
        `);

    const responseData = await response.json();
    // console.log(responseData);

    const data = {
      aqi: responseData.list[0].main.aqi,
      carbonMonoxide: responseData.list[0].components.co,
      nitrogenMonoxide: responseData.list[0].components.no,
      nitrogenDioxide: responseData.list[0].components.no2,
      ammonia: responseData.list[0].components.nh3,
    };

    // console.log(data);
    context.commit("setCurrAirPollutionCurrCity", data);
  },
  async forecastAirPollutionCurrCity(context, payload) {
    const response =
      await fetch(`http://api.openweathermap.org/data/2.5/air_pollution/forecast?lat=${payload.lat}&lon=${payload.lon}&cnt=5&appid=${context.rootGetters.getAPIKey}
        `);

    const responseData = await response.json();
    console.log(responseData);

    const data = {
      firstDay: {
        aqi: responseData.list[24].main.aqi,
        carbonMonoxide: responseData.list[24].components.co,
        nitrogenMonoxide: responseData.list[24].components.no,
        nitrogenDioxide: responseData.list[24].components.no2,
        ammonia: responseData.list[24].components.nh3,
        date: responseData.list[24].dt,
      },
      secondDay: {
        aqi: responseData.list[48].main.aqi,
        carbonMonoxide: responseData.list[48].components.co,
        nitrogenMonoxide: responseData.list[48].components.no,
        nitrogenDioxide: responseData.list[48].components.no2,
        ammonia: responseData.list[48].components.nh3,
        date: responseData.list[48].dt,
      },
      fourthDay: {
        aqi: responseData.list[72].main.aqi,
        carbonMonoxide: responseData.list[72].components.co,
        nitrogenMonoxide: responseData.list[72].components.no,
        nitrogenDioxide: responseData.list[72].components.no2,
        ammonia: responseData.list[72].components.nh3,
        date: responseData.list[72].dt,
      },
      fourthHour: {
        aqi: responseData.list[96].main.aqi,
        carbonMonoxide: responseData.list[96].components.co,
        nitrogenMonoxide: responseData.list[96].components.no,
        nitrogenDioxide: responseData.list[96].components.no2,
        ammonia: responseData.list[96].components.nh3,
        date: responseData.list[96].dt,
      },
      fifthDay: {
        aqi: responseData.list[102].main.aqi,
        carbonMonoxide: responseData.list[102].components.co,
        nitrogenMonoxide: responseData.list[102].components.no,
        nitrogenDioxide: responseData.list[102].components.no2,
        ammonia: responseData.list[102].components.nh3,
        date: responseData.list[102].dt,
      },
    };

    console.log(data);
    context.commit("setForecastAirPollutionCurrCity", data);
  },
};
