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
    console.log(responseData);
    // const data = {
    //   name: responseData.city.name,
    //   firstDay: {
    //     // clouds: responseData.list[5].clouds.all,
    //     icon: responseData.list[5].weather[0].main,
    //     tempMax: responseData.list[5].main.feels_like,
    //     tempMin: responseData.list[5].main.feels_like,
    //   },
    //   secondDay: {
    //     icon: responseData.list[14].weather[0].main,
    //     tempMax: responseData.list[14].main.feels_like,
    //     tempMin: responseData.list[14].main.feels_like,
    //   },
    //   thirdDay: {
    //     icon: responseData.list[16].weather[0].main,
    //     tempMax: responseData.list[16].main.feels_like,
    //     tempMin: responseData.list[16].main.feels_like,
    //   },
    //   fourthDay: {
    //     icon: responseData.list[21].weather[0].main,
    //     tempMax: responseData.list[21].main.feels_like,
    //     tempMin: responseData.list[21].main.feels_like,
    //   },
    //   fifthDay: {
    //     icon: responseData.list[27].weather[0].main,
    //     tempMax: responseData.list[27].main.feels_like,
    //     tempMin: responseData.list[27].main.feels_like,
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
        icon: responseData.list[0].weather[0].main,
        tempMax: responseData.list[0].main.feels_like, //mora switch zbog api
        tempMin: responseData.list[4].main.feels_like,
        date: responseData.list[0].dt_txt
      },
      secondDay: {
        icon: responseData.list[8].weather[0].main,
        tempMax: responseData.list[8].main.feels_like,
        tempMin: responseData.list[12].main.feels_like,
        date: responseData.list[8].dt_txt

      },
      thirdDay: {
        icon: responseData.list[16].weather[0].main,
        tempMax: responseData.list[16].main.feels_like,
        tempMin: responseData.list[20].main.feels_like,
        date: responseData.list[16].dt_txt

      },
      fourthDay: {
        icon: responseData.list[21].weather[0].main,
        tempMax: responseData.list[24].main.feels_like,
        tempMin: responseData.list[21].main.feels_like,
        date: responseData.list[21].dt_txt

      },
      fifthDay: {
        icon: responseData.list[27].weather[0].main,
        tempMax: responseData.list[32].main.feels_like,
        tempMin: responseData.list[27].main.feels_like,
        date: responseData.list[27].dt_txt

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
              tempMax: doc.data().dailyData.firstDay.tempMax,
              tempMin: doc.data().dailyData.firstDay.tempMin,
              date: doc.data().dailyData.firstDay.date,
            },
            secondDay: {
              icon: doc.data().dailyData.secondDay.icon,
              tempMax: doc.data().dailyData.secondDay.tempMax,
              tempMin: doc.data().dailyData.secondDay.tempMin,
              date: doc.data().dailyData.secondDay.date,
            },
            thirdDay: {
              icon: doc.data().dailyData.thirdDay.icon,
              tempMax: doc.data().dailyData.thirdDay.tempMax,
              tempMin: doc.data().dailyData.thirdDay.tempMin,
              date: doc.data().dailyData.thirdDay.date,
            },
            fourthDay: {
              icon: doc.data().dailyData.fourthDay.icon,
              tempMax: doc.data().dailyData.fourthDay.tempMax,
              tempMin: doc.data().dailyData.fourthDay.tempMin,
              date: doc.data().dailyData.fourthDay.date,
            },
            fifthDay: {
              icon: doc.data().dailyData.fifthDay.icon,
              tempMax: doc.data().dailyData.fifthDay.tempMax,
              tempMin: doc.data().dailyData.fifthDay.tempMin,
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
