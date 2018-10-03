import * as React from 'react';
import { LoadingComponentProps } from 'react-loadable';

import withStyles from '@material-ui/core/styles/withStyles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { IThemeProps } from '../../../../theme';
import { masthead } from '../../../../theme/jss/components/layout';

const styles = (theme: any) => ({
  masthead,
});

type ILoadingProps = IThemeProps & LoadingComponentProps;

const Loading = ({ classes, isLoading, error, retry }: ILoadingProps) => {
  if (isLoading) {
    return <div className={classes.masthead}>Loading...</div>;
  }
  else if (error) {
    return (
      <div className={classes.masthead}>
        <Typography variant="display1" align="center" gutterBottom={true}>Sorry, there was a problem loading the page.</Typography>
        <Button variant="contained" color="secondary" size="large" onClick={retry}>Retry</Button>
      </div>
    );
  }
  return null;
}

export default withStyles(styles)(Loading);
