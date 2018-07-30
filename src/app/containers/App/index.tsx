import React from 'react';

import { createStyles, MuiThemeProvider, withStyles, WithStyles } from '@material-ui/core/styles';

import Routes from '../../routes';
import theme from '../../theme';
import Header from './components/Header';

import '../../theme/index.css';

const styles = /*(theme: Theme) =>*/ createStyles({

});

class App extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);

    this.state = {
      active: false,
    }
  }

  public toggleActive = () => {
    this.setState({
      active: !this.state.active,
    });
  }

  public render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div id="app" className={this.getClassName()}>
          <Header toggleActive={this.toggleActive} />
          <Routes />
        </div>
      </MuiThemeProvider>
    );
  }

  private getClassName = () => {
    return this.state.active ? 'active' : '';
  }
}

interface IAppProps extends WithStyles {
  classes: {}
}

interface IAppState {
  active: boolean;
}

export default withStyles(styles)(App);
