import * as React from 'react';
import { injectIntl, InjectedIntlProps } from 'react-intl';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Dispatch } from 'redux';
import { Theme } from '@material-ui/core/styles';
import createStyles from '@material-ui/core/styles/createStyles';
import withStyles from '@material-ui/core/styles/withStyles';
import BuildIcon from '@material-ui/icons/Build';
import FaceIcon from '@material-ui/icons/Face';
import FolderIcon from '@material-ui/icons/FolderSpecial';
import HomeIcon from '@material-ui/icons/Home';
import SchoolIcon from '@material-ui/icons/School';

import { cover } from '../../../../theme';
import * as Actions from '../../actions';

const items = [{
  id: 'home',
  title: 'Home',
  icon: HomeIcon,
  ancestors: [],
}, {
  id: 'about',
  title: 'About',
  icon: FaceIcon,
  ancestors: [],
}, {
  id: 'services',
  title: 'Services',
  icon: BuildIcon,
  ancestors: [],
}, {
  id: 'work',
  title: 'Work',
  icon: FolderIcon,
  ancestors: [],
}, {
  id: 'lab',
  title: 'Lab',
  icon: SchoolIcon,
  ancestors: [],
}];

const getItemLink = (item: any) => {
  const parts: string[] = [];
  item.ancestors.forEach((a: any) => {
    parts.push(a);
  });
  if (item.id !== 'home') {
    parts.push(item.id);
  }
  return parts.join('/');
}

const styles = createStyles(({ typography }: Theme) => ({
  menu: Object.assign({}, cover, {
    'background': 'url(/images/body.jpg)',
  }),
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
      <div className={classes.menu}>
        <ul className={classes.list} role="navigation">
          {items.map(item => this.renderItem(item))}
        </ul>
      </div>
    );
  }

  private renderItem(item: any): React.ReactNode {
    const { classes, intl, onItemClick } = this.props;

    return (
      <li key={item.id} className={classes.item} onClick={onItemClick}>
        <Link className={classes.link} to={getItemLink(item)}>
          {item.icon && <item.icon className={classes.icon} />}
          <span className={classes.text}>{intl.formatMessage({ id: `menu.${item.id}` })}</span>
        </Link>
      </li>
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