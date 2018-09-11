import { get as lodashGet } from 'lodash';

const config = {
  intl: {
    defaultLocale: 'en',
    locales: ['en', 'nl'],
  },
};

class Config {
  public static get(path: string) {
    try {
      return lodashGet(config, path);
    } catch (error) {
      console.error(`Configuration missing: ${path}`);
      return undefined;
    }
  }
}

export default Config;
