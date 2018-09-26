import * as cors from 'cors';
import * as functions from 'firebase-functions';
import * as pathToRegexp from 'path-to-regexp';

const corsHandler = cors({ origin: true });

const languages = {
  en: require('../i18n/languages/en.json')
}

export const get = functions
  .region('europe-west1')
  .https
  .onRequest((request, response) => {
    corsHandler(request, response, () => {
      const keys = [];
      const re = pathToRegexp('/:locale?', keys, { strict: false });
      const pathVars = re.exec(request.path);
      const locale = pathVars[1] || 'en';
      response.send({
        intl: {
          locale: locale,
          messages: languages[locale],
        },
      });
    });
  });
