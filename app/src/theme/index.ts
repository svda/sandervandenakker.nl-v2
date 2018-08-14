import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

export interface IThemeProps {
  classes: any;
  theme?: any;
}

export const cover = {
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  width: 'auto',
  height: 'auto',
};

export default createMuiTheme({
  typography: {
    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
    title: {
      fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
    },
  },
});
