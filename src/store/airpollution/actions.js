import { db } from "@/firebase";
import {
  collection,
  onSnapshot,
  // addDoc,
  // doc,
  // deleteDoc,
  // updateDoc,
} from "firebase/firestore";

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
    // console.log(responseData);

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
      thirdDay: {
        aqi: responseData.list[72].main.aqi,
        carbonMonoxide: responseData.list[72].components.co,
        nitrogenMonoxide: responseData.list[72].components.no,
        nitrogenDioxide: responseData.list[72].components.no2,
        ammonia: responseData.list[72].components.nh3,
        date: responseData.list[72].dt,
      },
      fourthDay: {
        aqi: responseData.list[96].main.aqi,
        carbonMonoxide: responseData.list[96].components.co,
        nitrogenMonoxide: responseData.list[96].components.no,
        nitrogenDioxide: responseData.list[96].components.no2,
        ammonia: responseData.list[96].components.nh3,
        date: responseData.list[96].dt,
      },
      fifthDay: {
        aqi: responseData.list[100].main.aqi,
        carbonMonoxide: responseData.list[100].components.co,
        nitrogenMonoxide: responseData.list[100].components.no,
        nitrogenDioxide: responseData.list[100].components.no2,
        ammonia: responseData.list[100].components.nh3,
        date: responseData.list[100].dt,
      },
    };

    // console.log(data);
    context.commit("setForecastAirPollutionCurrCity", data);
  },

  async getAllCitiesCurrPollution(context) {
    onSnapshot(collection(db, "cities"), (querySnapshot) => {
      const cities = [];
      querySnapshot.forEach((doc) => {
        const city = {
          id: doc.id,
          name: doc.data().data.name,
          aqi: doc.data().currPollution.aqi,
          ammonia: doc.data().currPollution.ammonia,
          carbonMonoxide: doc.data().currPollution.carbonMonoxide,
          nitrogenDioxide: doc.data().currPollution.nitrogenDioxide,
          nitrogenMonoxide: doc.data().currPollution.nitrogenMonoxide,
        };
        cities.push(city);
      });
      // console.log(cities);
      context.commit("setAllCitiesCurrPollution", cities);
    });
  },

  async getAllCitiesForecastPollution(context) {
    onSnapshot(collection(db, "cities"), (querySnapshot) => {
      const cities = [];
      querySnapshot.forEach((doc) => {
        const city = {
          id: doc.id,
          name: doc.data().data.name,
          forecastData: {
            firstDay: {
              aqi: doc.data().forecastPollution.firstDay.aqi,
              ammonia: doc.data().forecastPollution.firstDay.ammonia,
              carbonMonoxide:
                doc.data().forecastPollution.firstDay.carbonMonoxide,
              nitrogenDioxide:
                doc.data().forecastPollution.firstDay.nitrogenDioxide,
              nitrogenMonoxide:
                doc.data().forecastPollution.firstDay.nitrogenMonoxide,
              date:
                doc.data().forecastPollution.firstDay.date,
            },
            secondDay: {
              aqi: doc.data().forecastPollution.secondDay.aqi,
              ammonia: doc.data().forecastPollution.secondDay.ammonia,
              carbonMonoxide:
                doc.data().forecastPollution.secondDay.carbonMonoxide,
              nitrogenDioxide:
                doc.data().forecastPollution.secondDay.nitrogenDioxide,
              nitrogenMonoxide:
                doc.data().forecastPollution.secondDay.nitrogenMonoxide,
                date:
                doc.data().forecastPollution.secondDay.date,
            },
            thirdDay: {
              aqi: doc.data().forecastPollution.thirdDay.aqi,
              ammonia: doc.data().forecastPollution.thirdDay.ammonia,
              carbonMonoxide:
                doc.data().forecastPollution.thirdDay.carbonMonoxide,
              nitrogenDioxide:
                doc.data().forecastPollution.thirdDay.nitrogenDioxide,
              nitrogenMonoxide:
                doc.data().forecastPollution.thirdDay.nitrogenMonoxide,
                date:
                doc.data().forecastPollution.thirdDay.date,
            },
            fourthDay: {
              aqi: doc.data().forecastPollution.fourthDay.aqi,
              ammonia: doc.data().forecastPollution.fourthDay.ammonia,
              carbonMonoxide:
                doc.data().forecastPollution.fourthDay.carbonMonoxide,
              nitrogenDioxide:
                doc.data().forecastPollution.fourthDay.nitrogenDioxide,
              nitrogenMonoxide:
                doc.data().forecastPollution.fourthDay.nitrogenMonoxide,
                date:
                doc.data().forecastPollution.fourthDay.date,
            },
            fifthDay: {
              aqi: doc.data().forecastPollution.fifthDay.aqi,
              ammonia: doc.data().forecastPollution.fifthDay.ammonia,
              carbonMonoxide:
                doc.data().forecastPollution.fifthDay.carbonMonoxide,
              nitrogenDioxide:
                doc.data().forecastPollution.fifthDay.nitrogenDioxide,
              nitrogenMonoxide:
                doc.data().forecastPollution.fifthDay.nitrogenMonoxide,
                date:
                doc.data().forecastPollution.fifthDay.date,
            },
          },
        };
        cities.push(city);

        context.commit("setAllCitiesForecastPollution", cities);
      });
    });
  },
};
