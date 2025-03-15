import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

// Firebase-Konfiguration (wie vorher)
const firebaseConfig = {
    apiKey: "AIzaSyCeTkkSTm3I1iNtd_zNLS9AtFNOXVCIvcQ",
    authDomain: "bring-fd891.firebaseapp.com",
    projectId: "bring-fd891",
    storageBucket: "bring-fd891.firebasestorage.app",
    messagingSenderId: "423866146447",
    appId: "1:423866146447:web:f597e70809d7c32b85dafa"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const logoutBtn = document.getElementById("logout-btn");

// ✅ Logout-Button
logoutBtn.addEventListener("click", () => {
  signOut(auth).then(() => {
    console.log("Erfolgreich abgemeldet");
    window.location.href = "index.html"; // Zurück zum Login
  }).catch((error) => {
    console.error("Fehler beim Abmelden:", error);
  });
});

// ✅ Nutzerstatus überwachen
onAuthStateChanged(auth, (user) => {
  if (!user) {
    // Wenn nicht eingeloggt → zurück zur Login-Seite
    window.location.href = "index.html";
  }
});
