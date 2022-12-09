// import { db } from "@/firebase";
// import {
//     collection,
//     onSnapshot,
//     addDoc,
//     doc,
//     deleteDoc,
//     // updateDoc,
//   } from "firebase/firestore";

export default {
  async getDailyCities(_,payload) {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${payload.city}&appid=${payload.APIkey}&units=metric`
    );

    const responseData = await response.json();

    console.log(responseData);
    if (!response.ok) {
      const error = new Error(
        responseData.message || " Failed to get Daily weather for this city"
      );
      throw error;
    }
  },
};
