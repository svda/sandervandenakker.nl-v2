import * as React from 'react';
import { Helmet } from 'react-helmet';

import { withStyles, WithStyles } from '@material-ui/core/styles';

const styles = {
  masthead: {
    background: 'url("/images/bg-home.jpg") center',
    backgroundSize: 'cover',
    minHeight: 500,
  }
};

class Home extends React.Component<IHomeProps, IHomeState> {
  public async componentDidMount() {
    // const posts = [];
  }
  public render() {
    const { classes } = this.props;
    return (
      <main id="page" className="home">
        <Helmet>
          <title>Software Engineer in Amsterdam - Sander van den Akker</title>
        </Helmet>
        <div className={classes.masthead} />
      </main>
    );
  }
}

interface IHomeProps extends WithStyles {
  classes: any;
  toggleActive: (event: React.MouseEvent<HTMLInputElement>) => void;
}

interface IHomeState {
  posts: any;
}

export default withStyles(styles)(Home);
