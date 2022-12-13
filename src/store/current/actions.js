import { db } from "@/firebase";
// import { collection, getDocs, onSnapshot } from "firebase/firestore";
import {
  collection,
  onSnapshot,
  addDoc,
  doc,
  deleteDoc,
  // updateDoc,
} from "firebase/firestore";

const citiesCollectionRef = collection(db, "cities");
export default {
  async getCurrentWeather(context, payload) {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${payload.city}&appid=${payload.APIkey}&units=metric`
    );

    const responseData = await response.json();

    // console.log(responseData);
    if (!response.ok) {
      const error = new Error(
        responseData.message || " Failed to get Curr weather for this city"
      );
      throw error;
    }
    const city = [];

    const data = {
      name: responseData.name,
      windSpeed: responseData.wind.speed,
      visibility: responseData.visibility,
      feelsLike: responseData.main.feels_like,
      humidity: responseData.main.humidity,
      temp: responseData.main.temp,
      tempMax: responseData.main.temp_max,
      tempMin: responseData.main.temp_min,
      clouds: responseData.clouds.all,
      icon: responseData.weather[0].main,
    };
    city.push(data);

    context.commit("setCurrentWeather", city);
  },

  async updUserCities(context, payload) {
    // const userId = context.rootGetters.userId
    //!                                                    old
    // const response = await fetch(
    //   `https://vue-weather-app-28d8b-default-rtdb.firebaseio.com/cities.json`, //!
    //   {
    //     method: "POST",
    //     headers: {
    //       //mora header
    //       "Content-Type": "application/json",
    //       Accept: "application/json",
    //     },
    //     body: JSON.stringify({
    //       data: payload.data,
    //     }),
    //   }
    // );
    // const responseData = await response.json();
    // if (!response.ok) {
    //   const error = new Error(responseData.message || "Failed to fetch cities");
    //   throw error;
    // }
    await addDoc(collection(db, "cities"), {
      data: payload.data,
    });
  },

  // async getUserCities(context) {
  //   const response = await fetch(
  //     `https://vue-weather-app-28d8b-default-rtdb.firebaseio.com/cities/.json`
  //   );

  //   const responseData = await response.json();
  //   // console.log(responseData);

  //   if (!response.ok) {
  //     // console.log(responseData);
  //     const error = new Error(
  //       responseData.message || " Failed to get user cities"
  //     );
  //     throw error;
  //   }

  //   const cities = [];

  //   for (const key in responseData) {
  //     const city = {
  //       id: key,
  //       name: responseData[key].data.name,
  //       windSpeed: responseData[key].data.windSpeed,
  //       visibility: responseData[key].data.visibility,
  //       feelsLike: responseData[key].data.feelsLike,
  //       humidity: responseData[key].data.humidity,
  //       temp: responseData[key].data.temp,
  //       tempMax: responseData[key].data.tempMax,
  //       tempMin: responseData[key].data.tempMin,
  //       clouds: responseData[key].clouds,
  //       icon: responseData[key].data.icon,
  //     };
  //     cities.push(city);
  //   }
  //   context.commit("setCities", cities);
  // },

  // async getUserCities() { //get single
  //   const querySnapshot = await getDocs(collection(db, "cities"));
  //   let cities = []
  //   querySnapshot.forEach((doc) => {
  //     console.log(`${doc.id} => ${doc.data()}`);
  //     const city = {
  //       id:doc.id,
  //       weather:doc.data().weather,
  //       windy : doc.data().windy
  //     }
  //     cities.push(city);
  //   });
  //   console.log(cities);
  // },

  getUserCities(context) {
    // get real time updates
    onSnapshot(collection(db, "cities"), (querySnapshot) => {
      const cities = [];
      const cityNames = [];
      querySnapshot.forEach((doc) => {
        const city = {
          id: doc.id,
          name: doc.data().data.name,
          windSpeed: doc.data().data.windSpeed,
          visibility: doc.data().data.visibility,
          feelsLike: doc.data().data.feelsLike,
          humidity: doc.data().data.humidity,
          temp: doc.data().data.temp,
          tempMax: doc.data().data.tempMax,
          tempMin: doc.data().data.tempMin,
          clouds: doc.data().clouds,
          icon: doc.data().data.icon,
        };

        cityNames.push(doc.data().data.name);

        cities.push(city);
      });
      context.commit("setCities", cities);
      context.commit("setCityNames", cityNames, { root: true });
    });
  },

  deleteCity(context) {
    const id = context.rootGetters.getSelectedID;

    console.log(id);
    deleteDoc(doc(citiesCollectionRef, id));
  },

  // updateCity(context) {  //! testing update
  //   const id = context.rootGetters.getSelectedID;

  //   updateDoc(doc(citiesCollectionRef, id), {
  //     "data.name": 'Belgrade'  // nested
  //     name: 'Belgrade'  // direct
  //   })
  // }
};
