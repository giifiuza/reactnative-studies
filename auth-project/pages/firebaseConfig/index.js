import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBbJpeHWsNYKrg3yEA5GImwA7REpvitWjI",
  authDomain: "projeto-reactnative-817f3.firebaseapp.com",
  projectId: "projeto-reactnative-817f3",
  storageBucket: "projeto-reactnative-817f3.appspot.com",
  messagingSenderId: "500163647096",
  appId: "1:500163647096:web:973253bfcc94516cfc7f8d"
};

const app = initializeApp(firebaseConfig);

export default app