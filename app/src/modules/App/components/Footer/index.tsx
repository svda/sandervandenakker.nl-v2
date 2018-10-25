import * as React from 'react';

import { Theme } from '@material-ui/core/styles';
import createStyles from '@material-ui/core/styles/createStyles';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { IThemeProps } from '../../../../theme';
import { container } from '../../../../theme/jss/components/layout';

const styles = createStyles(( { palette }: Theme) => ({
  footer: {
    backgroundColor: 'white',
    borderTop: `solid 1px ${palette.grey[300]}`,
  },
  container: {
    ...container,
    padding: '30px 0',
  },
  address: {
    fontStyle: 'normal',
  },
}));

const Footer = ({ classes }: IThemeProps) => (
  <footer className={classes.footer}>
    <Grid container className={classes.container}>
      <Grid item xs={12} sm={10}>
        <Typography variant="title" gutterBottom>Get in touch</Typography>
        <Typography variant="body1" paragraph>
          Use the links on the right, or contact me in more traditional ways:
        </Typography>
        <address className={classes.address}>
          <strong>Sander van den Akker</strong><br />
          Touwbaan 4<br />
          1018 HS Amsterdam<br />
          <abbr title="Mobile">T:</abbr> <a href="tel:+31655115671">+31 6 5511 5671</a><br />
          <abbr title="Email">E:</abbr> <a href="mailto:info@sandervandenakker.nl">info@sandervandenakker.nl</a><br />
          KvK Amsterdam 65362632
        </address>
      </Grid>
      <Grid item xs={12} sm={2}>
        <a href="http://nl.linkedin.com/in/svdakker">LinkedIn</a><br />
        <a href="http://github.com/svda">Github</a>
      </Grid>
    </Grid>
  </footer>
);

export default withStyles(styles)(Footer);