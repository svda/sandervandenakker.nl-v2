import * as React from 'react';
import { injectIntl, InjectedIntlProps } from 'react-intl';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { Theme } from '@material-ui/core/styles';
import createStyles from '@material-ui/core/styles/createStyles';
import withStyles from '@material-ui/core/styles/withStyles';

import menuItems from '../../../../constants/menu';
import { cover } from '../../../../theme/jss/components/layout';
import { Navigation } from '../../../Navigation/components';
import * as Actions from '../../actions';

const styles = createStyles(({ typography }: Theme) => ({
  menu: {
    ...cover,
    'background': 'url(/images/body.jpg)',
  },
  list: {
    display: 'table',
    height: '25%',
    margin: '0 auto',
    padding: 0,
    'text-align': 'center',
    'list-style': 'none',
  },
  item: {
    display: 'table-cell',
    'vertical-align': 'middle',
  },
  link: {
    color: '#eee',
    display: 'inline-block',
    padding: '1.5rem 1rem',
    'text-align': 'center',
    'text-decoration': 'none',
    transition: 'all 0.15s linear',

    '&:hover': {
      color: 'white',
      transform: 'scale(1.25)',
    },
  },
  icon: {
    'font-size': '2rem',
    'vertical-align': 'middle',
  },
  text: {
    display: 'block',
    'font-family': typography.title.fontFamily,
    'font-size': typography.title.fontSize,
    'font-weight': 300,
  },
}));

class Menu extends React.Component<IMenuOwnProps & IMenuDispatchProps & InjectedIntlProps> {
  public render(): React.ReactNode {
    const { classes } = this.props;

    return (
      <Navigation items={menuItems} classes={classes} />
    );
  }
}

interface IMenuStateProps {
  intl: any;
}
interface IMenuDispatchProps extends React.Props<any> {
  onItemClick: any; // TODO Find the right type
}

interface IMenuOwnProps {
  classes: any;
}

export default withStyles(styles, { withTheme: true })(connect<IMenuStateProps, IMenuDispatchProps>(
  ({ intl }: any) => ({
    intl,
  }),
  (dispatch: Dispatch) => ({
    onItemClick: (event: React.MouseEvent) => dispatch(Actions.toggleMenu()),
  }),
)(injectIntl(Menu)));