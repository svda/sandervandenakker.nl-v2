import * as React from 'react';
import { Helmet } from 'react-helmet';

import { Theme } from '@material-ui/core/styles/createMuiTheme';
import withStyles from '@material-ui/core/styles/withStyles';
import createStyles from '@material-ui/core/styles/createStyles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { Section } from '../../modules/App/components';
import { IThemeProps } from '../../theme';
import { container, masthead } from '../../theme/jss/components/layout';

const styles = ({}: Theme) => createStyles({
  main: {
  },
  masthead: {
    ...masthead,
  },
  container: {
    ...container,
  },
});

class About extends React.Component<IThemeProps> {
  public render() {
    const { classes } = this.props;

    return (
      <main className={classes.main}>
        <Helmet>
          <title>About</title>
        </Helmet>
        <Section className={classes.masthead}>
          <Grid container className={classes.container}>
            <Grid item xs={12}>
              <Typography variant="display2" align="center" color="textSecondary">
                About me
              </Typography>
              <Typography variant="headline">
                Hello! I'm a web consultant and developer based in Amsterdam, The Netherlands.
                I believe web development is an art, and I try to master it. This means I care about my craft, and I think about my work.
              </Typography>
            </Grid>
          </Grid>
        </Section>
        <Section className={classes.overview}>
          <Grid container className={classes.container}>
            <div className="row">
              <div className="col-sm-8">
                <p>For the past 12 years I have been involved in full stack web development, during which I worked for several
              big corporate clients like UvA, OLVG and MMC.</p>

                <h3>Background</h3>
                <p>When I was 14 years old I ran my own
              <a href="http://en.wikipedia.org/wiki/Bulletin_board_system" target="_blank">Bulletin Board System or BBS</a> called
              Pino's Place (my friends called me Pino, who is the Dutch equivalent of <a href="http://en.wikipedia.org/wiki/Big_Bird" target="_blank">Big Bird</a>).
              My mother didn't like it, but the telephone company did.<br />
                  In 1996 I first met the internet, it was love at first sight. Soon I developed my first personal website,
              with lots of animated gifs to impress girls on Geocities Chat, and I <a href="{{pathFor route='work'}}">haven't stopped</a>
                  building websites ever since. <img src="images/smiley_animated.gif" /></p>

                <p>Besides coding I try to blog from time to time. I also have an interest in criminology (or cybercrime more
                  specifically), photography, techno music and rowing. I prefer active holidays above lying on the beach, hence I went on a break
              for a year in summer 2014 to <a href="http://www.bikeabout.nl" target="_blank">explore the world on a bicycle</a>.</p>

                <h3>The official part: Curriculum Vitae</h3>
                <p><a href="">View my CV</a> (soon)</p>

                <h3>Bonus: 6 reasons why you should NOT hire me</h3>
                <p><strong>1. You are looking for a builder, not a creator <sup><a href="#note-1">1</a></sup></strong><br />
                  Developing a website or web application, like any form of coding, is not just about building the program.
                  It's a creative process. Specifications and requirements are a good starting point, but rarely contain enough
                  information to build the actual thing. The gaps that are left in the concept are to be filled by the developer.
                  Progress in a project always leads to new insights, which in turn leads to big changes in the functional design
                  and thus the code. If you have already fully decided what to build and how to build it, but only need someone to
              build it for you, I might not be your man.</p>

                <p><strong>2. New technologies scare you</strong><br />
                  I like to try out the latest technologies. When I see them fit for production after thorough testing, I won't
                  hesitate to use them in real life projects. If you're scared of the chances and possibilities new technologies
              may bring but rather stick to old technologies, I might not be your man.</p>

                <p><strong>3. You can't stand inquisitive people</strong><br />
                  The constant questioning of how and why certain choices are made and things are organized in a certain way is
                  one of the key characteristics of a good developer. You need someone who can pinpoint bottlenecks from a
                  technical or usability perspective, suggest improvements and motivate them. If you think you don't,
              I might not be your man.</p>

                <p><strong>4. Criticism is not something you appreciate</strong><br />
                  Only a team where all members are able to both give and take critique, is able to deliver awesome products.
              I need room to share my opinion, otherwise I might not be your man.</p>

                <p><strong>5. You have unrealistic expectations</strong><br />
                  Development is a difficult job. Functionalities often take more time to create than you might think. Partly this
                  is because clients don't fully understand the internals of the software but only focus on the functionality.
                  But there is more to it. Developing software is a creative process. I think about my code a lot in order to get
              the best result. The estimates I make <em>are realistic</em> for the high quality I try to achieve. If you have
              unrealistic expectations, but are on a tight budget as well, I might not be your man.</p>

                <p><strong>6. You require a specialist</strong><br />
                  Maybe a <i>Jack of all trades</i> is not the kind of person you're looking for. Coding nowadays has become less
                  impressive, however. Everyone can build a site without coding. But good developers are more than just programmers.
                  Besides being good in multiple programming languages they tend to be skilled in many other things as well.
                  First and foremost is communication, but project management, user experience design and graphics design skills are
              a big plus too. If you don't prefer someone with multiple skills, I might not be your man.</p>

                <p>The literate amongst you recognize some of these characteristics from "The Pragmatic Programmer" <sup><a href="#note-2">2</a></sup>.</p>

                <section id="footnotes">
                  <ul>
                    <li><a id="note-1">[1]</a> <a href="http://www.nczonline.net/blog/2012/06/12/the-care-and-feeding-of-software-engineers-or-why-engineers-are-grumpy/" target="_blank">The care and feeding of software engineers</a></li>
                    <li><a id="note-2">[2]</a> <a href="#" target="_blank">Hunt, A, Thomas D. (1999) 'The Pragmatic Programmer: From Journeyman to Master'</a></li>
                  </ul>
                </section>
              </div>
              <div className="col-sm-4">
                <img src="/images/portrait.png" className="avatar" />
                <h4>I have experience in</h4>
                <p>Vanilla Javascript, Meteor, Node.js, Ember.js, jQuery, HTML, CSS, Less, Bootstrap, PHP, Linux, Bash, Amazon Web Services (AWS), Google Compute Engine (GCE)</p>
              </div>
            </div>
          </Grid>
        </Section>
      </main>
    );
  }
}

export default withStyles(styles)(About);