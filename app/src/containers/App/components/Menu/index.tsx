import * as React from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Build from '@material-ui/icons/Build';
import Face from '@material-ui/icons/Face';
import FolderSpecial from '@material-ui/icons/FolderSpecial';
import Home from '@material-ui/icons/Home';
import School from '@material-ui/icons/School';

import { cover, IThemeProps } from '../../../../theme';

const items = [{
  id: 'home',
  title: 'Home',
  icon: Home,
  ancestors: [],
}, {
  id: 'about',
  title: 'About',
  icon: Face,
  ancestors: [],
}, {
  id: 'services',
  title: 'Services',
  icon: Build,
  ancestors: [],
}, {
  id: 'work',
  title: 'Work',
  icon: FolderSpecial,
  ancestors: [],
}, {
  id: 'lab',
  title: 'Lab',
  icon: School,
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

const styles = (theme: any) => ({
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
    'font-family': theme.typography.title.fontFamily,
    'font-size': theme.typography.title.fontSize,
    'font-weight': 300,
  },
});

class Menu extends React.Component<IThemeProps & IMenuDispatchProps> {
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
    const { classes, onItemClick } = this.props;

    return (
      <li key={item.id} className={classes.item} onClick={onItemClick}>
        <Link className={classes.link} to={getItemLink(item)}>
          {item.icon && <item.icon className={classes.icon} />}
          <span className={classes.text}>{item.id}</span>
        </Link>
      </li>
    );
  }
}

interface IMenuStateProps extends React.Props<any> {

}

interface IMenuDispatchProps extends React.Props<any> {
  onItemClick: (event: React.MouseEvent) => void | undefined;
}

export default withStyles(styles, { withTheme: true })(connect<IMenuStateProps, IMenuDispatchProps>(
  (state: any) => ({
    
  }),
)(Menu));