import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyB-5F6ataDAuJ1uuU59atNB8rBmKekR2-I',
  authDomain: 'faran-instagram.firebaseapp.com',
  databaseURL: 'https://faran-instagram.firebaseio.com',
  projectId: 'faran-instagram',
  storageBucket: 'faran-instagram.appspot.com',
  messagingSenderId: '477836672932',
  appId: '1:477836672932:web:c18fe769530e025d0a4b31',
  measurementId: 'G-2BT3LRP5RT',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const storage = firebaseApp.storage();

export { db, auth, storage };
