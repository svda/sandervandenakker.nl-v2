import * as React from 'react';
import { Helmet } from 'react-helmet';

import { Theme } from '@material-ui/core/styles/createMuiTheme';
import withStyles from '@material-ui/core/styles/withStyles';
import createStyles from '@material-ui/core/styles/createStyles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { Section } from '../../modules/App/components';
import { IThemeProps } from '../../theme';
import { container, masthead, paper } from '../../theme/jss/components/layout';

const styles = ({ palette, spacing }: Theme) => createStyles({
  container: {
    ...container,
  },
  icon: {
    fontSize: '4rem',
    color: palette.text.secondary,
  },
  main: {
  },
  masthead: {
    ...masthead,
  },
  paper: {
    ...paper,
    padding: `${spacing.unit * 2}px`,
    textAlign: 'center',
  },
  smiley: {
    verticalAlign: 'top',
  },
});

class Services extends React.Component<IThemeProps> {
  public render() {
    const { classes } = this.props;

    return (
      <main className={classes.main}>
        <Helmet>
          <title>Lab</title>
        </Helmet>
        <Section className={classes.masthead}>
          <Grid container className={classes.container} spacing={24}>
            <Grid item xs={12}>
              <Typography variant="display2" align="center" color="textSecondary">
                Lab
              </Typography>
              <Typography variant="headline" align="center">
                Where I think about my work.
              </Typography>
            </Grid>
          </Grid>
        </Section>
        <Section className={classes.categories}>
          <Grid container className={classes.container} justify="center" spacing={24}>
            soon
          </Grid>
        </Section>
      </main>
    );
  }
}

export default withStyles(styles)(Services);