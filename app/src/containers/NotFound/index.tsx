import * as React from 'react';
import { Helmet } from 'react-helmet';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import withStyles from '@material-ui/core/styles/withStyles';
import createStyles from '@material-ui/core/styles/createStyles';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/icons/SentimentDissatisfied';

import { IThemeProps } from '../../theme';
import { cover } from '../../theme/jss/components/layout';

const styles = ({ palette }: Theme) => createStyles({
  center: {
    ...cover,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  icon: {
    color: palette.text.secondary,
    fontSize: '10rem',
  },
});

class NotFound extends React.Component<IThemeProps> {
  public render() {
    const { classes } = this.props;

    return (
      <main id="page">
        <Helmet>
          <title>Page Not Found</title>
        </Helmet>
        <div className={classes.center}>
          <div>
            <Icon className={classes.icon} />
            <Typography variant="display1" align="center" color="textSecondary">
              404 - Page Not Found
            </Typography>
          </div>
        </div>
      </main>
    );
  }
}

export default withStyles(styles)(NotFound);