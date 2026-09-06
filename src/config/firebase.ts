import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
import { getFunctions } from 'firebase/functions';

const firebaseDefaults = {
  apiKey: 'demo-api-key',
  authDomain: 'demo.firebaseapp.com',
  databaseURL: 'https://demo-default-rtdb.firebaseio.com',
  projectId: 'demo',
  storageBucket: 'demo.appspot.com',
  messagingSenderId: '000000000000',
  appId: '1:000000000000:web:000000000000',
  measurementId: ''
};

export const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || firebaseDefaults.apiKey,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || firebaseDefaults.authDomain,
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL || firebaseDefaults.databaseURL,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || firebaseDefaults.projectId,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || firebaseDefaults.storageBucket,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || firebaseDefaults.messagingSenderId,
  appId: import.meta.env.VITE_FIREBASE_APP_ID || firebaseDefaults.appId,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || firebaseDefaults.measurementId
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
export const functions = getFunctions(app);
