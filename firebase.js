// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-app.js";
import { getAuth, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-auth.js";
export const provider = new GoogleAuthProvider();
const firebaseConfig = {
  apiKey: "AIzaSyDCKDg3y5oRm1YJJNkP38j54MqbClfVvbgM",
  authDomain: "study-helper-bd.firebaseapp.com",
  projectId: "study-helper-bd",
  storageBucket: "study-helper-bd.firebasestorage.app",
  messagingSenderId: "436246752140",
  appId: "1:436246752140:web:bd8104101fb4ad455744a9",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);


