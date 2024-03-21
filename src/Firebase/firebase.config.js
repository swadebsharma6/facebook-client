
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAQoXWIro9yWTr_9yCLozWlWACnZZuA3zY",
  authDomain: "facebook-17774.firebaseapp.com",
  projectId: "facebook-17774",
  storageBucket: "facebook-17774.appspot.com",
  messagingSenderId: "257179006050",
  appId: "1:257179006050:web:307fe55294a338e1bccd3b"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;