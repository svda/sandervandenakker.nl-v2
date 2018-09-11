import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import withStyles from '@material-ui/core/styles/withStyles';

import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';

import * as Actions from '../../actions';

const styles = {
  appBar: {
    background: 'transparent',
    boxShadow: 'none',
  },
  avatarButton: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
    cursor: 'pointer',
    padding: 0,
  },
  button: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.3)',
    },
  },
  flex: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -8,
  },
};

class Header extends React.Component<IHeaderStateProps & IHeaderOwnProps & IHeaderDispatchProps> {

  public render(): React.ReactNode {
    const { classes, signIn, signOut, toggleMenu, user } = this.props;

    return (
      <AppBar id="header" className={classes.appBar} title="App">
        <Toolbar>
          <IconButton className={[classes.menuButton, classes.button].join(' ')} onClick={toggleMenu} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="title" color="inherit" className={classes.flex} />
          {user && user.email ?
            <Avatar
              className={classes.avatarButton}
              src={user.photoURL}
              alt={user.displayName}
              onClick={signOut}
            />
            :
            <Button className={classes.button} color="inherit" onClick={signIn}>Sign In</Button>
          }
        </Toolbar>
      </AppBar>
    );
  }
}

interface IHeaderStateProps extends React.Props<any> {
  user: any;
}

interface IHeaderDispatchProps extends React.Props<any> {
  signIn: any;
  signOut: any,
  toggleMenu: any,
}

interface IHeaderOwnProps extends React.Props<any> {
  classes: any;
}

export default withStyles(styles)(connect<IHeaderStateProps, IHeaderDispatchProps>(
  (state: any) => ({
    user: state.app.user,
  }),
  (dispatch: Dispatch) => ({
    signIn: () => dispatch(Actions.loginUser()),
    signOut: () => dispatch(Actions.logoutUser()),
    toggleMenu: (event: React.MouseEvent) => dispatch(Actions.toggleMenu()),
  }),
)(Header));