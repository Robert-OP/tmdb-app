import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyAafIA2_ZuQHpKDJjkwqx_YcRumv5kxhJ4',
  authDomain: 'tmdb-3f077.firebaseapp.com',
  databaseURL: 'https://tmdb-3f077.firebaseio.com',
  projectId: 'tmdb-3f077',
  storageBucket: 'tmdb-3f077.appspot.com',
  messagingSenderId: '864579185926',
  appId: '1:864579185926:web:9fd63f931e3ceb34aac287'
});

const db = firebaseApp.firestore();

export { db };
