import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

export interface IThemeProps {
  classes: any;
  theme?: any;
}

export const cover = {
  display: 'flex',
  position: 'absolute' as 'absolute', // Fix for type-widening issue.
  width: '100%',
  height: '100%',
};

export const masthead = {
  backgroundSize: 'cover',
  minHeight: 500,
  padding: '5rem 0',
  'text-align': 'center',
};

export default createMuiTheme({
  typography: {
    // fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
    // title: {
    //   fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
    // },
  },
});
