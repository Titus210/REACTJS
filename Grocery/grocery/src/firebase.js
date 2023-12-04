import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// const firebaseConfig = {
//     apiKey: process.env.GREENMART_APP_API_KEY,
//     authDomain: process.env.GREENMART_APP_AUTH_DOMAIN,
//     projectId: process.env.GREENMART_APP_PROJECT_ID,
//     storageBucket: process.env.GREENMART_APP_STORAGE_BUCKET,
//     messagingSenderId: process.env.GREENMART_APP_MESSAGING_SENDER_ID,
//     appId: process.env.GREENMART_APP_APP_ID,
// };

const firebaseConfig = {
    apiKey: "AIzaSyD4-ohRlZyfMbfUBUlYHhs_guppTXy0P84",
    authDomain: "greenmart-development.firebaseapp.com",
    projectId: "greenmart-development",
    storageBucket: "greenmart-development.appspot.com",
    messagingSenderId: "404501552376",
    appId: "1:404501552376:web:7abc144f34b7eb57896f0d"
  };
  

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
