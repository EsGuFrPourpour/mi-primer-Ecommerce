
import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC5_EozsLJOWCH1Jt799ZaNXkG9tRBoBGA",
  authDomain: "nl-repuestos.firebaseapp.com",
  projectId: "nl-repuestos",
  storageBucket: "nl-repuestos.firebasestorage.app",
  messagingSenderId: "107163414161",
  appId: "1:107163414161:web:3d88e56b1a0567aa2e1930",
  measurementId: "G-B92PQMT24H"
};

const app = initializeApp(firebaseConfig);

export const db=getFirestore(app);

/*export async function getProducts() {
    const querySnapshot = await getDocs(collection(db,'products'));
    querySnapshot.forEach(doc =>console.log(`${doc.id} => ${doc.data().name}`))
}*/