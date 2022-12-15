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
  async getHourlyDataCurrCity(context, payload) {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${payload.city}&cnt=5&appid=${context.rootGetters.getAPIKey}&units=metric`
    );

    const responseData = await response.json();
    // console.log(responseData);

    if (!response.ok) {
      const error = new Error(
        responseData.message || " Failed to get hourly weather for this city"
      );
      throw error;
    }

    const data = {
      name: responseData.city.name,
      firstHour: {
        icon: responseData.list[0].weather[0].main,
        temp: responseData.list[0].main.feels_like, //mora switch zbog api
        date: responseData.list[0].dt_txt,
      },
      secondHour: {
        icon: responseData.list[1].weather[0].main,
        temp: responseData.list[1].main.feels_like,
        date: responseData.list[1].dt_txt,
      },
      thirdHour: {
        icon: responseData.list[2].weather[0].main,
        temp: responseData.list[2].main.feels_like,
        date: responseData.list[2].dt_txt,
      },
      fourthHour: {
        icon: responseData.list[3].weather[0].main,
        temp: responseData.list[3].main.feels_like,
        date: responseData.list[3].dt_txt,
      },
      fifthHour: {
        icon: responseData.list[4].weather[0].main,
        temp: responseData.list[4].main.feels_like,
        date: responseData.list[4].dt_txt,
      },
    };
    // console.log(data);

    context.commit("setHourlyCurrCityData", data);
  },

  getHourlyDataAllCities(context) {
    onSnapshot(collection(db, "cities"), (querySnapshot) => {
      const cities = [];
      querySnapshot.forEach((doc) => {
        const city = {
          id: doc.id,
          name: doc.data().data.name,
          hourlyData: {
            firstHour: {
              icon: doc.data().hourlyData.firstHour.icon,
              temp: doc.data().hourlyData.firstHour.temp,
              date: doc.data().hourlyData.firstHour.date,
            },
            secondHour: {
              icon: doc.data().hourlyData.secondHour.icon,
              temp: doc.data().hourlyData.secondHour.temp,
              date: doc.data().hourlyData.secondHour.date,
            },
            thirdHour: {
              icon: doc.data().hourlyData.thirdHour.icon,
              temp: doc.data().hourlyData.thirdHour.temp,
              date: doc.data().hourlyData.thirdHour.date,
            },
            fourthHour: {
              icon: doc.data().hourlyData.fourthHour.icon,
              temp: doc.data().hourlyData.fourthHour.temp,
              date: doc.data().hourlyData.fourthHour.date,
            },
            fifthHour: {
              icon: doc.data().hourlyData.fifthHour.icon,
              temp: doc.data().hourlyData.fifthHour.temp,
              date: doc.data().hourlyData.fifthHour.date,
            },
          },
        };
        cities.push(city)
      });
      context.commit("setHourlyDataAllCities", cities);

    });
  },
};
