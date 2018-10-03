export const APP_INIT_SUCCEEDED = 'APP_INIT_SUCCEEDED';
export const APP_MENU_TOGGLED = 'APP_MENU_TOGGLED';
export const APP_PAGE_CHANGED = 'APP_PAGE_CHANGE';

export const changePage = (data: any) => {
  return {
    type: APP_PAGE_CHANGED,
    data,
  };
};

export const toggleMenu = () => {
  return {
    type: APP_MENU_TOGGLED,
  };
};
