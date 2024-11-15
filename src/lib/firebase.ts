import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCdVF02EgF08sNqnunBsjB3YAXddUGhndM",
  authDomain: "jangama2024.firebaseapp.com",
  projectId: "jangama2024",
  storageBucket: "jangama2024.firebasestorage.app",
  messagingSenderId: "284525604294",
  appId: "1:284525604294:web:3e446915e786f5c8f056c7",
  measurementId: "G-K9G4HC3EXK"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);