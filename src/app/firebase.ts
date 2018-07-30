import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/messaging';

const config = {
	apiKey: 'AIzaSyCnaRNP0jWD7vgpynO8ExEVhe7lHMv5r28',
	authDomain: 'svda-24741.firebaseapp.com',
  databaseURL: 'https://svda-24741.firebaseio.com',
  messagingSenderId: '735325182068',
	projectId: 'svda-24741',
	storageBucket: 'svda-24741.appspot.com',
};

firebase.initializeApp(config);

export default firebase;

// export const database = firebase.database();
export const auth = firebase.auth();
// export const storage = firebase.storage();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const messaging = firebase.messaging();