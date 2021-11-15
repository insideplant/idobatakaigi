import firebase from 'firebase';

// import firebase from "firebase/app";
// import "firebase/app";
// import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBg_FUhLQ_oqTLtnjuLbAdBcSjKrhYsTP8",
  authDomain: "idobatakaigi2-a9e03.firebaseapp.com",
  databaseURL: "https://idobatakaigi2-a9e03-default-rtdb.firebaseio.com",
  projectId: "idobatakaigi2-a9e03",
  storageBucket: "idobatakaigi2-a9e03.appspot.com",
  messagingSenderId: "287083912843",
  appId: "1:287083912843:web:5961ec7f4bc134f0b37e8e"
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const messagesRef = database.ref('messages');

export const pushMessage = ({ name, text }) => {
  messagesRef.push({name, text});
};