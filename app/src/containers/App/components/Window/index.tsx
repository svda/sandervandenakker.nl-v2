import * as React from 'react';
import { withStyles } from '@material-ui/core';

import { cover } from '../../../../theme';

const styles = {
  washi: Object.assign({}, cover, {
    cursor: 'pointer',
  }),
  shoji: Object.assign({}, cover, {
    'background-color': 'white',
    'overflow-y': 'auto',
    'box-shadow': 'rgba(0, 0, 0, 0.3) 0 0 10px 3px',
    transform: 'scale(1)',
    transition: 'all 400ms cubic-bezier(0.175, 0.885, 0.335, 1.05)',
    'backface-visibility': 'hidden',
    '-webkit-overflow-scrolling': 'touch',
  }),
}

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
