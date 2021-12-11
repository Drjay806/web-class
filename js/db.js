// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import {
  getFirestore,
  collection,
  getDocs,
  onSnapshot
} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxYtIkK4bvN4tU0oY3PtkfPjXkJpP7SNw",
  authDomain: "tracking-ac440.firebaseapp.com",
  projectId: "tracking-ac440",
  storageBucket: "tracking-ac440.appspot.com",
  messagingSenderId: "878931765860",
  appId: "1:878931765860:web:ff6aec88d4369bb633cd71"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function getTasks(db) {
  const SMsCol = collection(db, "SMs");
  const SMsSnapshot = await getDocs(SMsCol);
  const SMsList = SMsSnapshot.docs.map((doc) => doc);
  return SMsList;
}

const unsub = onSnapshot(collection(db, "tasks"), (doc) => {
  //   console.log(doc.docChanges());
  doc.docChanges().forEach((change) => {
    // console.log(change, change.doc.data(), change.doc.id);
    if (change.type === "added") {
      //Call render function in UI
      renderTask(change.doc.data(), change.doc.id);
    }
    if (change.type === "removed") {
      //do something
    }
  });
});
