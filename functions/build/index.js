"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript
exports.helloWorld = functions
    .region('europe-west1')
    .https
    .onRequest((request, response) => {
    response.send("Hello from Firebase!");
});
//# sourceMappingURL=index.js.map