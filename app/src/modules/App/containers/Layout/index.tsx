import * as React from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import createStyles from '@material-ui/core/styles/createStyles';
import withStyles from '@material-ui/core/styles/withStyles';

import Routes from '../../../../routes';
import Menu from '../../components/Menu';
import Window from '../../components/Window';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import * as Actions from '../../actions';
import '../../../../theme/index.css';

const transform = 'translate3d(0, 15%, 0) scale(0.85)';

const styles = createStyles({
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
});

class App extends React.Component<IAppStateProps & IHeaderOwnProps & IHeaderDispatchProps> {

  public render(): React.ReactNode {
    const { classes, menuActive, toggleMenu } = this.props;

    return (
      <div id="app" className={menuActive ? classes.active : classes.inactive}>
        <Helmet
          defaultTitle="Sander van den Akker"
          titleTemplate="%s - Sander van den Akker"
        />
        <Menu />
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
  toggleMenu: any; // TODO Find the right type
}

interface IHeaderOwnProps {
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
