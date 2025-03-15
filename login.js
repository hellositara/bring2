import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

// Firebase-Konfiguration (ersetzen mit deinen Werten)
const firebaseConfig = {
    apiKey: "AIzaSyCeTkkSTm3I1iNtd_zNLS9AtFNOXVCIvcQ",
    authDomain: "bring-fd891.firebaseapp.com",
    projectId: "bring-fd891",
    storageBucket: "bring-fd891.firebasestorage.app",
    messagingSenderId: "423866146447",
    appId: "1:423866146447:web:f597e70809d7c32b85dafa"
};

// Firebase initialisieren
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const loginBtn = document.getElementById("login-btn");

// ✅ LOGIN mit Google
loginBtn.addEventListener("click", () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log("Eingeloggt als:", result.user.displayName);
      // ✅ Weiterleitung zur Hauptseite nach erfolgreichem Login
      window.location.href = "main.html";
    })
    .catch((error) => {
      console.error("Fehler beim Einloggen:", error);
    });
});

// ✅ Wenn der Nutzer bereits eingeloggt ist, direkt zur Hauptseite weiterleiten
onAuthStateChanged(auth, (user) => {
  if (user) {
    window.location.href = "main.html";
  }
});
