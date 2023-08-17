import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyBI5g77321VxOtXiW1xJyaYFUyIvhOoTPs",
  authDomain: "imgupload-ad4ad.firebaseapp.com",
  projectId: "imgupload-ad4ad",
  storageBucket: "imgupload-ad4ad.appspot.com",
  messagingSenderId: "772997770053",
  appId: "1:772997770053:web:a90c54efbd989986dd2c2c",
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
