declare module 'redux-segment';

declare module '*.svg'
declare module '*.png'
declare module '*.jpg'

interface Window {
  /**
   * A hack for the Redux DevTools Chrome extension.
   */
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__(): <R>(a: R) => R;
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__<F extends Function>(f: F): F;
  devToolsExtension?: <F extends Function>() => F;
}