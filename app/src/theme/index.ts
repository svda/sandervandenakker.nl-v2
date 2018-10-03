import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

const theme = createMuiTheme({
  typography: {
    // fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
    // fontSize: 13,
    // title: {
    //   fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
    // },
  },
  overrides: {
    MuiButton: {

    },
  },
});
export interface IThemeProps {
  classes: any;
  theme?: any;
}

export default theme;
