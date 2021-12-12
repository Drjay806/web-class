import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
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
const auth = getAuth(app);

onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("user logged in:");
    location.href = "/accounthtml/account.html";
    getSMs(db).then((snapshot) => {});
  } else {
    // User is signed out
    console.log("user logged out:");
  }
});

//sign up
const signupForm = document.querySelector("#signup-form");

signupForm.addEventListener("submit", (e) => {
  e.preventDefault();
  //get user info
  const email = signupForm["sign-up-email"].value;
  const password = signupForm["sign-up-password"].value;
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      signupForm.reset();
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
});

//logout
function out() {
  signOut(auth)
    .then(() => {
      location.href = "/index.html";
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
}
// LOGIN

const loginForm = document.querySelector("#login-form");
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  //get user info
  const email = loginForm["sign-in-email"].value;
  const password = loginForm["sign-in-password"].value;
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      loginForm.reset();
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
});
