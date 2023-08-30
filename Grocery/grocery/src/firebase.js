import firebase from 'firebase/app';
import "firebase/auth"
import { initializeApp } from "firebase/app";


const firebaseConfig = {
    apiKey: process.env.GREENMART_APP_API_KEY,
    authDomain: process.env.GREENMART_APP_AUTH_DOMAIN,
    projectId: process.env.GREENMART_APP_PROJECT_ID,
    storageBucket: process.env.GREENMART_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.GREENMART_APP_MESSAGING_SENDER_ID,
    appId: process.env.GREENMART_APP_APP_ID,
}

const app = firebase.initializeApp(firebaseConfig)

export const auth = app.auth();
export default app;


