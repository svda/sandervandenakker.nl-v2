import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

export const listPosts = functions
  .region('europe-west1')
  .https
  .onRequest((request, response) => {
    response.send("Hello from Firebase!");
  });