import * as React from 'react';
import { Helmet } from 'react-helmet';

import { Theme } from '@material-ui/core/styles/createMuiTheme';
import withStyles from '@material-ui/core/styles/withStyles';
import createStyles from '@material-ui/core/styles/createStyles';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import IconDNS from '@material-ui/icons/Dns';
import IconExtension from '@material-ui/icons/Extension';
import IconFavorite from '@material-ui/icons/Favorite';

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
          <title>Services</title>
        </Helmet>
        <Section className={classes.masthead}>
          <Grid container className={classes.container} spacing={24}>
            <Grid item xs={12}>
              <Typography variant="display2" align="center" color="textSecondary">
                Services
              </Typography>
              <Typography variant="headline" align="center">
                I can help you define, design, develop, and maintain your app or website.
              </Typography>
            </Grid>
          </Grid>
        </Section>
        <Section className={classes.categories}>
          <Grid container className={classes.container} justify="center" spacing={24}>
            <Grid item xs={12} sm={6} md={3}>
              <Card>
                <CardHeader
                  avatar={
                    <Avatar aria-label="Languages" className={classes.avatar}>
                      L
                    </Avatar>
                  }
                  title="Languages"
                />
                <CardContent>
                  <Typography variant="body1">
                    Javascript<br />
                    PHP<br />
                    Java<br />
                    Bash
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card>
                <CardHeader>
                  <IconExtension className={classes.icon} />
                  <Typography variant="title" gutterBottom>Frameworks &amp; Libraries</Typography>
                </CardHeader>
                <CardContent>
                  <Typography variant="body1">
                    Node JS<br />
                    React<br />
                    Angular 2<br />
                    Meteor
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card>
                <CardHeader>
                  <IconDNS className={classes.icon} />
                  <Typography variant="title" gutterBottom>Databases</Typography>
                </CardHeader>
                <CardContent>
                  <Typography variant="body1">
                    MongoDB<br />
                    MySQL / MariaDB<br />
                    Elastic Search
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card>
                <CardHeader>
                  <IconFavorite className={classes.icon} />
                  <Typography variant="title" gutterBottom>Skills</Typography>
                </CardHeader>
                <CardContent>
                  <Typography variant="body1">
                    Passion for writing clean code<br />
                    Cloud services and serverless<br />
                    Continuous Integration<br />
                    Git<br />
                    Scrum
                </Typography>
              </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Section>
        <Section>
          <Grid container className={classes.container} spacing={24}>
            <Grid item xs={12}>
              <Typography variant="title" gutterBottom>Creative application development</Typography>
              <ul>
                <li>I build apps that run in the browser like a normal website, but look and feel like a native app;</li>
                <li>apps that look good and work well on any device;</li>
                <li>apps that can be turned into an iPhone <i>and</i> Android app.</li>
              </ul>

              <Typography variant="title" gutterBottom>Javascript development</Typography>
              <ul>
                <li>Surprise! I like to code.</li>
              </ul>

              <Typography variant="title" gutterBottom>Responsive design</Typography>
              <ul>
                <li>I turn designs into functional websites that work on any device with any screen size.</li>
                <li>The mobile first approach and progressive enhancements make sure visitors have the best possible experience.</li>
              </ul>

              <Typography variant="title" gutterBottom>Cloud computing services &amp; Linux server maintenance</Typography>
              <ul>
                <li>I help move your site into the cloud, to gain performance and reliability, and save costs.</li>
                <li>Experienced with Amazon Web Services (AWS) and Google Compute Engine (GCE).</li>
                <li>Updates, security audits and performance optimization for your Linux server(s).</li>
              </ul>

              <Typography variant="title" gutterBottom>And many other web related things, like</Typography>
              <ul>
                <li>PHP development.</li>
                <li>Help with your open source Content Management System (CMS).</li>
                <li>Search Engine Optimization (SEO).</li>
                <li>Google Adwords.</li>
              </ul>
            </Grid>
            <Grid item xs={12} sm={4}>
            .
            </Grid>
          </Grid>
        </Section>
      </main>
    );
  }
}

export default withStyles(styles)(Services);