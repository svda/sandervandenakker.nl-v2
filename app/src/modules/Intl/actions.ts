export const INTL_UPDATE = 'INTL_UPDATE';

export const updateIntl = ({ locale, formats, messages }: any) => ({
  type: INTL_UPDATE,
  data: { locale, formats, messages },
})