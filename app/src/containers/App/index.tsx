import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { withStyles, WithStyles } from '@material-ui/core/styles';

import Routes from '../../routes';
import Menu from './components/Menu';
import Window from './components/Window';
import Header from './components/Header';
import Footer from './components/Footer';

import * as Actions from './actions';
import '../../theme/index.css';

const transform = 'translate3d(0, 15%, 0) scale(0.85)';

const styles = {
  inactive: {
    transform: 'scale(1)',
  },
  active: {
    '& div:nth-child(2)': {
      transform,
      'z-index': 2,
    },
    '& div:nth-child(3)': {
      transform,
    },
  },
};

class App extends React.Component<IAppStateProps & IHeaderOwnProps & IHeaderDispatchProps> {

  public render(): React.ReactNode {
    const { classes, menuActive, toggleMenu } = this.props;

    return (
      <div id="app" className={menuActive ? classes.active : classes.inactive}>
        <Menu onItemClick={toggleMenu} />
        <Window onWindowClick={toggleMenu}>
          <Header />
          <Routes />
          <Footer />
        </Window>
      </div>
    );
  }
}

interface IAppStateProps extends React.Props<any> {
  menuActive: boolean;
}

interface IHeaderDispatchProps extends React.Props<any> {
  toggleMenu: any,
}

interface IHeaderOwnProps extends WithStyles {
  classes: any;
}

export default withStyles(styles)(connect<IAppStateProps, IHeaderDispatchProps>(
  (state: any) => ({
    menuActive: state.app.menu.active,
  }),
  (dispatch: Dispatch) => ({
    toggleMenu: (event: React.MouseEvent) => dispatch(Actions.toggleMenu()),
  }),
)(App));
