import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-database.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyC13K__GbbC3LcuBnjpODwtnpg4qrO7KKA",
  authDomain: "test-98eee.firebaseapp.com",
  databaseURL: "https://test-98eee-default-rtdb.firebaseio.com",
  projectId: "test-98eee",
  storageBucket: "test-98eee.firebasestorage.app",
  messagingSenderId: "106668710337",
  appId: "1:106668710337:web:8b124772941eade4b6b740",
  measurementId: "G-Q52VRX5X3R"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const analytics = getAnalytics(app);

console.log("Firebase App Initialized:", app);
console.log("Realtime Database Initialized:", db);

export { db };

