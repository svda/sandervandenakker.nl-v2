import * as React from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import CssBaseline from '@material-ui/core/CssBaseline';
import createStyles from '@material-ui/core/styles/createStyles';
import withStyles from '@material-ui/core/styles/withStyles';

import Window from '../../components/Window';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import * as Actions from '../../actions';
import Menu from '../Menu';

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

class DefaultLayout extends React.Component<ILayoutStateProps & IHeaderOwnProps & IHeaderDispatchProps> {

  public render(): React.ReactNode {
    const { children, classes, loading, menuActive, toggleMenu } = this.props;

    return (
      <div id="app" className={menuActive ? classes.active : classes.inactive}>
        <Helmet
          defaultTitle="Sander van den Akker"
          titleTemplate="%s - Sander van den Akker"
        />
        {loading ?
          <div>Loading...</div> :
          <React.Fragment>
            <CssBaseline />
            <Menu />
            <Window onWindowClick={toggleMenu}>
              <Header onMenuButtonClick={toggleMenu} />
              {children}
              <Footer />
            </Window>
          </React.Fragment>
        }          
      </div>
    );
  }
}

interface ILayoutStateProps extends React.Props<any> {
  loading: boolean;
  menuActive: boolean;
}

interface IHeaderDispatchProps extends React.Props<any> {
  toggleMenu: any; // TODO Find the right type
}

interface IHeaderOwnProps {
  classes: any;
}

export default withStyles(styles)(connect<ILayoutStateProps, IHeaderDispatchProps>(
  (state: any) => ({
    loading: state.app.loading,
    menuActive: state.app.menu.active,
  }),
  (dispatch: Dispatch) => ({
    toggleMenu: (event: React.MouseEvent) => dispatch(Actions.toggleMenu()),
  }),
)(DefaultLayout));
