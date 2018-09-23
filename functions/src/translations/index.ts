import * as cors from 'cors';
import * as functions from 'firebase-functions';

const corsHandler = cors({ origin: true });

const languages = {
  en: require('../i18n/languages/en.json')
}

export const get = functions
  .region('europe-west1')
  .https
  .onRequest((request, response) => {
    corsHandler(request, response, () => {
      response.send({
        intl: {
          locale: 'en',
          messages: languages['en'],
        },
      });
    });
  });
