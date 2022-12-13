import { db } from "@/firebase";
import {
  collection,
  // onSnapshot,
  addDoc,
  // doc,
  // deleteDoc,
  // updateDoc,
} from "firebase/firestore";

export default {
  async getDailyCities(context) {
    const userCities = context.rootGetters.getCurrCityNamesArray;
    // const APIKey = context.rootGetters.getAPIKey

    // let dailyCitiesData = [];
    for (let i = 0; i < userCities.length; i++) {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${userCities[i]}&appid=${context.rootGetters.getAPIKey}&units=metric`
      );

      const responseData = await response.json();
      // console.log(responseData);
      const data = {
        name: responseData.city.name,
        firstDay: {
          // clouds: responseData.list[5].clouds.all,
          icon: responseData.list[5].weather[0].main,
          tempMin: responseData.list[5].main.temp_min,
          tempMax: responseData.list[5].main.temp_max,
        },
        secondDay: {
          icon: responseData.list[13].weather[0].main,
          tempMin: responseData.list[13].main.temp_min,
          tempMax: responseData.list[13].main.temp_max,
        },
        thirdDay: {
          icon: responseData.list[21].weather[0].main,
          tempMin: responseData.list[21].main.temp_min,
          tempMax: responseData.list[21].main.temp_max,
        },
        fourthDay: {
          icon: responseData.list[29].weather[0].main,
          tempMin: responseData.list[29].main.temp_min,
          tempMax: responseData.list[29].main.temp_max,
        },
        fifthDay: {
          icon: responseData.list[37].weather[0].main,
          tempMin: responseData.list[37].main.temp_min,
          tempMax: responseData.list[37].main.temp_max,
        },
      };

      await addDoc(collection(db, "daily"), {
        data: data,
      });

      // dailyCitiesData.push(data);
    }

    // console.log(userCities);
    // console.log(dailyCitiesData);
    // if (!response.ok) {
    //   const error = new Error(
    //     responseData.message || " Failed to get Daily weather for this city"
    //   );
    //   throw error;
    // }

    // await addDoc(collection(db, "cities"), {
    //   //
    // });
  },
};
