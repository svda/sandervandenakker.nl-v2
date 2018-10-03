import * as React from 'react';

import { Theme } from '@material-ui/core/styles';
import createStyles from '@material-ui/core/styles/createStyles';
import withStyles from '@material-ui/core/styles/withStyles';

import { cover } from '../../../../theme/jss/components/layout';

const styles = createStyles((theme: Theme) => ({
  washi: {
    ...cover,
    cursor: 'pointer',
  },
  shoji: {
    ...cover,
    'background-color': theme.palette.background.default,
    'overflow-y': 'auto',
    'box-shadow': 'rgba(0, 0, 0, 0.3) 0 0 10px 3px',
    transform: 'scale(1)',
    transition: 'all 300ms cubic-bezier(0.175, 0.885, 0.335, 1.05)',
    'backface-visibility': 'hidden',
    '-webkit-overflow-scrolling': 'touch',
  },
}));

interface IWindowOwnProps extends React.Props<any>  {
  classes: any;
  onWindowClick: (event: React.MouseEvent) => void | undefined;
}

export default withStyles(styles)((props: IWindowOwnProps) => {
  const { classes } = props;

  return (
    <React.Fragment>
      <div className={classes.washi} onClick={props.onWindowClick} />
      <div className={classes.shoji}>
        {props.children}
      </div>
    </React.Fragment>
  );
});
