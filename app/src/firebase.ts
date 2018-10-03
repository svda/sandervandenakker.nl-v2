import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/messaging';

const config = {
  apiKey: 'AIzaSyBUXKL4MjUfLsOVbrjT0_0_InuVAfn3ulY',
  authDomain: 'svda-firebase.firebaseapp.com',
  databaseURL: 'https://svda-firebase.firebaseio.com',
  projectId: 'svda-firebase',
  storageBucket: 'svda-firebase.appspot.com',
  messagingSenderId: '827271604881',
};

firebase.initializeApp(config);

export default firebase;

// export const database = firebase.database();
export const auth = firebase.auth();
// export const storage = firebase.storage();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const messaging = firebase.messaging();