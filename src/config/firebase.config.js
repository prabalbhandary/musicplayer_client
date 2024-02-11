import { getApp, getApps, initializeApp } from "firebase/app"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyDV5WdIzjsEkFDBiK8Oj82BrzMg2XKl5Ng",
    authDomain: "project-musicapp-5e5e7.firebaseapp.com",
    projectId: "project-musicapp-5e5e7",
    storageBucket: "project-musicapp-5e5e7.appspot.com",
    messagingSenderId: "402539088093",
    appId: "1:402539088093:web:81b750667e53c011397334"
}

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const storage = getStorage(app);
export { app, storage };