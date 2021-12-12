// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import {
  getFirestore,
  collection,
  getDocs,
  onSnapshot,
  addDoc,
  enableIndexedDbPersistence
} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyBxYtIkK4bvN4tU0oY3PtkfPjXkJpP7SNw",
  authDomain: "tracking-ac440.firebaseapp.com",
  databaseURL: "https://tracking-ac440-default-rtdb.firebaseio.com",
  projectId: "tracking-ac440",
  storageBucket: "tracking-ac440.appspot.com",
  messagingSenderId: "878931765860",
  appId: "1:878931765860:web:ff6aec88d4369bb633cd71"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function getSMs(db) {
  const SMsCol = collection(db, "SMs");
  const SMsSnapshot = await getDocs(SMsCol);
  const SMsList = SMsSnapshot.docs.map((doc) => doc);
  return SMsList;
}

enableIndexedDbPersistence(db).catch((err) => {
  if (err.code == "failed-precondition") {
    // Multiple tabs open, persistence can only be enabled
    // in one tab at a a time.
    console.log("Persistence failed");
  } else if (err.code == "unimplemented") {
    // The current browser does not support all of the
    // features required to enable persistence
    console.log("Persistence is'nt valid");
  }
});

const unsub = onSnapshot(collection(db, "SMs"), (doc) => {
  //   console.log(doc.docChanges());
  doc.docChanges().forEach((change) => {
    // console.log(change, change.doc.data(), change.doc.id);
    if (change.type === "added") {
      //Call render function in UI
      renderSMs(change.doc.data(), change.doc.id);
    }
    if (change.type === "removed") {
      //do something
      removSM(change.doc.id);
    }
  });
});

//add new SMs
const form = document.getElementById("#formSM");
form.addEventListener("submit", (event) => {
  addDoc(collection(db, "SMs"), {
    FirstName: form.fname.value,
    Lastname: form.lname.value,
    Rank: form.rank.value,
    EYECOLOR: form.ecolor.value,
    HAIRCOLOR: form.hcolor.value,
    Hight: form.h.value,
    ACFTdate: form.acftdate.value,
    ACFTscore: form.acftscore.value,
    pushups: form.pushup.value,
    situps: form.situp.value,
    runTime: form.run.value,
    qualDate: form.qualdate.value,
    qualScore: form.qualscore.value,
    milEmail: form.memail.value,
    civlEmil: form.cemail.value,
    cellNumber: form.phone.value,
    DOB: form.dob.value,
    Address: form.textarea1.value
  }).catch((error) => console.log(error));
  form.fname.value = "";
  form.lname.value = "";
  form.rank.value = "";
  form.ecolor.value = "";
  form.hcolor.value = "";
  form.h.value = "";
  form.acftdate.value = "";
  form.acftscore.value = "";
  form.pushup.value = "";
  form.situp.value = "";
  form.run.value = "";
  form.qualdate.value = "";
  form.qualscore.value = "";
  form.memail.value = "";
  form.cemail.value = "";
  form.phone.value = "";
  form.dob.value = "";
  form.textarea1.value = "";
});
