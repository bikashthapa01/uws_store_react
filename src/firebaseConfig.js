import { initializeApp } from 'firebase/app';
import { getAuth} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCwZKEJrtXUbryeP0YEiXBHhIAXRCHQV2k",
    authDomain: "clothingstore-cf538.firebaseapp.com",
    projectId: "clothingstore-cf538",
    storageBucket: "clothingstore-cf538.appspot.com",
    messagingSenderId: "846647282017",
    appId: "1:846647282017:web:46c957e008ca6bd4595d20"
};
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);