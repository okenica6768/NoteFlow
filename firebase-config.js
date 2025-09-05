// Firebase configuration for NoteFlow
const firebaseConfig = {
  apiKey: "AIzaSyA4ZqpjQVlK2sJnzhMo-5yPVsO48uVS0P0",
  authDomain: "noteflow-6768.firebaseapp.com",
  projectId: "noteflow-6768",
  storageBucket: "noteflow-6768.firebasestorage.app",
  messagingSenderId: "764244266996",
  appId: "1:764244266996:web:5d968b389df0d291f333a1",
  measurementId: "G-1FDRT58B05"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
