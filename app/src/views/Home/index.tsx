import * as React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import { Theme } from '@material-ui/core/styles';
import createStyles from '@material-ui/core/styles/createStyles';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import { Section } from '../../modules/App/components';
import { IThemeProps } from '../../theme';
import { blockLink, container, masthead, paper } from '../../theme/jss/components/layout';

const styles = createStyles((theme: Theme) => ({
  masthead: {
    ...masthead,
    minHeight: 500,
    background: 'url(/images/bg-home.jpg) center',

    '& h1': {
      display: 'inline-block',
      marginBottom: '15px',
      padding: '10px 15px',
      lineHeight: 1,
      color: 'white',
      background: 'rgba(0, 0, 0, 0.5)',
    },
  },
  container: {
    ...container,
  },
  paper,
  blockLink: {
    ...blockLink,
    minHeight: 154,

    '& p': {
      marginBottom: 0,
    },
  },
  servicesBlockLink: {
    ...blockLink,
    color: theme.palette.grey[100],
    backgroundColor: theme.palette.grey[800],

    '&:hover': {
      backgroundColor: theme.palette.grey[900],
    },
  },
}));

class Home extends React.Component<IHomeProps> {
  public render() {
    const { classes } = this.props;
    return (
      <main className={classes.main}>
        <Helmet>
          <title>Software Engineer in Amsterdam</title>
        </Helmet>
        <Section className={classes.masthead}>
          <Grid container className={classes.container} spacing={24}>
            <Grid item xs={12}>
              <Typography variant="display1">Software Engineer in Amsterdam</Typography><br />
              <Typography variant="display3">Sander van den Akker</Typography>
            </Grid>
          </Grid>
        </Section>
        <Section>
          <Grid container className={classes.container} spacing={24}>
            <Grid item sm={12} md={5}>
              <Paper id="expertise" className={classes.paper}>
                <Link className={classes.servicesBlockLink} to="/services">
                  <h2 className="header">I can help you with...</h2>
                  <ul>
                    <li>Web development (Vanilla JS, Node, React, Angular)</li>
                    <li>Hybrid application development</li>
                    <li>Cloud computing services (Google Compute Engine, Amazon Web Services), Linux server maintenance</li>
                    <li>And many other software engineering related things</li>
                  </ul>
                  <p>All my services <span className="more" /></p>
                </Link>
              </Paper>
            </Grid>
            <Grid item sm={12} md={7}>
              <Grid container spacing={24} id="icons">
                <Grid item xs={12} sm={6}>
                  <Paper className={classes.paper}>
                    <Link className={classes.blockLink} to="/about">
                      <span className="icon-about icon-big" /> <h3>About Me</h3>
                      <p>Read about my background and professional philosophy. Free bonus material. <span className="more" /></p>
                    </Link>
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Paper className={classes.paper}>
                    <Link className={classes.blockLink} to="/services">
                      <span className="icon-services icon-big" /> <h3>My Services</h3>
                      <p>I can help you define, design, develop, and maintain your app or website. <span className="more" /></p>
                    </Link>
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Paper className={classes.paper}>
                    <Link className={classes.blockLink} to="/work">
                      <span className="icon-work icon-big" /> <h3>My Work</h3>
                      <p>The dedication to the projects I work on and the long term relationship I have with my clients speak for itself. Take a look at my work. <span className="more" /></p>
                    </Link>
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Paper className={classes.paper}>
                    <Link className={classes.blockLink} to="/lab">
                      <span className="icon-lab icon-big" /> <h3>Lab</h3>
                      <p>My personal blog where I like to share whatever is on my mind (probably something technical). <span className="more" /></p>
                    </Link>
                  </Paper>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Section>
      </main>
    );
  }
}

interface IHomeProps extends IThemeProps {
  toggleActive: (event: React.MouseEvent<HTMLInputElement>) => void;
}

export default withStyles(styles)(Home);
