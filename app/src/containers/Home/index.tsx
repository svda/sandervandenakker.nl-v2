import * as React from 'react';
import { Helmet } from 'react-helmet';
import createStyles from '@material-ui/core/styles/createStyles';
import withStyles from '@material-ui/core/styles/withStyles';

import { IThemeProps, masthead } from '../../theme';

const styles = createStyles({
  masthead: Object.assign({}, masthead, {
    background: 'url(/images/bg-home.jpg) center',
  }),
});

class Home extends React.Component<IHomeProps> {
  public async componentDidMount() {
    // const posts = [];
  }
  public render() {
    const { classes } = this.props;
    return (
      <main id="page" className="home">
        <Helmet>
          <title>Software Engineer in Amsterdam</title>
        </Helmet>
        <div className={classes.masthead} />
      </main>
    );
  }
}

interface IHomeProps extends IThemeProps {
  toggleActive: (event: React.MouseEvent<HTMLInputElement>) => void;
}

export default withStyles(styles)(Home);
