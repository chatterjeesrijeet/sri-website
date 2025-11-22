/*
  Firebase config example.
  1) Create a Firebase project at https://console.firebase.google.com
  2) Enable Email Link sign-in method under Authentication -> Sign-in method
  3) Create a Firestore database (in test mode for dev) and a collection `bookings` and `meta` for counters.
  4) Replace the placeholder values below with your project's config and rename this file to `firebase-config.js`.

  Firestore rules (simple example) - tighten for production:
  service cloud.firestore {
    match /databases/{database}/documents {
      match /bookings/{doc} {
        allow read, write: if request.auth != null; // authenticated users only
      }
      match /meta/{doc} {
        allow read; allow write: if false; // server-side only in prod
      }
    }
  }
*/

// Paste your Firebase config here and rename the file to firebase-config.js
window.FIREBASE_CONFIG = {
  apiKey: "REPLACE_ME",
  authDomain: "REPLACE_ME.firebaseapp.com",
  projectId: "REPLACE_ME",
  storageBucket: "REPLACE_ME.appspot.com",
  messagingSenderId: "REPLACE_ME",
  appId: "REPLACE_ME"
};
