import { Dispatch } from 'redux';

export const APP_CONFIG_UPDATE = 'APP_CONFIG_UPDATE';
export const APP_MENU_TOGGLE = 'APP_MENU_TOGGLE';
export const APP_PAGE_CHANGE = 'APP_PAGE_CHANGE';

export const changePage = (data: any) => {
  return {
    type: APP_PAGE_CHANGE,
    payload: data,
  };
};

export const toggleMenu = () => {
  return {
    type: APP_MENU_TOGGLE,
  };
};

export const getConfig = () => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await fetch('http://localhost:8010/svda-24741/us-central1/configGet');
      const data = await response.json();
      dispatch(getConfigSuccess(data));
    } catch (error) {
      dispatch(getConfigError(error));
    }
  }
}

export const getConfigSuccess = (payload: any) => {
  return {
    type: APP_CONFIG_UPDATE,
    payload,
  }
}

export const getConfigError = (error: any) => {
  console.error(error);
  return {
    type: APP_CONFIG_UPDATE, // TODO Create a standard error component that listens to this type
    payload: error,
  }
}