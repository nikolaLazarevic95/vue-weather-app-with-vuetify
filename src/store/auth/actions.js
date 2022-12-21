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
  async getLatitudeLongitude(context, payload) {
    const response = await fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q=${payload.city}&appid=${context.rootGetters.getAPIKey}`
    );

    const responseData = await response.json();
    // console.log(responseData);

    if (!response.ok) {
      const error = new Error(
        responseData.message || " Failed to get geocoding done for this city"
      );
      throw error;
    }

    const data = {
      name: responseData[0].name,
      lat: responseData[0].lat,
      lon: responseData[0].lon,
      state: responseData[0].state,
    };

    // console.log(data);

    context.commit("setGeocoding", data);
  },
};
