import { initializeApp, getApps, FirebaseApp } from 'firebase/app';
import { getFirestore, Firestore } from 'firebase/firestore';
import { getAuth, Auth } from 'firebase/auth';

// Standard Firebase config loaded from environment variables or demo fallback
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "demo-nos-sa-uno-key",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "nos-sa-uno.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "nos-sa-uno",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "nos-sa-uno.appspot.com",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "1234567890",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:1234567890:web:abcdef123456"
};

let app: FirebaseApp;
let db: Firestore | null = null;
let auth: Auth | null = null;
let isRealFirebaseConnected = false;

try {
  if (!getApps().length) {
    app = initializeApp(firebaseConfig);
  } else {
    app = getApps()[0];
  }

  // If real API key is present in env, initialize full Firebase services
  if (import.meta.env.VITE_FIREBASE_API_KEY) {
    db = getFirestore(app);
    auth = getAuth(app);
    isRealFirebaseConnected = true;
    console.log("🔥 Firebase initialized successfully with cloud connection.");
  } else {
    console.log("⚡ Firebase initialized in Hybrid Demo mode with local reactive sync engine.");
  }
} catch (e) {
  console.warn("Firebase SDK initialization notice:", e);
}

export { app, db, auth, isRealFirebaseConnected };
