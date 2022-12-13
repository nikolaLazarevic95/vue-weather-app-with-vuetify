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
  async getDailyDataCurrCity(context, payload) {
    // const userCities = context.rootGetters.getCurrCityNamesArray;
    // const APIKey = context.rootGetters.getAPIKey

    // let dailyCitiesData = [];
    // for (let i = 0; i < userCities.length; i++) {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${payload.city}&appid=${context.rootGetters.getAPIKey}&units=metric`
    );

    const responseData = await response.json();
    // console.log(responseData);
    // const data = {
    //   name: responseData.city.name,
    //   firstDay: {
    //     // clouds: responseData.list[5].clouds.all,
    //     icon: responseData.list[5].weather[0].main,
    //     tempMin: responseData.list[5].main.temp_min,
    //     tempMax: responseData.list[5].main.temp_max,
    //   },
    //   secondDay: {
    //     icon: responseData.list[13].weather[0].main,
    //     tempMin: responseData.list[13].main.temp_min,
    //     tempMax: responseData.list[13].main.temp_max,
    //   },
    //   thirdDay: {
    //     icon: responseData.list[21].weather[0].main,
    //     tempMin: responseData.list[21].main.temp_min,
    //     tempMax: responseData.list[21].main.temp_max,
    //   },
    //   fourthDay: {
    //     icon: responseData.list[29].weather[0].main,
    //     tempMin: responseData.list[29].main.temp_min,
    //     tempMax: responseData.list[29].main.temp_max,
    //   },
    //   fifthDay: {
    //     icon: responseData.list[37].weather[0].main,
    //     tempMin: responseData.list[37].main.temp_min,
    //     tempMax: responseData.list[37].main.temp_max,
    //   },
    // };

    // await addDoc(collection(db, "daily"), {
    //   data: data,
    // });

    // dailyCitiesData.push(data);
    // } --od for loopa

    // console.log(userCities);
    // console.log(dailyCitiesData);

    if (!response.ok) {
      const error = new Error(
        responseData.message || " Failed to get Daily weather for this city"
      );
      throw error;
    }

    const data = {
      name: responseData.city.name,
      firstDay: {
        icon: responseData.list[5].weather[0].main,
        tempMin: responseData.list[5].main.temp_min,
        tempMax: responseData.list[5].main.temp_max,
        date: responseData.list[5].dt_txt
      },
      secondDay: {
        icon: responseData.list[13].weather[0].main,
        tempMin: responseData.list[13].main.temp_min,
        tempMax: responseData.list[13].main.temp_max,
        date: responseData.list[13].dt_txt

      },
      thirdDay: {
        icon: responseData.list[21].weather[0].main,
        tempMin: responseData.list[21].main.temp_min,
        tempMax: responseData.list[21].main.temp_max,
        date: responseData.list[21].dt_txt

      },
      fourthDay: {
        icon: responseData.list[29].weather[0].main,
        tempMin: responseData.list[29].main.temp_min,
        tempMax: responseData.list[29].main.temp_max,
        date: responseData.list[29].dt_txt

      },
      fifthDay: {
        icon: responseData.list[37].weather[0].main,
        tempMin: responseData.list[37].main.temp_min,
        tempMax: responseData.list[37].main.temp_max,
        date: responseData.list[37].dt_txt

      },
    };

    context.commit("setDailyDataCurrCity", data);

    // await addDoc(collection(db, "cities"), {
    //   //
    // });
  },

  async getDailyDataAllCities(context) {
    onSnapshot(collection(db, "cities"), (querySnapshot) => {
      const cities = [];
      querySnapshot.forEach((doc) => {
        const city = {
          id: doc.id,
          name: doc.data().data.name,
          dailyData: {
            firstDay: {
              icon: doc.data().dailyData.firstDay.icon,
              tempMin: doc.data().dailyData.firstDay.tempMin,
              tempMax: doc.data().dailyData.firstDay.tempMax,
              date: doc.data().dailyData.firstDay.date,
            },
            secondDay: {
              icon: doc.data().dailyData.secondDay.icon,
              tempMin: doc.data().dailyData.secondDay.tempMin,
              tempMax: doc.data().dailyData.secondDay.tempMax,
              date: doc.data().dailyData.secondDay.date,
            },
            thirdDay: {
              icon: doc.data().dailyData.thirdDay.icon,
              tempMin: doc.data().dailyData.thirdDay.tempMin,
              tempMax: doc.data().dailyData.thirdDay.tempMax,
              date: doc.data().dailyData.thirdDay.date,
            },
            fourthDay: {
              icon: doc.data().dailyData.fourthDay.icon,
              tempMin: doc.data().dailyData.fourthDay.tempMin,
              tempMax: doc.data().dailyData.fourthDay.tempMax,
              date: doc.data().dailyData.fourthDay.date,
            },
            fifthDay: {
              icon: doc.data().dailyData.fifthDay.icon,
              tempMin: doc.data().dailyData.fifthDay.tempMin,
              tempMax: doc.data().dailyData.fifthDay.tempMax,
              date: doc.data().dailyData.fifthDay.date,
            },
          },
        };
        cities.push(city)
      });
      context.commit("setDailyDataAllCities", cities);
    });
  },
};
