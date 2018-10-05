import * as React from 'react';
import { Helmet } from 'react-helmet';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import withStyles from '@material-ui/core/styles/withStyles';
import createStyles from '@material-ui/core/styles/createStyles';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/icons/SentimentDissatisfied';

import { Section } from '../../modules/App/components';
import { IThemeProps } from '../../theme';

const styles = ({ palette }: Theme) => createStyles({
  main: {
    minHeight: '100%',
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
      <main className={classes.main}>
        <Helmet>
          <title>Page Not Found</title>
        </Helmet>
        <Section>
          <Icon className={classes.icon} />
          <Typography variant="display1" align="center" color="textSecondary">
            404 - Page Not Found
          </Typography>
        </Section>
      </main>
    );
  }
}

export default withStyles(styles)(NotFound);