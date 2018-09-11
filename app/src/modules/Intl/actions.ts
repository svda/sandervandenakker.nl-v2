export const INTL_UPDATE = '@@intl/UPDATE';

export const updateIntl = ({ locale, formats, messages }: any) => ({
  type: INTL_UPDATE,
  payload: { locale, formats, messages },
})