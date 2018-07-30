import React from 'react';

import { withStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';

import { auth, googleAuthProvider } from '../../../../firebase';

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
    }
  },
  flex: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -8,
  }
};

class Header extends React.Component<IHeaderProps, IHeaderState> {
  constructor(props: IHeaderProps) {
    super(props);
    this.state = {
      currentUser: {},
    };
  }

  public componentDidMount() {
    auth.onAuthStateChanged((currentUser) => {
      this.setState({
        currentUser: currentUser || {}
      });
    });
  }

  public render() {
    const { classes, toggleActive } = this.props;

    return (
      <AppBar id="header" className={classes.appBar} title="Eccentrade App">
        <Toolbar>
          <IconButton className={[classes.menuButton, classes.button].join(' ')} onClick={toggleActive} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="title" color="inherit" className={classes.flex} />
          {this.state.currentUser.email ?
            this.displayCurrentUser() :
            <Button className={classes.button} color="inherit" onClick={this.signIn}>Sign In</Button>
          }
        </Toolbar>
      </AppBar>
    );
  }

  private signIn() {
    auth.signInWithPopup(googleAuthProvider);
  }

  private signOut() {
    auth.signOut();
  }

  private displayCurrentUser = () => {
    const { classes } = this.props;

    return (
      <Avatar
        className={classes.avatarButton}
        src={this.state.currentUser.photoURL}
        alt={this.state.currentUser.displayName}
        onClick={this.signOut}
      />
    );
  }
}

interface IHeaderProps {
  classes: any;
  toggleActive: (event: React.MouseEvent<HTMLInputElement>) => void;
}

interface IHeaderState {
  currentUser: any;
}

export default withStyles(styles)(Header);