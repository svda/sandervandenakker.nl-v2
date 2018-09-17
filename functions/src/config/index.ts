import * as cors from 'cors';
import * as functions from 'firebase-functions';

const corsHandler = cors({ origin: true });

export const get = functions
  .region('europe-west1')
  .https
  .onRequest((request, response) => {
    corsHandler(request, response, () => {
      response.send({
        intl: {
          defaultLocale: 'en',
          locales: ['en', 'nl'],
        },
      });
    });
  });
