import * as React from 'react';
import { Theme } from '@material-ui/core/styles';
import createStyles from '@material-ui/core/styles/createStyles';
import withStyles from '@material-ui/core/styles/withStyles';

import { IThemeProps } from '../../../../theme';

const styles = createStyles((theme: Theme) => ({
  section: {
    padding: '30px 0',
  },
}));

const Section: React.StatelessComponent<IThemeProps & { className?: string }> = ({ children, classes, className }) => {
  const classNames = [classes.section]
  if (className) { classNames.push(className) };

  return (
    <section className={classNames.join(' ')}>
      {children}
    </section>
  )
}

export default withStyles(styles)(Section);