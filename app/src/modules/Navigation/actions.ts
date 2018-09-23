export const NAVIGATION_LOCATION_CHANGE = 'NAVIGATION_LOCATION_CHANGE';

export const changeLocation = (data: any) => {
  return {
    type: NAVIGATION_LOCATION_CHANGE,
    payload: data,
  };
};
